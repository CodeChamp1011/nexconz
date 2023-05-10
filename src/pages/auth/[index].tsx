import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import Footer from "@/components/layout/Footer";
import { Images } from "@/assets/images/_Images";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <>
      <div className=" flex justify-center w-full">
        <div className="contentWrap flex justify-center items-center">
          <div className="left flex md:w-[51%] md:mt-[99px] order-1 md:order-1">
            <div className="imgWrap ">
              <Image loading="lazy" src={Images.femaleChracter} alt="Gif" />
            </div>
          </div>
          <div className="right flex lg:w-[49%] md:mt-[69px] mb-[10px] justify-center order-2 lg:order-2">
            <div className="contentWrap flex w-[90%] sm:w-[80%] lg:w-[440px] sm:h-[650px] h-[625px] lg:mr-[8%]">
              {router.query.index == "" && <LoginForm />}
              {router.query.index == "login" && <LoginForm />}
              {router.query.index === "signup" && <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
