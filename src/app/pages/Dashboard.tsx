import Notice from "../components/Notice";
import TasktoDo from "../components/TasktoDo";
import UpComing from "../components/UpComing";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-flow-col gap-4">
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
};

export default Dashboard;
