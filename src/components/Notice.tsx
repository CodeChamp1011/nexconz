const Notice = () => {
  return (
    <div className="lg:h-[219px] h-[100%] lg:flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-center items-center">
      <div className="lg:grid w-[100%] lg:px-[20px] px-0 grid-cols-3 gap-4">
        <div
          className="lg:flex flex-col w-[100%] h-[179px] bg-[#E5EFFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100  items-center grid-rows-3"
          style={{ display: "flex" }}
        >
          <div className="w-[67px] h-[67px] rounded-[32.5px] bg-[#2257C7] row-span-2 m-[15px]"></div>
          <div className="text-center">
            <p className="text-[14px] font-medium">Total sessions</p>
          </div>
          <div className="row-span-1">
            <p className="text-[21px] mt-[10px] font-medium">5</p>
          </div>
        </div>
        <div className="flex flex-col h-[179px] bg-[#EDE9FA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 items-center grid-rows-3">
          <div className="w-[67px] h-[67px] rounded-[32.5px] bg-[#775ACA] row-span-2 m-[15px]"></div>
          <div className="text-center">
            <p className="text-[14px] font-medium">Total sessions</p>
          </div>
          <div className="row-span-1">
            <p className="text-[21px] mt-[10px] font-medium">5</p>
          </div>
        </div>
        <div className="flex flex-col h-[179px] bg-[#E3F6F2] border border-gray-200 rounded-lg shadow hover:bg-gray-100  items-center grid-rows-3">
          <div className="w-[67px] h-[67px] rounded-[32.5px] bg-[#00C9A7] row-span-2 m-[15px]"></div>
          <div className="text-center">
            <p className="text-[14px] font-medium">Total sessions</p>
          </div>
          <div className="row-span-1">
            <p className="text-[21px] mt-[10px] font-medium">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
