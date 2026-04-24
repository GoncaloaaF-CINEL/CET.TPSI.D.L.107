
import Nav from './Nav.jsx'
import Card1 from "./compnente/Card1/Card1.jsx"


import './App.css'
import 'bootstrap/dist/css/bootstrap.css'





function App() {

  return (
      <>

        <Nav/>
        <section>

          <Card1
            img="https://businesstech.co.za/news/wp-content/uploads/2023/07/fastfood.psd-1.jpg"
            title= "Card title"
            description= "Card description"
            btn="Click Button"
          />

          <div className="card" style={{margin: '20px', width: '18rem' }}>
            <img src="https://businesstech.co.za/news/wp-content/uploads/2023/07/fastfood.psd-1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </section>

      </>
  )
}

export default App
