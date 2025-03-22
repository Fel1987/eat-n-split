export default function Button({ children, onHandleClick }) {
  return (
    <button onClick={onHandleClick} className="button">
      {children}
    </button>
  );
}
