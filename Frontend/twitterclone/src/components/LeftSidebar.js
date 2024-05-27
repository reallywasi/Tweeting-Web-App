import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";

const LeftSidebar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="mx-4"
            width={"24px"}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
            alt="twitter logo"
          />
        </div>

        <div className="my-4">
          <div className="flex items-center my-2 px-2 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              {" "}
              <CiHome />{" "}
            </div>

            <h1 className="font-bold text-lg ml-2">Home </h1>
          </div>

          <div className="flex items-center my-2 px-2 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              {" "}
              <CiHashtag />
{" "}
            </div>

            <h1 className="font-bold text-lg ml-2">Explore </h1>
          </div>

          <div className="flex items-center my-2 px-2 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              {" "}
              <IoIosNotifications />
{" "}
            </div>

            <h1 className="font-bold text-lg ml-2">Notifications </h1>
          </div>

          <div className="flex items-center my-2 px-2 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              {" "}
              <CiUser />
{" "}
            </div>

            <h1 className="font-bold text-lg ml-2">Profile </h1>
          </div>

          <div className="flex items-center my-2 px-2 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              {" "}
              <CiBookmark />
{" "}
            </div>

            <h1 className="font-bold text-lg ml-2">Bookmarks </h1>
          </div>

          <div className="flex items-center my-2 px-2 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              {" "}
              <IoMdLogOut />
{" "}
            </div>

            <h1 className="font-bold text-lg ml-2 ">Logout </h1>
          </div>

          <button className=" bg-blue-400 px-4 py-2 border-none text-md  w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
