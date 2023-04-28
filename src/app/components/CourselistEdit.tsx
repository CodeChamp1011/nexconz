const CourselistEdit = () => {
  return (
    <>
      <div className="w-[1033px]">
        <div className="flex justify-end my-[20px]">
          <button
            type="button"
            className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <img src="/add.png" className="mr-[15px]" />
            <p>Create Syllabus</p>
          </button>
        </div>
        <div className=" w-[1033px] h-[514px] flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
          <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
            <p className="h-[74px] text-[21px] font-medium">Syllabus List</p>

            <div className="my-[20px] w-[993px] h-[53px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] px-[25px] ">
                <div className="text-left text-[14px] font-medium flex">
                  <p>1.</p>
                  <p className="ml-[5px]">Introduction</p>
                </div>
                <div
                  id="action"
                  className="text-right flex text-[14px] items-center"
                >
                  <a href="#view" className="text-[#775ACA] px-2">
                    <img className="" src="/Vector.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="my-[20px] w-[993px] h-[53px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] px-[25px] ">
                <div className="text-left text-[14px] font-medium flex">
                  <p>2.</p>
                  <p className="ml-[5px]">Research</p>
                </div>
                <div
                  id="action"
                  className="text-right flex text-[14px] items-center"
                >
                  <a href="#view" className="text-[#775ACA] px-2">
                    <img className="" src="/Vector.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="new_syllabus"
          className="px-[40px] py-[50px] bg-[#FAFAFA] w-[817px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-between ">
            <p className="text-[16px] font-medium"> Create Syllabus</p>
            <img className="w-[20px] h-[20px]" src="/cancel.png" />
          </div>
          <div className="pt-[20px]">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="pt-[20px]">
            <label
              htmlFor="topic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Topic Covered
            </label>
            <textarea
              id="topic"
              rows={10}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className=" mt-[30px] flex justify-center">
            <button
              type="button"
              className="text-black bg-[#F6DD4D] hover:bg-[#F1F1BB] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourselistEdit;
