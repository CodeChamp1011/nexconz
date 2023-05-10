const Transactions = () => {
  return (
    <div>
      <div className=" h-[566px] overflow-hidden overflow-y-scroll flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 justify-between">
        <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
          <p className="h-[74px] text-[21px] font-medium">Transaction</p>
          <div className="h-[447px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
            <div
              className="h-[53px] my-[10px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
              style={{ flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] lg:px-[25px] px-[5px] ">
                <div className="text-left text-[14px] font-medium">
                  <p>#001</p>
                </div>
                <div
                  id="content"
                  className="text-center text-[#BFBFBF] text-[12px] flex justify-between items-center"
                >
                  <img className="w-[14px] mr-[10px]" src="/calendar.png" />
                  10 oct 2023
                </div>
                <div id="action" className="text-right inline-flex text-[14px]">
                  <p>
                    <a href="#view" className="text-[#F4C14E] px-2">
                      View
                    </a>{" "}
                    |{" "}
                    <a href="#download" className="text-[#3E8944] px-2">
                      Download
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-[53px] my-[10px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
              style={{ flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] lg:px-[25px] px-[5px]">
                <div className="text-left text-[14px] font-medium">
                  <p>#001</p>
                </div>
                <div
                  id="content"
                  className="text-center text-[#BFBFBF] text-[12px] flex justify-between items-center"
                >
                  <img className="w-[14px] mr-[10px]" src="/calendar.png" />
                  10 oct 2023
                </div>
                <div id="action" className="text-right inline-flex text-[14px]">
                  <p>
                    <a href="#view" className="text-[#F4C14E] px-2">
                      View
                    </a>{" "}
                    |{" "}
                    <a href="#download" className="text-[#3E8944] px-2">
                      Download
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-[53px] my-[10px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
              style={{ flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] lg:px-[25px] px-[5px]">
                <div className="text-left text-[14px] font-medium">
                  <p>#001</p>
                </div>
                <div
                  id="content"
                  className="text-center text-[#BFBFBF] text-[12px] flex justify-between items-center"
                >
                  <img className="w-[14px] mr-[10px]" src="/calendar.png" />
                  10 oct 2023
                </div>
                <div id="action" className="text-right inline-flex text-[14px]">
                  <p>
                    <a href="#view" className="text-[#F4C14E] px-2">
                      View
                    </a>{" "}
                    |{" "}
                    <a href="#download" className="text-[#3E8944] px-2">
                      Download
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-[53px] my-[10px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
              style={{ flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] lg:px-[25px] px-[5px]">
                <div className="text-left text-[14px] font-medium">
                  <p>#001</p>
                </div>
                <div
                  id="content"
                  className="text-center text-[#BFBFBF] text-[12px] flex justify-between items-center"
                >
                  <img className="w-[14px] mr-[10px]" src="/calendar.png" />
                  10 oct 2023
                </div>
                <div id="action" className="text-right inline-flex text-[14px]">
                  <p>
                    <a href="#view" className="text-[#F4C14E] px-2">
                      View
                    </a>{" "}
                    |{" "}
                    <a href="#download" className="text-[#3E8944] px-2">
                      Download
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
