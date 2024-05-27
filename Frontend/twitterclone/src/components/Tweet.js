import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className=" border-b border-gray-300">
      <div>
        <div className=" flex p-4">
          <Avatar
            src="https://avatars.githubusercontent.com/u/118682540?v=4"
            size="40"
            round={true}
          />
          <div className=" ml-2 w-full">
            <div className=" flex items-center">
              <h1 className=" font-bold">Wasi</h1>
              <p className=" text-gray-500 text-sm ml-1">reallywasi .1m</p>
            </div>
            <div>
              <p>Hello this is mah first tweet</p> 


{/* ----------------------------------------------------------------------------------------------------------------------- */}
            </div>

            <div className="flex justify-between my-3">
            <div className="flex items-center"><div className=" p-2 hover:bg-green-100 rounded-full cursor-pointer"><CiBookmark size={21}/></div>  <p className="ml-1">0</p></div>
            <div className="flex items-center"> <div className=" p-2 hover:bg-pink-100 rounded-full cursor-pointer"><CiHeart size={21}/></div>  <p className="ml-1">0</p>  </div>
            <div className="flex items-center"><div className=" p-2 hover:bg-yellow-100 rounded-full cursor-pointer"><FaRegCommentAlt size={19}/></div> <p className="ml-1">0</p>  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
