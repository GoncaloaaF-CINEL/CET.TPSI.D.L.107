import { useState } from "react";


import './App.css'



function App() {
    const [count, setCount] = useState(0);

    function sum(){
        setCount((count) => count + 1);
    }

  return (
    <>
      <h1> { count } </h1>

        <button
            className="counter"
            onClick= { sum }
        >
            Adicionar
        </button>

        <button
            className="counter"
            onClick={
                () => setCount((count) => count > 0? count - 1: count)
            }
            disabled={count === 0}
        >
            Subtrair
        </button>

        <button
            className="counter"
            onClick={
                () => setCount(0)
            }
        >
            Reset
        </button>

    </>
  )
}



export default App
