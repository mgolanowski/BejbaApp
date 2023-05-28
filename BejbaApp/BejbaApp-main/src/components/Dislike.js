import React from "react";
import "./Like.css";
import { useSelector, useDispatch } from "react-redux";

export default function Dislike({ handleDecrease }) {

  const dispatch = useDispatch();
  const numberOfDislikes = useSelector((state) => state.numberOfDislikes);
  

   const decrementHandler = () => {
    const decrementtAction = { type: "COUNT_DISLIKES" };
    dispatch(decrementtAction);
  };
  return (
    <>
      <button className="downvote" onClick={decrementHandler }>
        <p>Dislike</p>
        <i className="fas fa-thumbs-down"></i>
        <span>{numberOfDislikes}</span>
      </button>
    </>
  );
}
