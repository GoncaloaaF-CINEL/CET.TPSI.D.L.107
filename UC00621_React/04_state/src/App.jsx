import { useState } from "react";


import './App.css'

function App() {
    const [count, setCount] = useState(0);

  return (
    <>
      <h1> { count } </h1>

        <button
            className="counter"
            onClick={
            () => setCount( (count) => count + 1 )}
        >
            Adicionar

        </button>

        <button
            className="counter"
            onClick={
                () => {/*  codigo */}
            }
        >
            Subtrair
        </button>



        <button
            className="counter"
            onClick={
                () => {/*  codigo */}
            }
        >
            Reset
        </button>




    </>
  )
}

export default App
