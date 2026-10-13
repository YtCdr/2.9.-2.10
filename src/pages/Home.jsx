import TaskCard from '../components/TaskCard';

function Home({ tasks, onDeleteTask }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Tugas Hari Ini</h2>

      {/* Short-circuit Rendering jika data kosong */}
      {tasks.length === 0 && <p>Belum ada tugas. Silakan tambahkan tugas baru!</p>}

      {/* Rendering List dengan map dan key */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default Home;