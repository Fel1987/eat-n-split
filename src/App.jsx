import initialFriends from "./App";
import Button from "./components/Button";
import FormFriend from "./components/FormFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const friends = initialFriends;

  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList friendsList={friends} />
        <FormFriend />
        <Button>Add Friend</Button>
      </aside>
      <FormSplitBill />
    </div>
  );
}

export default App;
