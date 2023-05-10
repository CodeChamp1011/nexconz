import SimBlog from "../../components/SimBlog";

const Certificate = () => {
  return (
    <>
      <div className="h-[514px] overflow-hidden overflow-y-scroll flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between mt-[50px]">
        <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
          <p className="h-[74px] text-[21px] font-medium">Certificate</p>
          <SimBlog />
          <SimBlog />
        </div>
      </div>
    </>
  );
};

export default Certificate;
