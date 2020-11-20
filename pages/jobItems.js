import React from "react";
import axios from "axios";
import { Constants } from "../util/constants";
import JobDescription from "./jobDescription";

const JobItems = ({ name }) => {
  let [items, setJobItems] = React.useState([]);
  let [jobDescriptionToggle, setJobDescriptionToggle] = React.useState({});

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOB_ITEMS}`,
      params: { jobName: name },
    })
      .then((response) => {
        setJobItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const jobDetailItems = () => {
    if (!items) {
      return;
    }
    const renderJobItems = items.map((item) => {
      return (
        <li class="mt-5 my-4 pb-1 border-b" onClick={(event) => { event.stopPropagation(); setJobDescriptionToggle({ ...jobDescriptionToggle, [item.job_id]: !jobDescriptionToggle[item.job_id] })}}>
          <div>
            <div class="font-bold">{item.job_title}</div>
            <div class="float-right">3 weaks ago</div>
          </div>
          <div class="pt-1 bottom-b pb-8">
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