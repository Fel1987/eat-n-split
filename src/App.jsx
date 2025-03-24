import initialFriends from "./App";
import Button from "./components/Button";
import FormFriend from "./components/FormFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

function App() {
  const friends = initialFriends;
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  function handleShowAddFriendForm() {
    setShowAddFriendForm((currState) => !currState);
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <FriendsList friendsList={friends} />
        {showAddFriendForm && <FormFriend />}
        <Button onHandleClick={handleShowAddFriendForm}>
          {showAddFriendForm ? "Close" : "Add friend"}
        </Button>
      </aside>
      <FormSplitBill />
    </div>
  );
}

export default App;
