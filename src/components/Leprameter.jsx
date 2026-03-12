// 4. Event dengan Parameter
function Leprameter() {
    const sayHello = (name) => {
        alert(`Hallo, ${name}`)
    };

    return (
        <>
        <div>
            <button onClick={() => sayHello("Budi")}>Sapa Budi</button>
        </div>
        </>
    )
}

export default Leprameter;