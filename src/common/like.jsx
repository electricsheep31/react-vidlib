import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={() => props.onLikeToggle(props.liked)}
      className={classes}
    ></i>
  );
};

export default Like;

//inputs received?
//events raised?
//what properties in props?
