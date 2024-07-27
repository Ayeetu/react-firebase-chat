import "./list.css";
import { UserInfo } from "./userInfo/userInfo.jsx";
import { ChatList } from "./chatList/chatList.jsx";

export const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};
