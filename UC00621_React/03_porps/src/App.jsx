
import './App.css'

import MyHeader from "./componentes/myHeader/myHeader.jsx";
import NextSteps from "./componentes/NextSteps.jsx";
import OlaMundo from "./componentes/OlaMundo.jsx";

function App() {


  return (
    <>

      <MyHeader />

      <div className="ticks"></div>


      <NextSteps />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
