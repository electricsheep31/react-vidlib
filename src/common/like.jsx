import React from "react";

const Like = ({ onLikeToggle, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={() => onLikeToggle(liked)}
      className={classes}
    ></i>
  );
};

export default Like;

//inputs received?
//events raised?
//what properties in props?
