import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <div className="title">
        <div>
      <ImageThumbnail />
        </div>
        <div className="header">

      <HeaderContent />

        <HeaderTitle />
        </div>
      <div >
      </div>
    </div>
  );
};

export default HeaderContainer;
