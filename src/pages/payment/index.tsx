import Transactions from "../../components/Transactions";
import PaymentsDetails from "../../components/PaymentsDetails";

const Payment = () => {
  return (
    <>
      <div className="lg:grid grid-cols-10 gap-4 mt-[50px]">
        <div className="col-span-7">
          <Transactions />
        </div>
        <div className="col-span-3 lg:mt-0 mt-[10px] min-w-[250px]">
          <PaymentsDetails />
        </div>
      </div>
    </>
  );
};

export default Payment;
