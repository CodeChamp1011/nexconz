import React, { useState } from "react";
import Link from "next/link";

const Profile = () => {
  const [display, setDisplay] = useState(false);
  const openModal = () => {
    setDisplay(true);
  };
  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <>
      <div className="flex justify-start my-[20px] mt-[50px]">
        <button
          type="button"
          className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-[#775ACA] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 "
        >
          <p>My Details</p>
        </button>
        <button
          type="button"
          className="text-black text-[16px] flex px-[20px] items-center py-[10px]"
        >
          <Link href={"/settings/resume"}>
            <p>Resume</p>
          </Link>
        </button>
      </div>
      <div className="px-[20px] py-[30px] bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100  justify-center">
        <form>
          <div className="items-center space-x-4" style={{ display: "flex" }}>
            <img
              className="w-[121px] h-[121px] rounded"
              src="/avatar1.jpg"
              alt=""
            />
            <div className="font-medium dark:text-black">
              <div className="flex justify-start items-center gap-x-[11px]">
                <img src="/change-profile-icon.png" />
                <p>Change Profle</p>
              </div>
              <div className="flex justify-start items-center gap-x-[11px]">
                <img src="/remove-profile-icon.png" />
                <p>Remove profile</p>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-6 lg:gap-x-[100px] gaps-x-[20px] gap-y-[15px] mt-[20px]">
            <div className="lg:col-span-3 col-span-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-1 min-w-[100px]">
              <label
                htmlFor="countries"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-black flex"
              >
                Country Code
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>(IND) +91</option>
              </select>
            </div>
            <div className="col-span-2">
              <div
                className="flex justify-between min-w-[150px]"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Mobile Number
                </label>
                <label
                  htmlFor="mobile"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-black flex items-center gap-x-[6px]"
                >
                  Edit
                  <img
                    onClick={openModal}
                    className="w-[12px] h-[12px]"
                    src="/Union.png"
                  />
                </label>
              </div>
              <input
                type="text"
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Email Address
                </label>
                <label
                  htmlFor="email"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-black flex items-center gap-x-[6px]"
                >
                  Edit
                  <img className="w-[12px] h-[12px]" src="/Union.png" />
                </label>
              </div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="address1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Address line 1
              </label>
              <input
                type="text"
                id="address1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="address2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Address line 2
              </label>
              <input
                type="text"
                id="address2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="pincode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected></option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className=" mt-[30px] flex justify-end">
            <button
              type="button"
              className="text-black bg-[#F6DD4D] hover:bg-[#F1F1BB] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2"
            >
              save
            </button>
          </div>
        </form>
      </div>
      {display ? (
        <div
          id="new_course"
          className="px-[40px] py-[50px] bg-white lg:w-[616px] w-full border border-gray-200 rounded-lg shadow z-10  overflow-auto fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div>
            <div className="flex justify-between ">
              <p className="text-[16px] font-medium">Change Mobile</p>
              <img
                onClick={closeModal}
                className="w-[20px] h-[20px] hover:cursor-pointer"
                src="/cancel.png"
              />
            </div>
            <div>
              <div className="flex flex-col pt-[20px]">
                <label
                  htmlFor="Certification"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Current Mobile Number
                </label>
                <div className="grid grid-cols-10 gap-3">
                  <select
                    id="countries"
                    className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>(IND) +91</option>
                  </select>
                  <input
                    type="text"
                    id="Certification"
                    className="col-span-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col pt-[20px]">
                <label
                  htmlFor="Certification"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  New Mobile Number
                </label>
                <div className="grid grid-cols-10 gap-3">
                  <select
                    id="countries"
                    className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>(IND) +91</option>
                  </select>
                  <input
                    type="text"
                    id="Certification"
                    className="col-span-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div
                className=" mt-[10px] justify-right"
                style={{ display: "flex" }}
              >
                <button
                  type="button"
                  className="text-black bg-[#F6DD4D] hover:bg-[#F1F1BB] rounded-lg text-sm px-[20px] gap-[10px] font-semibold py-[10px] mr-2 mb-2"
                >
                  Send OPT
                </button>
              </div>
            </div>
            <div className="pt-[20px]">
              <label
                htmlFor="Certification"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter OTP
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
        </div>
      ) : null}
    </>
  );
};

export default Profile;
