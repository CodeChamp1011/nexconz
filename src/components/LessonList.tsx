const LessonList = () => {
  return (
    <>
      <div>
        <div className="h-[574px] overflow-hidden overflow-y-scroll flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between mt-[50px]">
          <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
            <p className="h-[74px] text-[21px] font-medium">Lesson List</p>
            <div
              className="h-[68px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 justify-between"
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div
                className="justify-between flex w-full sm:py-[15px] pt-[15px] sm:px-[25px] px-[5px]"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <div className="text-left align-middle min-w-[120px]">
                  <p className="text-[14px] font-medium">UI/UX Course</p>
                  <p className="text-[12px] text-[#BFBFBF]">September Batch</p>
                </div>
                <div
                  id="content"
                  className="text-center text-[12px] text-[#BFBFBF] min-w-[100px]"
                >
                  <div className="flex justify-between items-center">
                    <img className="w-[14px] mr-[10px]" src="/time.png" />
                    <p>7pm to 9pm</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img className="w-[14px] mr-[10px]" src="/calendar.png" />
                    <p>10 oct 2023</p>
                  </div>
                </div>
                <div className="flex sm:justify-between justify-center align-middle items-center">
                  <div className="w-[70px] bg-[#DCFFDF] rounded-full h-[3px] text-center">
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
        <div
          className="justify-end items-center text-center my-[33px]"
          style={{ display: "flex", flexWrap: "nowrap" }}
        >
          <div className="inline font-medium text-[14px] m-[10px]">
            <p>Items per pages:</p>
          </div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="w-[77px] h-[38px] mx-[20px] text-black font-medium text-sm px-4 py-2.5 text-center inline-flex items-center bg-white border border-gray-200 rounded-[10px] shadow hover:bg-gray-100"
            type="button"
          >
            15
            <img src="/dropdown.png" className="mx-[16px]" />
          </button>
          <div className="inline font-medium text-[14px] min-w-[100px]">
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
