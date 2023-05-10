"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();
  const [upload, setUpload] = useState(true);
  const handleUpload = () => {
    setUpload(!upload);
  };

  return (
    <>
      <div className="flex justify-start my-[20px] mt-[50px]">
        <button
          type="button"
          className="text-black text-[16px] flex px-[20px] items-center pb-[10px]"
        >
          <Link href={"/settings/profile"}>
            <p>Account Details</p>
          </Link>
        </button>
        <button
          type="button"
          className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-[#775ACA] hover:bg-[#775ACA] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 "
        >
          <p>Resume</p>
        </button>
      </div>
      <div className="justify-center" style={{ display: "flex" }}>
        <div className="block pt-[50px] w-[500px] justify-between">
          <div className="text-[21px] font-medium">
            <p>Uploader</p>
          </div>
          <div className="flex items-center justify-center w-full mt-[15px]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
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
                  className="text-white bg-[#775ACA] hover:bg-[#775ACA] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2 text-[16px]"
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
