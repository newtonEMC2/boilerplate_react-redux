import React from "react";

import img from '../../../public/images/headerimg.PNG'

const TopHeader = () => {
  return (
    <div id="header" data-test="header">
      <img id="header__logo" src={img}></img>
    </div>
  );
};

export default TopHeader;
