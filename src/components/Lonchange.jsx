import { useState } from "react"

// 2. Event onChange (input)
function Lonchange() {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
        <div>
            <input type="text" placeholder="Ketik nama..." onChange={handleChange} />
            <p>Halo, {name}</p>
        </div>
        </>
    );
}

export default Lonchange;