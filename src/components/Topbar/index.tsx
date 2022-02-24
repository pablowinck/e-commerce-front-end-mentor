import React from "react";
import Menus from "../Menus";
import OnlineUser from "../OnlineUser";

const Topbar: React.FC = () => {
  return (
    <div className="h-[10vh] w-full flex justify-between items-center border-t-transparent border-l-transparent border-r-transparent border-b-[1px] border-blue-grayish border">
      <div className="flex gap-8">
        <picture className="w-36">
          <img className="max-w-full max-h-full" src="/images/logo.svg" />
        </picture>
        <Menus />
      </div>
      <OnlineUser />
    </div>
  );
};

export default Topbar;
