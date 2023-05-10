const SimBlog = () => {
  return (
    <div
      className="h-[53px] mt-[15px]  flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
      style={{ display: "flex", flexWrap: "nowrap" }}
    >
      <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
      <div
        className="justify-between items-center justify-center sm:flex w-full py-[15px] sm:px-[25px] px-[5px]"
        style={{ display: "flex" }}
      >
        <div className="text-left text-[14px]">
          <p>UI/UX Course Certificate</p>
        </div>
        <div
          id="content"
          className="text-center text-[#BFBFBF] text-[12px] flex justify-between items-center min-w-[100px]"
        >
          <img className="w-[14px] mr-[10px]" src="/calendar.png" />
          10 oct 2023
        </div>
        <div
          id="action"
          className="sm:text-right text-center items-center justify-center inline-flex text-[14px]"
        >
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
  );
};

export default SimBlog;
