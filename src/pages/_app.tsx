import type { AppProps } from "next/app";
import "@/assets/scss/common.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (flag == true) {
      setFlag(false);
    }
  };

  useEffect(() => {
    if (router.pathname == "/" || router.pathname == "/auth") {
      router.push("/auth/login");
    }
  });
  return (
    <>
      {router.pathname === "/auth/[index]" ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              paddingLeft: "10px",
              paddingRight: "10px",
              height: "100%",
            }}
            className="lg:flex-row flex-col"
          >
            <Sidebar sideNavOpened={flag} onIndex={setIndex} />
            <div className="lg:w-full lg:px-[100px] px-0 bg-[#fff] p-[20px] shadow-lg rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-md">
              <div onClick={() => handleClick()}>
                <Header setSideNavOpened={setFlag} indexId={index} />
                <Component {...pageProps} />
                <Footer />
              </div>
            </div>
          </Box>
        </>
      )}
    </>
  );
}
