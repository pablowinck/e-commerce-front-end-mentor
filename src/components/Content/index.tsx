import React from "react";
import Images from "./Images";
import Infos from "./Infos";

const Content: React.FC = () => {
  return (
    <div className="h-[88vh] w-full flex flex-col sm:flex-row gap-20">
      <Images />
      <Infos />
    </div>
  );
};

export default Content;
