import React from "react";
import fetch from "isomorphic-unfetch";
import { Constants } from "../util/constants";
import JobDescription from "./jobDescription";

const JobItems = ({ name }) => {
  let [items, setJobItems] = React.useState([]);
  let [jobDescriptionToggle, setJobDescriptionToggle] = React.useState({});

  const fetchData = async() => {
    const res = await fetch(`${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOB_ITEMS}/?jobName=${name}`);
    const data = await res.json();
    setJobItems(data);
  }

  React.useEffect(() => {
    fetchData();
  }, [name]);

  const orderBy = (sortingKeys) => {
    items.sort((jobItem1, jobItem2) => {
      let cumulativeResult = 0;
      sortingKeys.forEach(sortingKey => {
        let sortBy = Object.keys(sortingKey)[0];
        let order = sortingKey[sortBy];
        let compareResult;
        const value1 = jobItem1[sortBy];
        const value2 = jobItem2[sortBy];
        if(typeof value1 === 'string') {
          compareResult = value1.localeCompare(value2);
        } else if (value1 instanceof Array) {
          compareResult = value1.length - value2.length;
        }
        if(order === "desc") {
          compareResult = (-1) * compareResult;
        }
        cumulativeResult = cumulativeResult || compareResult;
      });
      return cumulativeResult;
    });
  }

  const jobDetailItems = () => {
    const sortingKeys = [{department: "desc"}, {location: "desc"}]
    if (!items) {
      return;
    }
    const renderJobItems = items.map((item, index) => {
      return (
        <li className='mt-5 my-4 pb-1 border-b' onClick={(event) => { event.stopPropagation(); setJobDescriptionToggle({ ...jobDescriptionToggle, [item.job_id]: !jobDescriptionToggle[item.job_id] })}}>
          <div>
            <div className="font-bold">{item.job_title}</div>
            <div className="float-right mt-1">3 weaks ago</div>
          </div>
          <div className="pt-1 bottom-b pb-4">
            {item.job_type} | {item.salary_range[0]} - {item.salary_range[1]} an
            hour | {item.city}
          </div>
          {jobDescriptionToggle[item.job_id] && <JobDescription name={name} jobId={item.job_id}/>}
        </li>
      );
    });
    return renderJobItems;
  };

  return <div>{jobDetailItems(items)}</div>;
};

export default JobItems;