import jobComponent from "./jobDetail";
import header from "./header";
const mainComponent = () => {
  return (
    <div class="bg-gray-100 h-full w-full">
      {header()}
      <div class="w-1/4">left section</div>
      <div class="w-3/4 box-border p-4 border-4 border-solid bg-white ml-64 appearance-none block py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
        <div>{jobComponent()}</div>
      </div>
    </div>
  );
};
export default mainComponent;
