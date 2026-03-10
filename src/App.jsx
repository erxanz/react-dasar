// import { useState } from "react";

import "./App.css";
import Header from "./components/Header";

// Menggunakan props untuk mengirim data dari parent component ke child component
// Props bersifat read-only, artinya data yang dikirim dari parent component tidak bisa diubah oleh child component. Jika ingin mengubah data, maka harus dilakukan di parent component dan dikirim kembali ke child component melalui props.
function Welcome(props) {
  return (
  <>
    <h4>Halo {props.name}</h4>
    <h4>Umur {props.age}</h4>
  </>
  )
}

// Menggunakan destructuring props untuk mengakses data yang dikirim dari parent component
function UserCard({ name, age}) {
  return (
    <>
    <p>{name}</p>
    <p>umur {age}</p>
    </>
  )
}

function App() {
  return (
    <>
    <div>
      <Header />
      <p>Halaman utama App React</p>
      <Welcome name="John" age={20} />
      <UserCard name="Jane" age={19} />
    </div>
    </>
  )
}

export default App;