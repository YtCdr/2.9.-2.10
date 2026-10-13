import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import About from './pages/About';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, judul: 'Mempelajari State dan Props', kategori: 'Belajar' },
    { id: 2, judul: 'Membuat Navbar dengan React Router', kategori: 'Pekerjaan' }
  ]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
            />
          }
        />
        <Route
          path="/tambah"
          element={<AddTask onAddTask={handleAddTask} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
