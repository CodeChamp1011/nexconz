import TasktoDo from "../components/TasktoDo";
import Transactions from "../components/Transactions";
import PaymentsDetails from "../components/PaymentsDetails";

const Payment = () => {
  return (
    <>
      <div className="flex">
        <div className="mr-[20px]">
          <Transactions />
        </div>
        <div className="">
          <PaymentsDetails />
        </div>
      </div>
    </>
  );
};

export default Payment;
