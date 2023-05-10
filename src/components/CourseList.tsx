import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CourseList = () => {
  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const openModal = () => {
    setDisplay(true);
  };
  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <>
      <div>
        <div className="flex justify-end my-[20px]">
          <button
            type="button"
            onClick={openModal}
            className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-[#775aca] hover:bg-[#775ACA] focus:outline-none font-medium rounded-full text-sm text-center mb-2 "
          >
            <img src="/add.png" className="mr-[15px]" />
            <p>Create New Course</p>
          </button>
        </div>
        <div className="h-[514px] overflow-hidden overflow-y-scroll flex bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 justify-between">
          <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
            <p className="h-[74px] text-[21px] font-medium">Course List</p>

            <div
              className="my-[20px] h-[53px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] px-[25px] ">
                <div className="text-left text-[14px] font-medium">
                  <p>UI/UX Course</p>
                </div>
                <div id="action" className="text-right inline-flex text-[14px]">
                  <Link href={"/admin/courselistedit"}>
                    <p className="text-[#775ACA] px-2">Edit</p>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="my-[20px] h-[53px] flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-between"
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <div className="justify-between flex w-full py-[15px] px-[25px] ">
                <div className="text-left text-[14px] font-medium">
                  <p>3D</p>
                </div>
                <div id="action" className="text-right inline-flex text-[14px]">
                  <Link href={"/admin/courselistedit"}>
                    <p className="text-[#775ACA] px-2">Edit</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {display ? (
        <div
          id="new_course"
          className="px-[40px] py-[50px] bg-white lg:w-[616px] w-full border border-gray-200 rounded-lg shadow z-10  overflow-auto fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex justify-between ">
            <p className="text-[16px] font-medium"> Create course</p>
            <img
              onClick={closeModal}
              className="w-[20px] h-[20px] hover:cursor-pointer"
              src="/cancel.png"
            />
          </div>
          <div className="pt-[20px]">
            <label
              htmlFor="Course"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Course Name
            </label>
            <input
              type="text"
              id="Course"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="pt-[20px]">
            <label
              htmlFor="Certification"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Certification name
            </label>
            <input
              type="text"
              id="Certification"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className=" mt-[30px] flex justify-center">
            <button
              type="button"
              className="text-black bg-[#F6DD4D] hover:bg-[#F1F1BB] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2"
            >
              save
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CourseList;
