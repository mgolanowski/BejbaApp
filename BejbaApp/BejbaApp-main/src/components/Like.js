import React from "react";
import "./Like.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementLikes } from "../store/actions"


export default function Like({ memId }) {
  const dispatch = useDispatch();
  const mems = useSelector((state) => state.mems);

  const mem = mems.find((mem) => mem.id === memId);
 

  const incrementHandler = () => {
    dispatch(incrementLikes (memId)); 
  };

  return (
    <>
      <button className="upvote" onClick={incrementHandler}>
        <p>Like</p>
        <i className="fas fa-thumbs-up"></i>
        <span>{mems.upvotes}</span>
      </button>
    </>
  );
}