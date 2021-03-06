import React from "react";
import logo from "../Assests/icons8-bbb.svg";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import DiamondIcon from "@mui/icons-material/Diamond";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const isNotActiveStyle = "text-[#555555] flex flex-col items-center";
const isActiveStyle =
  "border-r-2 border-white  text-white flex flex-col items-center";

const dummyData = [
  {
    id: 1,
    title: "Techverse",
    description: "Techverse - Not able to Launch",
    replies: 1,
    answer: "Login to answer",
    user: "Manish Uddhav Patil",
    repliedAt: "56 minutes ago",
    avatar: "M",
  },
  {
    id: 2,
    title: "Let’s talk career",
    description: "Power BI Source Code",
    replies: 0,
    answer: "Login to answer",
    user: "Naveen Jaiswal",
    repliedAt: "30 minutes ago",
    avatar: "N",
  },
  {
    id: 3,
    title: "Let’s talk career",
    description: "Web Dev Notes",
    replies: 4,
    answer: "Login to answer",
    user: "Vikas Kumar",
    repliedAt: "48 minutes ago",
  },
  {
    id: 4,
    title: "Let’s talk career",
    description: "Web Dev Notes",
    replies: 4,
    answer: "Login to answer",
    user: "Vikas Kumar",
    repliedAt: "48 minutes ago",
  },
];

const colors = ["red", "blue", "green", "blue", "orange"];

const Community = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login/adminLogin");
  };

  return (
    <div className="bg-black w-screen h-screen flex overflow-hidden">
      <div className="h-[45.5rem] flex-[0.07] flex flex-col items-center my-4 justify-between py-5">
        <img src={logo} alt="" />
        <div className="flex flex-col space-y-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <MenuBookIcon className=" h-7" alt="" />
            <p className="">Courses</p>
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <DiamondIcon className=" h-7" alt="" />
            <p className="">Resources</p>
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <PeopleIcon className=" h-7" alt="" />
            <p className="">Community</p>
          </NavLink>
        </div>
        <div className="flex flex-col items-center space-y-2 text-[#555555] hover:text-white hover:scale-110 transition-all duration-150">
          <LogoutIcon onClick={logout} className="cursor-pointer h-10  " />
          <p className="">Logout</p>
        </div>
      </div>
      <div className="h-[45.5rem] bg-white flex-[0.93] my-4 rounded-2xl mr-4 pl-[3.1rem] pt-[3rem]">
        <div>
          <p className="text-4xl font-bold">Community</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="w-auto h-40 rounded-3xl shadow-lg p-8 mt-4 space-y-2">
              <div>
                <div className="flex flex-row space-x-20 ">
                  <div className="flex">
                    <p className="text-2xl font-bold pt-1 ">
                      Welcome to LearnVerse Community
                    </p>
                  </div>
                  <div className="space">
                    <Button
                      style={{
                        borderRadius: 14,
                        backgroundColor: "#F26B30",
                        padding: "9px 21px",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#fff",
                        height: "38px",
                      }}
                      variant="contained"
                    >
                      New Thread
                    </Button>
                  </div>
                </div>
                <p className="text-1xl font-normal text-base text-gray-500 pt-2">
                  Connect with like-minded individuals to change lives through
                  learning
                </p>
                <hr className="border-black mt-4"></hr>
              </div>

              <div className="border-white py-10"></div>
            </div>

            <div className="flex-col p-0 m-0 overflow-y-auto h-[26rem] mt-6">
              {dummyData.map((data) => (
                <div>
                  <div className="flex flex-col space-y-2 w-auto h-fit rounded-3xl shadow-lg p-8 mt-4">
                    <div className="border-2 border-black rounded-xl w-fit px-1">
                      {data.title}
                    </div>
                    <div className="">
                      <p className="text-2xl font-bold pt-1 ">
                        {data.description}
                      </p>
                    </div>
                    <hr className="border-black mt-4"></hr>
                    <div className="flex flex-row justify-between">
                      <div className="flex space-x-6">
                        <p className="text-sm font-base pt-1 ">
                          Replies: {data.replies}
                        </p>
                        <Button
                          style={{
                            borderRadius: 14,
                            backgroundColor: "#FF9C72",
                            padding: "9px 21px",
                            fontSize: "15px",
                            fontWeight: "700",
                            color: "#fff",
                            height: "38px",
                          }}
                          variant="contained"
                        >
                          {data.answer}
                        </Button>
                      </div>
                      <div className="flex space-x-3">
                        <div className="flex flex-col">
                          <p>{data.user}</p>
                          <p className="justify-self-end">{data.repliedAt}</p>
                        </div>
                        <div
                          className={`border-2 h-[50px] w-[50px] rounded-full flex items-center justify-center font-bold bg-${
                            colors[Math.floor(Math.random() * colors.length)]
                          }-500`}
                        >
                          {data.avatar}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-auto">{/* Form */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
