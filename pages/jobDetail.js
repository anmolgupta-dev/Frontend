import React from "react";
import axios from "axios";
import JobItems from "./jobItems";
import { Constants } from "../util/constants";

const jobComponent = () => {
  let [jobs, setJobsData] = React.useState("");
  let [jobItemsToggle, setJobItemsToggle] = React.useState({});

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOBS}`,
    })
      .then((response) => {
        setJobsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const jobTitle = (jobs) => {
    if (!jobs) {
      return;
    }
    const renderJobs = jobs.map((data) => {
    let liClassName = "my-4 pb-1";
    if(jobItemsToggle[data.name]) {
      liClassName = 'my-4 pb-3 border-b';
    }
    return (
      <div key={data.name+data.total_jobs_in_hospital} onClick={() => setJobItemsToggle({ ...jobItemsToggle, [data.name]: !jobItemsToggle[data.name] })}>
        <li className={liClassName}>
          <div className="flex flex-row">
            <div className="circle inline-block bg-gray-500 text-white rounded-lg bg-white flex items-center justify-center">{data.name.slice(0, 2).toUpperCase()}</div>
            <div className="pl-3 flex items-center justify-center">{data.total_jobs_in_hospital} for {data.name}</div>
          </div>
        </li>
        {jobItemsToggle[data.name] &&  <JobItems name={data.name}/>}
      </div>
    );
  });
  return renderJobs;
}

  return (
    <div>
      <div className="flex p-1 pt-5">
        <div className="mr-48">7,753 job postings</div>
        <div className="flex">
          <div className="text-gray-400 ml-5 mr-5">Sort by</div>
          <ul className="flex">
            <li className="mr-5">Location</li>
            <li className="mr-5">Role</li>
            <li className="mr-5">Department</li>
            <li className="mr-5">Education</li>
            <li className="mr-5">Experience</li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <ul>{jobTitle(jobs)}</ul>
      </div>
    </div>
  );
};

export default jobComponent;
