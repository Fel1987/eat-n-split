import Button from "./Button";

export default function Friend({
  friend,
  onHandleSelectedFriend,
  selectedFriend,
}) {
  const isFriendSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isFriendSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}

      <Button
        onHandleClick={() => {
          onHandleSelectedFriend(friend);
        }}
      >
        {isFriendSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
