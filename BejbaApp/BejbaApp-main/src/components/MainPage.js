import React from "react";
import "./MainPage.css";
import memTable from "../pics/memTable.js";
import Mems from "./Mems";
import { useSelector } from "react-redux";

export default function MainPage({ hot, regular }) {
  const memes = useSelector((state) => state.mems);

  const filteredMems = memes.filter((meme) => {
    if (hot && meme.upvotes - meme.downvotes > 5) {
      return true;
    }
    if (regular && meme.upvotes - meme.downvotes <= 5) {
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
  );
}
