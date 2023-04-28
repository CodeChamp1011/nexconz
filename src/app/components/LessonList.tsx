const LessonList = () => {
  return (
    <>
      <div className="w-[1033px]">
        <div className=" w-[1033px] h-[574px] flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
          <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
            <p className="h-[74px] text-[21px] font-medium">Lesson List</p>
            <div className=" w-[993px] h-[68px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] px-[25px] ">
                <div className="text-left align-middle">
                  <p className="text-[14px] font-medium">UI/UX Course</p>
                  <p className="text-[12px] text-[#BFBFBF]">September Batch</p>
                </div>

                <div
                  id="content"
                  className="text-center text-[12px] text-[#BFBFBF]"
                >
                  <div className="flex justify-between items-center">
                    <img className="w-[14px] mr-[10px]" src="/time.png" />
                    <p className="pt-[4px]">7pm to 9pm</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img className="w-[14px] mr-[10px]" src="/calendar.png" />
                    <p>10 oct 2023</p>
                  </div>
                </div>
                <div className="flex justify-between py-[22px] align-middle items-center">
                  <div className="w-[70px] bg-[#DCFFDF] rounded-full h-[3px] dark:bg-[#DCFFDF] text-center">
                    <div className="bg-[#6EA773] h-[3px] rounded-full w-[90%]"></div>
                  </div>
                  <div className="mx-[16px] font-medium">
                    <span className="text-[14px] ">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center text-center my-[33px]">
          <div className="inline font-medium text-[14px] m-[10px]">
            <p>Items per pages:</p>
          </div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="w-[77px] h-[38px] mx-[20px] text-black font-medium text-sm px-4 py-2.5 text-center inline-flex items-center bg-white border border-gray-200 rounded-[10px] shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            type="button"
          >
            15
            <img src="/dropdown.png" className="mx-[16px]" />
          </button>

          {/* <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div> */}
          <div className="inline font-medium text-[14px]">
            <p className="m-[10px]">1 - 6 Of 6</p>
          </div>
          <button type="button">
            <img src="/previous-page-icon.png" className="mx-[16px]" />
          </button>
          <button type="button">
            <img src="/next-page-icon.png" className="mx-[16px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LessonList;
