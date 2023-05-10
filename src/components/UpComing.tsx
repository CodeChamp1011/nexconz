const UpComing = () => {
  return (
    <div className="h-[329px] lg:flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 justify-between">
      <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
        <p className="h-[74px] text-[21px] font-medium">Upcoming Class</p>
        <div className="h-[210px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
          <div
            className="h-[68px] mb-[15px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 justify-between"
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
            <div
              className="justify-between w-full py-[15px] sm:px-[25px] px-[5px]"
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              <div className="text-left align-middle min-w-[95px]">
                <p className="sm:text-[14px] text-[12px] font-medium">
                  Content name
                </p>
                <p className="sm:text-[12px] text-[10px] text-[#BFBFBF] font-medium">
                  CLASS
                </p>
              </div>
              <div
                className="justify-between"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <div
                  id="content"
                  className="text-center text-[12px] text-[#BFBFBF] font-medium sm:mr-[30px] mr-0 min-w-[100px]"
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
                <div className="sm:inline-flex flex justify-center align-middle">
                  <div>
                    <img
                      className="sm:w-[35px] w-[24px] mr-[10px]"
                      src="/avatar.jpg"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="sm:text-[14px] text-[12px] fort-medium">
                      By Akileshwaran
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
