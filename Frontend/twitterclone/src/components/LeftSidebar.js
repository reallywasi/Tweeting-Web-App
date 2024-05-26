import React from "react";
import { CiHome } from "react-icons/ci";

const LeftSidebar = () => {
  return (
    <div>
      <div>
        <div>
            <img width={"24px"} src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" alt="twitter logo"/>
        </div>

        <div>
                    <div className="flex items-center">
                    <div>  <CiHome /> </div>
                  
                    <h1>Home </h1>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
