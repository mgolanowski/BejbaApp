import React from "react";
import "./Like.css";
import { incrementDislikes } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Dislike({ meme }) {
  const dispatch = useDispatch();

  const decrementHandler = () => {
    const decrementAction = incrementDislikes(meme.id);
    dispatch(decrementAction);
  };
  return (
    <>
      <button className="downvote" onClick={decrementHandler}>
        <p>Dislike</p>
        <i className="fas fa-thumbs-down"></i>
        <span>{meme.downvotes}</span>
      </button>
    </>
  );
}
