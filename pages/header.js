export default () => (
  <div>
    <div className="p-4 shadow rounded bg-white">
      <ul class="flex">
        <li class="mr-20">
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
        <li class="mr-4 border-solid border-2 border-blue-500 rounded-full">
          <a class="inline-block py-2 px-4 text-blue-500" href="#">
            CREATE JOB
          </a>
        </li>
        <li>
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          ></img>
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
