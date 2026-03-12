// fungsi usedState digunakan untuk membuat state di dalam komponen fungsional.
// State adalah data yang dapat berubah-ubah dan mempengaruhi tampilan komponen.
// Dengan menggunakan useState, kita dapat menyimpan data yang dapat berubah-ubah
// dan memperbarui tampilan komponen ketika data tersebut berubah.
import { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("Halo, React!");

  return (
    <>
      <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage("Pesan diubah!")}>Ubah pesan</button>
      </div>
    </>
  );
}

export default App;
