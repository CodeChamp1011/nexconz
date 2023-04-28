const Notice = () => {
  return (
    <div className=" w-[635px] h-[219px] flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col w-[185px] h-[179px] bg-[#E5EFFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center grid-rows-3">
          <div className="w-[67px] h-[67px] rounded-[32.5px] bg-[#2257C7] row-span-2 m-[15px]"></div>
          <div className="text-center">
            <p className="text-[14px] font-medium">Total sessions</p>
          </div>
          <div className="row-span-1">
            <p className="text-[21px] mt-[10px] font-medium">5</p>
          </div>
        </div>
        <div className="flex flex-col w-[185px] h-[179px] bg-[#EDE9FA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center grid-rows-3">
          <div className="w-[67px] h-[67px] rounded-[32.5px] bg-[#775ACA] row-span-2 m-[15px]"></div>
          <div className="text-center">
            <p className="text-[14px] font-medium">Total sessions</p>
          </div>
          <div className="row-span-1">
            <p className="text-[21px] mt-[10px] font-medium">5</p>
          </div>
        </div>
        <div className="flex flex-col w-[185px] h-[179px] bg-[#E3F6F2] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 items-center grid-rows-3">
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
