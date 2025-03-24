import initialFriends from "./App";
import AsideContainer from "./components/AsideContainer";
import Button from "./components/Button";
import FormFriend from "./components/FormFriend";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriendForm() {
    setShowAddFriendForm((currState) => !currState);
  }

  function handleAddFriend(friendObj) {
    setFriends((currFriends) => [...currFriends, friendObj]);
    setShowAddFriendForm(false);
  }

  function handleSelectedFriend(friendObj) {
    setSelectedFriend((currSelected) =>
      currSelected?.id === friendObj.id ? null : friendObj
    );
    setShowAddFriendForm(false);
  }

  return (
    <section className="app">
      <AsideContainer className="sidebar">
        <FriendsList
          friendsList={friends}
          onHandleSelectedFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriendForm && (
          <FormFriend onHandleAddFriend={handleAddFriend} />
        )}
        <Button onHandleClick={handleShowAddFriendForm}>
          {showAddFriendForm ? "Close" : "Add friend"}
        </Button>
      </AsideContainer>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </section>
  );
}

export default App;
