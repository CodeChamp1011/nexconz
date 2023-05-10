import React from "react";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";
import Autocomplete from "@mui/material/Autocomplete";
import Buttons from "./Buttons";
import { Icons } from "@/assets/icons/_Icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function RegisterForm() {
  const router = useRouter();

  return (
    <div className="formWrap flex w-full items-start bg-white rounded-[25px]">
      <div className="flex flex-col w-full justify-center items-center mt-[60px]">
        <p className="!font-['Outfit'] !text-[28px] font-[500] text-center">
          Welcome
        </p>
        <p className="!font-['Outfit'] !text-[21px] font-[400] text-center mt-[20px]">
          Create your free account
        </p>
      </div>
      <div className="formElem flex w-full mt-[20px]">
        <div className="formLabel">Full Name</div>
        <TextField
          className="flex w-full"
          id="outlined-basic"
          variant="outlined"
        />
      </div>
      <div className="formElemWrap formElem flex justify-between">
        <div className="formElem flex w-[38%]">
          <div className="formLabel">Country Code</div>
          <Autocomplete
            className="flex w-full"
            disablePortal
            options={["(IND) +91", "(IND) +91", "(IND) +91"]}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <div className="formElem flex w-[58%]">
          <div className="formLabel">Mobile Number</div>
          <TextField
            className="flex w-full"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
      </div>
      <div className="formElem flex w-full">
        <div className="formLabel">Email</div>
        <TextField
          className="flex w-full"
          id="outlined-basic"
          variant="outlined"
        />
      </div>
      <div className="formBtn w-full flex justify-center mt-[30px]">
        <Link href={"/dashboard"}>
          <button className="w-[380px] h-[45px] rounded-[5px] bg-[#775ACA] text-white">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center items-center mt-[-20px]">
        <p className="!font-['Outfit'] !text-[16px] font-[500] text-center">
          Already have a account?
        </p>
        <Link href={"/auth/login"}>
          <p className="text-[#775ACA] font-['Outfit'] !text-[16px] font-[500] text-center">
            Login
          </p>
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
