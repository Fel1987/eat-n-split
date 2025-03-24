import { useState } from "react";
import Button from "./Button";

export default function FormFriend({ onHandleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name: name,
      image: `${image}?=${crypto.randomUUID()}`,
      balance: 0,
    };

    onHandleAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>Image URL</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <Button>Add Friend</Button>
    </form>
  );
}
