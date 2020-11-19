import React from "react";
import axios from "axios";
import { Constants } from "../util/constants";

const Modal = () => {
  let [department, setDepartmentData] = React.useState("");

  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: `${Constants.WEB_SERVICE_URL}${Constants.WEB_SERVICE_ROUTES.ALL_DEPARTMENTS}`,
    })
      .then((response) => {
        setDepartmentData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderDepartment = (department) => {
    if (!department) {
      return;
    }
    const departmentList = department.map(item => {
      return (
        <div className="flex mt-5 w-1/4" key={item.key}>
        <span>{item.key}</span>
        <span className="text-xs text-gray-400">
          {item.doc_count}
        </span>
      </div>
      )
    })
    return departmentList;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle h-full w-10/12 mx-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <p className="text-sm text-gray-500">department</p>
                </div>
                <div className="flex flex-wrap">
                  {renderDepartment(department)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
