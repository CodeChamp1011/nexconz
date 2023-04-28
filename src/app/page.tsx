import Image from "next/image";
import { Inter } from "next/font/google";
import SimBlog from "./components/SimBlog";
import Card from "./components/Card";
import TwoBlog from "./components/LessonList";
import Notice from "./components/Notice";
import UpComing from "./components/UpComing";
import TasktoDo from "./components/TasktoDo";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Certificate from "./pages/Certificate";
import Payment from "./pages/Payment";
import CourseList from "./components/CourseList";
import CourselistEdit from "./components/CourselistEdit";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Dashboard />
      {/* <Courses />
      <Certificate />
      <Payment />
      <Admin />
      <Settings /> */}
    </main>
  );
}
