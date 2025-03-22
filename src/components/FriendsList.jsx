import Friend from "./Friend";

export default function FriendsList({ friendsList }) {
  return (
    <ul>
      {friendsList.map((friend) => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}
