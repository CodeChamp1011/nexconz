import Blog from "./SimBlog";

const Card = () => {
  return (
    <div className=" w-[1033px] h-[514px] flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
      <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
        <p className="h-[74px] text-[21px]">Lesson List</p>
        <Blog />
      </div>
    </div>
  );
};

export default Card;
