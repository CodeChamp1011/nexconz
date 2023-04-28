const Profile = () => {
  return (
    <>
      <div className="flex justify-start my-[20px]">
        <button
          type="button"
          className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <p>My Details</p>
        </button>
        <button
          type="button"
          className="text-black text-[16px] flex px-[20px] items-center py-[10px]"
        >
          <p>Resume</p>
        </button>
      </div>
      <div className="flex px-[87px] py-[30px] bg-[#FAFAFA] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 justify-between">
        <form>
          <div className="flex items-center space-x-4">
            <img
              className="w-[121px] h-[121px] rounded"
              src="/avatar.png"
              alt=""
            />
            <div className="font-medium dark:text-white">
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
          <div className="grid grid-cols-6 gap-x-[100px] gap-y-[15px] mt-[20px]">
            <div className="col-span-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-1">
              <label
                htmlFor="countries"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex"
              >
                Country Code
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>(IND) +91</option>
              </select>
            </div>
            <div className="col-span-2">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mobile Number
                </label>
                <label
                  htmlFor="mobile"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center gap-x-[6px]"
                >
                  Edit
                  <img className="w-[12px] h-[12px]" src="/Union.png" />
                </label>
              </div>
              <input
                type="text"
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <label
                  htmlFor="email"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white flex items-center gap-x-[6px]"
                >
                  Edit
                  <img className="w-[12px] h-[12px]" src="/Union.png" />
                </label>
              </div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="address1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address line 1
              </label>
              <input
                type="text"
                id="address1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="address2"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address line 2
              </label>
              <input
                type="text"
                id="address2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="pincode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected></option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            {/* <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div> */}
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
    </>
  );
};

export default Profile;
