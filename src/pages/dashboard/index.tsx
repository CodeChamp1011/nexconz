import Notice from "../../components/Notice";
import UpComing from "../../components/UpComing";
import TasktoDo from "../../components/TasktoDo";

export default function Dashboard() {
  return (
    <>
      <div className="lg:grid flex flex-col lg:grid-flow-col grid-flow-row gap-4 mt-[50px]">
        <div className="col-span-2">
          <Notice />
        </div>
        <div className="col-span-2 ...">
          <UpComing />
        </div>
        <div className="row-span-3 ...">
          <TasktoDo />
        </div>
      </div>
    </>
  );
}
