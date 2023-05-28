import React from "react";
import "./Like.css";
import { useSelector, useDispatch } from "react-redux";

export default function Like({ grow, handleGrow }) {
  const dispatch = useDispatch();
  const numberOfLikes = useSelector((state) => state.numberOfLikes);
  

   const incrementHandler = () => {
    const incrementAction = { type: "COUNT_LIKES" };
    dispatch(incrementAction);
  };

  return (
    <>
      <button className="upvote" onClick={incrementHandler}>
        <p>Like</p>
        <i className="fas fa-thumbs-up"></i>
        <span>{numberOfLikes}</span>
      </button>
    </>
  );
}
