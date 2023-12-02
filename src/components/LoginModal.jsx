import Login from "./Login";
// Import any other dependencies you might need

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <Login />
      </div>
    </div>
  );
}

export default LoginModal;
