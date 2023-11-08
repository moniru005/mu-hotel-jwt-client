function useConfirm(message, onConfirm, onAbort) {
    const confirm = () => {
      if(window.confirm(message))
        onConfirm();
      else
        onAbort();
    }
    return confirm
  }
  export function ConfirmModal() {
    const handleDelete = () => {/* ... */};
    const handleAbort = () => {/* ... */};
    const confirmDelete = useConfirm(
      'Sure?',
      handleDelete,
      handleAbort,
    );
    return <button onClick={confirmDelete}>Delete User</button>
  }
 