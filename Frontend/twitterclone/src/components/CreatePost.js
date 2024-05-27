import React from "react";
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-530 text-lg"> For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-530 text-lg"> Following</h1>
          </div>
        </div>

{/* --------------------------------------------------------------------------------------------------------------------------- */}



        <div >

<div className="flex items-center p-4">
<div>
<Avatar src="https://avatars.githubusercontent.com/u/118682540?v=4" size="40" round={true} />

</div>
    <input className="w-full ml-2 outline-none border-none text-lg" type="text" placeholder="What's up yo grill ?"/>
</div>

        </div>

        <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div><CiImageOn />
</div>
            <button className="bg-blue-400 px-4 py-1 text-lg text-white border-none rounded-full ">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
