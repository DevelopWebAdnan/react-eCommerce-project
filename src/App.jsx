
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
      <main className='max-w-7xl mx-auto'>
        <Products></Products>
      </main>
      <footer className='max-w-7xl mx-auto'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
