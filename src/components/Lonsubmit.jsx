import { useState } from "react";

// 3. Event onSubmit (form)
function Lonsubmit() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // mencegah reload halaman
        alert(`Email dikirim: ${email}`);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Kirim</button>
        </form>
        </>
    );
}

export default Lonsubmit;