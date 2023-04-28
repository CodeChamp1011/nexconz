"use client";
import React, { useState } from "react";
const Resume = () => {
  const [upload, setUpload] = useState(true);
  const handleUpload = () => {
    setUpload(!upload);
  };
  return (
    <>
      <div className="flex justify-start my-[20px]">
        <button
          type="button"
          className="text-black text-[16px] flex px-[20px] items-center pb-[10px]"
        >
          <p>Account Details</p>
        </button>
        <button
          type="button"
          className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <p>Resume</p>
        </button>
      </div>
      <div className="pb-[200px]">
        <div className="block px-[367px] pt-[50px] justify-between">
          <div className="text-[21px] font-medium">
            <p>Uploader</p>
          </div>
          <div className="flex items-center justify-center w-full mt-[15px]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="inline-flex justify-between gap-x-[12px]">
                <img src="/download.png" />
                <p>Drag and drop OR</p>
                <p className="underline decoration-1">Browse file</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>{" "}
          <div className=" mt-[30px] flex justify-between" id="style">
            {upload ? (
              <div className="flex">
                <button
                  onClick={handleUpload}
                  className="text-black bg-[#F6DD4D] hover:bg-[#F1F1BB] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2 text-[16px]"
                >
                  Upload Resume
                </button>
              </div>
            ) : (
              <div className="flex justify-between  w-full ">
                <div className="flex justify-between gap-x-[12px] items-center">
                  <img className="w-[20px] h-[20px]" src="/file.png" />
                  <div>
                    <p className="text-[14px] font-medium">File Name</p>
                  </div>
                </div>
                <div className="flex item-center">
                  <img src="/remove-profile-icon.png" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
