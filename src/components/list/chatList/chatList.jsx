import "./chatList.css";
import React from "react";

const chats = [
  {
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello this is a message",
    time: "10:00 AM",
  },
  {
    name: "Jane Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello this is a message",
    time: "10:00 AM",
  },
  {
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello this is a message",
    time: "11:00 AM",
  },
  {
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello this is a message",
    time: "11:00 AM",
  },
];

export const ChatList = () => {
  const [search, setSearch] = React.useState("");
  const [clicked, setClicked] = React.useState(true);
  const [localChats, setLocalChats] = React.useState(chats);

  function filterChats(search) {
    setSearch(search);
    const filteredChats = chats.filter((chat) =>
      chat.name.toLowerCase().includes(search.toLowerCase()),
    );
    setLocalChats(filteredChats);
  }

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => filterChats(e.target.value)}
            value={search}
          />
        </div>
        <img
          src={clicked ? "/minus.png" : "/plus.png"}
          alt=""
          className="add"
          onClick={() => setClicked(!clicked)}
        />
      </div>
      <div className="listChats">
        {[...localChats, ...localChats, ...localChats].map((chat, index) => (
          <div className="item" key={index}>
            <img src={chat.avatar} alt="" />
            <div className="texts">
              <span>{chat.name}</span>
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
        {localChats.length === 0 && (
          <div className="noChats">No chats found</div>
        )}
      </div>
    </div>
  );
};
