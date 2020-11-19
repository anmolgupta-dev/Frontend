import jobComponent from "./jobDetail";
import header from "./header";
import FilterComponent from "./filterComponent";
import { Constants } from "../util/constants";

const mainComponent = () => {
  return (
    <div class="bg-gray-100 h-full w-full">
      {header()}
      <div className="flex mt-2">
        <div class="w-1/4 ml-3">
          <FilterComponent
            title={Constants.FILTER_TITLE.JOB_TYPE}
            filterRoute={Constants.WEB_SERVICE_ROUTES.JOB_TYPES}
          />
          <FilterComponent
            title={Constants.FILTER_TITLE.DEPARTMENT}
            filterRoute={Constants.WEB_SERVICE_ROUTES.DEPARTMENTS}
            showMore={true}
          />
          <FilterComponent
            title={Constants.FILTER_TITLE.WORK_SCHEDULE}
            filterRoute={Constants.WEB_SERVICE_ROUTES.WORK_SCHEDULES}
          />
          <FilterComponent
            title={Constants.FILTER_TITLE.EXPERIENCE}
            filterRoute={Constants.WEB_SERVICE_ROUTES.EXPERIENCES}
          />
        </div>
        <div class="w-3/4 box-border p-4 border-4 border-solid bg-white ml-16 appearance-none block py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
          <div>{jobComponent()}</div>
        </div>
      </div>
    </div>
  );
};
export default mainComponent;
