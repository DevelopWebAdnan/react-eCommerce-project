
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

function App() {

  return (
    <div>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Products></Products>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
