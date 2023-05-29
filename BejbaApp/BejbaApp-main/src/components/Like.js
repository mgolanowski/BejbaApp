import React from "react";
import "./Like.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementLikes } from "../store/actions";

export default function Like({ meme }) {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementLikes(meme.id));
  };

  return (
    <>
      <button className="upvote" onClick={incrementHandler}>
        <p>Like</p>
        <i className="fas fa-thumbs-up"></i>
        <span>{meme.upvotes}</span>
      </button>
    </>
  );
}
