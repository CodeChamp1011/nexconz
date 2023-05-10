import CourseList from "../../components/CourseList";
import CourselistEdit from "../../components/CourselistEdit";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  return (
    <>
      {router.query.index == "" && <CourseList />}
      {router.query.index == "courselist" && <CourseList />}
      {router.query.index == "courselistedit" && <CourselistEdit />}
    </>
  );
};

export default Admin;
