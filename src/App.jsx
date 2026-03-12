// fungsi usedState digunakan untuk membuat state di dalam komponen fungsional.
// State adalah data yang dapat berubah-ubah dan mempengaruhi tampilan komponen.
// Dengan menggunakan useState, kita dapat menyimpan data yang dapat berubah-ubah
// dan memperbarui tampilan komponen ketika data tersebut berubah.
import { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("Halo, React!");
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h3>{message}</h3>
        <button onClick={() => setMessage("Pesan diubah!")}>Ubah pesan</button>

        <h5>Count: {count}</h5>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(count - 1)}>Kurang</button>
      </div>
    </>
  );
}

export default App;
