import React from "react";
import "./MainPage.css";
import memTable from "../pics/memTable.js";
import Mems from "./Mems";
import { useSelector } from "react-redux";

export default function MainPage({ hot, regular }) {
  const numberOfLikes = useSelector((state) => state.numberOfLikes);
  const numberOfDislikes = useSelector((state) => state.numberOfDislikes);
  



  const filteredMems = memTable.filter(() => {
    if (hot && numberOfLikes - numberOfDislikes > 5) {
      return true;
    }
    if (regular && numberOfLikes - numberOfDislikes <= 5) {
      return true;
    }
    if (!hot && !regular) {
      return true;
    }
    return false;
  });

  return (
    <section>
      {filteredMems.map((item) => (
        <div className="mem-object" key={item.id}>
          <Mems item={item} />
        </div>
      ))}
    </section>
  )
  }
