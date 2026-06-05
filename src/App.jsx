
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
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
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
