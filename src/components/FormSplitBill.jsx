import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with %FRIEND_NAME</h2>
      <label>Bill Value</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label>%FRIEND_NAME expense</label>
      <input disabled type="text" />

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">%FRIEND_NAME</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
