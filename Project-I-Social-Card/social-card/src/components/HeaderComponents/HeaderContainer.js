import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <div className="title">
      <ImageThumbnail />
      <div>
        <HeaderTitle />
      </div>
      <div>
      <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
