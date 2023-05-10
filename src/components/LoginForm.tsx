import React from "react";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";
import Autocomplete from "@mui/material/Autocomplete";
import Buttons from "./Buttons";
import { Icons } from "@/assets/icons/_Icons";
import Image from "next/image";
import Link from "next/link";

function LoginForm() {
  return (
    <div className="formWrap flex w-full items-start bg-white rounded-[25px]">
      <div className="flex flex-col w-full justify-center items-center mt-[60px]">
        <p className="!font-['Outfit'] !text-[28px] font-[500] text-center">
          Welcome
        </p>
        <p className="!font-['Outfit'] !text-[21px] font-[400] text-center mt-[20px]">
          Login to your account
        </p>
      </div>
      <div className="formElem flex w-full mt-[20px]">
        <div className="formLabel">Phone Number</div>
        <TextField
          className="flex w-full"
          id="outlined-basic"
          variant="outlined"
        />
      </div>
      <div className="formElem flex w-full">
        <div className="formLabel">OTP</div>
        <TextField
          className="flex w-full"
          id="outlined-basic"
          variant="outlined"
        />
      </div>
      <div className="flex justify-end w-full mt-[-25px]">
        <p className="font-['Outfit'] text-[14px] font-[500] capitalize text-red-400 text-center">
          Resend OTP?
        </p>
      </div>
      <div className="formBtn w-full flex justify-center">
        <Link href={"/dashboard"}>
          <button className="w-[380px] h-[45px] rounded-[5px] bg-[#775ACA] text-white">
            Login
          </button>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center items-center mt-[-20px]">
        <p className="!font-['Outfit'] !text-[16px] font-[500] text-center">
          Don’t have an account?
        </p>
        <Link href={"/auth/signup"}>
          <p className="text-[#775ACA] font-['Outfit'] !text-[16px] font-[500] text-center">
            Sign up
          </p>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <button className="!px-[5px]">
          <Image src={Icons.BacktoIcon} alt="svg"></Image>
        </button>
        <Link href={"/"}>
          <p className="tracking-[0.05eem] font-['Outfit'] !text-[14px] font-[500] text-center capitalize">
            Back to Website
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
