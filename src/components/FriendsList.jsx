import Friend from "./Friend";

export default function FriendsList({
  friendsList,
  onHandleSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friendsList.map((friend) => {
        return (
          <Friend
            selectedFriend={selectedFriend}
            onHandleSelectedFriend={onHandleSelectedFriend}
            key={friend.id}
            friend={friend}
          />
        );
      })}
    </ul>
  );
}
