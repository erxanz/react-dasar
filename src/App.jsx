import "./App.css";

import Lonclick from "./components/Lonclick";
import Lonchange from "./components/Lonchange";
import Lonsubmit from "./components/Lonsubmit";
import Leprameter from "./components/Leprameter";

function App() {

  return (
    <>
    {/* 1. Event onClick */}
    <div>
      <Lonclick />
    </div>

    {/* 2. Event onChange (input) */}
    <div>
      <Lonchange />
    </div>

    {/* 3. Event onSubmit (form) */}
    <div>
      <Lonsubmit />
    </div>

    {/* 4. Event dengan parameter */}
    <Leprameter />
    </>
  );
}

export default App;