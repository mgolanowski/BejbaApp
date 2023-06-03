import React from "react";
import "./Mems.css";
import Like from "./Like";
import Dislike from "./Dislike";
import { useState } from "react";


export default function Mems({ item }) {

  return (
    <>
      <main className="memowisko"></main>
      <div className="memyTlo">
        <div className="obiekty">
          <img src={item.img} alt="bejba" width="400px" />
        </div>
        <h3>{item.title}</h3>
        <div className="votes">
          <Like meme ={item}/>
          <Dislike meme ={item}/>
        </div>
      </div>
    </>
  );
}
