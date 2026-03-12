import { useState } from "react";

import "./App.css";

function App() {
  // 1. Memebuat state dasar
  const [message, setMessage] = useState("Halo, React!");

  // 2. State dengan angka
  const [count, setCount] = useState(0);

  // 3. State menyimpan array/objek
  const [todos, setTodos] = useState([
    "Belajar React",
    "Belajar JSX"
  ]);

  const addTodo = () => {
    setTodos([... todos, "Belajar State", "Belajar Props"]);
  }

  return (
    <>
      <div>
        {/* 1. Membuat state dasar */}
        <h4>{message}</h4>
        <button onClick={() => setMessage("Pesan diubah!")}>Ubah pesan</button>

        {/* 2. State dengan angka */}
        <h4>Count: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(count - 1)}>Kurang</button>
      </div>

      {/* 3. State menyimpan array/objek */}
      <h4>Daftar Todo:</h4>
      <ul>
        { todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
        <button onClick={addTodo}>Tambah Todo</button>
      </ul>
    </>
  );
}

export default App;
