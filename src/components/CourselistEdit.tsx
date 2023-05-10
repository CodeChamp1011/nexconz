import React, { useEffect } from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Icons } from "@/assets/icons/_Icons";
import Image from "next/image";

const CourselistEdit = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState("false");
  const [title, setBtnTitle] = useState("show more");
  const [display, setDisplay] = useState(false);

  const handleFlag = () => {
    if (flag == "false") {
      setFlag("True");
      setBtnTitle("show less");
    } else {
      setFlag("false");
      setBtnTitle("show more");
    }
  };
  const openModal = () => {
    setDisplay(true);
  };
  const closeModal = () => {
    setDisplay(false);
  };
  return (
    <>
      <div>
        <div className="flex justify-end my-[20px]">
          <button
            type="button"
            onClick={openModal}
            className="text-white text-[16px] flex px-[20px] items-center py-[10px] bg-[#775ACA] hover:bg-[#775ACA] focus:outline-none font-medium rounded-full text-sm text-center mb-2"
          >
            <img src="/add.png" className="mr-[15px]" />
            <p>Create Syllabus</p>
          </button>
        </div>
        <div className="h-[514px] overflow-hidden overflow-y-scroll flex bg-[#FAFAFA] border border-gray-200 mt-[20px] rounded-lg shadow hover:bg-gray-100  justify-between">
          <div className="h-[74px] w-full bg-[#E0DAF0] rounded-t-lg p-[20px]">
            <p className="h-[74px] text-[21px] font-medium">Syllabus List</p>
            <div style={{ display: "flex" }}>
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <Accordion
                className="!mt-0 !rounded-lg"
                style={{ width: "-webkit-fill-available" }}
              >
                <AccordionSummary
                  expandIcon={<img className="" src="/Vector.png" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>1. Introduction</p>
                </AccordionSummary>
                <AccordionDetails className="ml-[15px] w-[1356]">
                  <p className="text-[14px]-800 font-medium">
                    To get the UI UX certification from Nexdemy, you need to
                    complete the UI UX course, which covers topics such as
                    design principles, user research, wireframing, prototyping,
                    and user testing. Upon completion of the course, you will
                    need to pass the final assessment to receive your
                    certification.After completing the UI UX training from
                    Nexdemy, you can explore various career opportunities in UI
                    UX design. You can work as a UI UX designer in various
                    industries such as tech, healthcare, finance, and more. You
                    can also work as a freelancer or start your own UI UX design
                    business. The skills and knowledge you gain from the course
                    can help you excel in your career and achieve your goals.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="mt-[20px]" style={{ display: "flex" }}>
              <div className="w-[5px] bg-[#775ACA] rounded-l-lg"></div>
              <Accordion
                className="!mt-0 !rounded-lg"
                style={{ width: "-webkit-fill-available" }}
              >
                <AccordionSummary
                  expandIcon={<img className="" src="/Vector.png" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>2. Research</p>
                </AccordionSummary>
                <AccordionDetails className="ml-[15px] w-[1356]">
                  <p className="text-[14px]-800 font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        {display ? (
          <div
            id="syllabusModal"
            className="px-[40px] py-[50px] bg-white md:w-[817px] w-full border border-gray-200 rounded-lg shadow z-10  overflow-auto fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex justify-between ">
              <p className="text-[16px] font-medium"> Create Syllabus</p>
              <img
                onClick={closeModal}
                className="w-[20px] h-[20px] hover:cursor-pointer"
                src="/cancel.png"
              />
            </div>
            <div className="pt-[20px]">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div className="pt-[20px]">
              <label
                htmlFor="topic"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Topic Covered
              </label>
              <textarea
                id="topic"
                rows={10}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
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
        ) : null}
      </div>
    </>
  );
};

export default CourselistEdit;
