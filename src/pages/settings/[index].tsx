import Profile from "../../components/Profile";
import Resume from "../../components/Resume";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      {router.query.index == "" && <Profile />}
      {router.query.index == "profile" && <Profile />}
      {router.query.index == "resume" && <Resume />}
    </>
  );
};

export default Settings;
