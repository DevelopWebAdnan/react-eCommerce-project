// import Banner from './components/Banner/Banner'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'
// import Products from './components/Products/Products'

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                {/* <DaisyNav></DaisyNav> */}
            </header>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='max-w-7xl mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;