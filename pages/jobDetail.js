import React from "react";
import axios from "axios";
import JobItems from "./jobItems";
import { Constants } from "../util/constants";

const jobComponent = (props) => {
  let [jobs, setFilterData] = React.useState("");
  let [toggle, setToggle] = React.useState({});

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.JOBS}`,
    })
      .then((response) => {
        setFilterData(response.data);
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
      console.log({ data });
    return (
      <div onClick={() => setToggle({ [data.name]: !toggle[data.name] })}>
        <li class="mt-16 my-4 pb-1 border-b" key={data.total_jobs_in_hospital} >
          {data.total_jobs_in_hospital} for {data.name}
        </li>
        {toggle[data.name] &&  <JobItems name={data.name}/>}
      </div>
    );
  });
  return renderJobs;
}

  return (
    <div>
      <div class="flex p-1 pt-5">
        <div class="mr-64">7,753 job postings</div>
        <div class="flex">
          <div class="text-gray-400 ml-5 mr-5">Sort by</div>
          <ul class="flex">
            <li class="mr-5">Location</li>
            <li class="mr-5">Role</li>
            <li class="mr-5">Department</li>
            <li class="mr-5">Education</li>
            <li class="mr-5">Experience</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>{jobTitle(jobs)}</ul>
        {/* <ul>{jobItems(items)}</ul> */}
      </div>
    </div>
  );
};

export default jobComponent;
