import "./chatList.css";
import React from "react";

export const ChatList = () => {
  const [clicked, setClicked] = React.useState(true);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="../../../../public/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={
            clicked
              ? "../../../../public/minus.png"
              : "../../../../public/plus.png"
          }
          alt=""
          className="add"
          onClick={() => setClicked(!clicked)}
        />
      </div>
    </div>
  );
};
