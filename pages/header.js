const header = () => {
  return (
    <div>
      <div className="p-4 shadow rounded bg-white">
        <ul class="flex">
          <li class="mr-10">
            <a
              class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 font-bold"
              href="#"
            >
              HEALTH EXPLORE
            </a>
          </li>
          <li class="mr-2">
            <a
              class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              PROFILE
            </a>
          </li>
          <li class="mr-2">
            <a
              class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              JOBS
            </a>
          </li>
          <li class="mr-2">
            <a
              class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              PROFESSIONAL NETWORK
            </a>
          </li>
          <li class="mr-2">
            <a
              class="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4"
              href="#"
            >
              LOUNGE
            </a>
          </li>
          <li class="mr-24">
            <a class="inline-block py-2 px-4 text-black" href="#">
              SALARY
            </a>
          </li>
          <li class="mr-4 border-solid border-2 border-blue-500 rounded-md">
            <a class="inline-block py-2 px-4 text-blue-500" href="#">
              CREATE JOB
            </a>
          </li>
          <li>
            <div class="circle bg-blue-500 text-white rounded-full bg-white flex items-center justify-center">PR</div>
          </li>
          <li class="mr-2">
            <a class="inline-block py-2 px-4 text-black" href="#">
              LOGOUT
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full mt-5 mb-2 md:mb-0 px-3">
        <input
          id="search-bs-class"
          class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="text"
          placeholder="Search for any job, keywords, title or company"
        />
      </div>
    </div>
  );
};

export default header;
