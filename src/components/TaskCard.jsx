function TaskCard({ task, onDelete }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '5px'
      }}
    >
      <h3>{task.judul}</h3>
      <p>
        Kategori: <strong>{task.kategori}</strong>
      </p>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer'
        }}
      >
        Hapus
      </button>
    </div>
  );
}

export default TaskCard;