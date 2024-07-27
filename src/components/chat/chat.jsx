import "./chat.css";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="info">
        <img src="/avatar.png" alt="" />
        <div className="text">
          <h2>John Doe</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia</p>
        </div>
      </div>
      <div className="messages">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="text">
            <h2>John Doe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia</p>
          </div>
        </div>
      </div>
      <div className="inputMessage">
        <input type="text" placeholder="Type a message" />
        <img src="/send.png" alt="" />
      </div>
    </div>
  );
};
