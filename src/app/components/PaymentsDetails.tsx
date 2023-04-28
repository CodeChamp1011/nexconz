const PaymentsDetails = () => {
  return (
    <div className=" w-[378px] h-[566px] flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
      <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
        <p className="h-[74px] text-[21px] font-medium">Payment details</p>
        <div className="h-[447px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
          <div className=" mb-[30px] flex justify-start">
            <div className="justify-between flex w-full items-center">
              <p className="text-[14px] font-medium">Total course amount</p>
              <p className="text-[14px] font-medium">30,000</p>
            </div>
          </div>
          <div className=" mb-[30px] flex justify-start">
            <div className="justify-between flex w-full items-center">
              <p className="text-[14px] font-medium">Amount Paid</p>
              <p className="text-[14px] font-medium">22,000</p>
            </div>
          </div>
          <div className=" mb-[30px] flex justify-start">
            <div className="justify-between flex w-full items-center">
              <p className="text-[14px] font-medium">Amount Need To Pay </p>
              <p className="text-[14px] font-medium">8,000</p>
            </div>
          </div>
          <div className=" mb-[30px] flex justify-center">
            <button
              type="button"
              className="text-black bg-[#F6DD4D] hover:bg-[#F1F1BB] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsDetails;
