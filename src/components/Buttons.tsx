interface ButtonProps {
  value: {
    type: number;
    val: string;
  };
}

export default function Buttons({ value }: ButtonProps) {
  const clsName = getClass(value.type);
  return (
    <>
      <button className={clsName}>{value.val}</button>
    </>
  );
}
function getClass(type: number) {
  switch (type) {
    case 1:
      return "btn-t-1";
    case 2:
      return "btn-t-2";
    case 3:
      return "btn-t-3";
    case 4:
      return "w-full bg-purple-700 !bg-purple-700 text-[#FFF]";
    default:
      return "";
  }
}
