// 1. Event onClick
function Lonclick() {
    const handleClick = () => {
        alert("Tombol diklik!");
    }

    return (
        <>
        <div>
            <button onClick={handleClick}>Klik saya!</button>
        </div>
        </>
    );
}

export default Lonclick;