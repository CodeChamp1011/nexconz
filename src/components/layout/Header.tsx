import Image from "next/image";
import { Icons } from "@/assets/icons/_Icons";
import { Images } from "@/assets/images/_Images";
import { headerData } from "../data-sets/data-sets";
import { Box } from "@mui/material";

interface Props {
  indexId: number;
  setSideNavOpened: (flag: boolean) => void;
}

export default function Header({ indexId, setSideNavOpened }: Props) {
  const toggleSideNavDrawer = (open: boolean) => () => {
    setSideNavOpened(open);
  };
  return (
    <Box className="flex lg:justify-between justify-center mr-3 mt-5">
      <div>
        <p style={{ fontSize: "28px" }}>{headerData[indexId].title}</p>
        <p style={{ fontSize: "16px" }}>{headerData[indexId].subtitle}</p>
      </div>
      <div className="flex self-start md:mt-0 mt-[10px]">
        <div
          className="flex items-center ml-[15px] w-[30px] menuIcon rips lg:hidden block"
          onClick={toggleSideNavDrawer(true)}
        >
          <Image src={Icons.Setting} alt="icon" />
        </div>
        <form className="flex lg:flex-wrap items-center justify-end">
          <label className="sr-only">Search</label>
          <div className="flex align-center relative sm:w-[274px] h-[45px] w-[170px]">
            <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="ml-2">
          <Image src={Icons.Notification} alt="png"></Image>
        </div>
        <div className="ml-2">
          <Image src={Images.avatar} alt="jpg"></Image>
        </div>
      </div>
    </Box>
  );
}
