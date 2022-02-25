import React from "react";
import IconCard from "../IconCard";

// import { Container } from './styles';

const OnlineUser: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      <picture className="cursor-pointer">
        <IconCard />
      </picture>
      <div className="rounded-full w-10 h-10">
        <img src="/images/image-avatar.png" />
      </div>
    </div>
  );
};

export default OnlineUser;
