import { List } from "./components/list/list.jsx";
import { Chat } from "./components/chat/chat.jsx";
import { Details } from "./components/detail/details.jsx";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Details />
    </div>
  );
};

export default App;
