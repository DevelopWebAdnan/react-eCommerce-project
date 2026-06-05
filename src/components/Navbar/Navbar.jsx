
import logo from '../../assets/shopping-cart/shopping-cart-32.png';

const Navbar = () => {

    return (
        <div className="max-w-7xl mx-auto py-2">
            <nav className="flex justify-between items-center">
                <div>
                    <a href="#" className='btn'><img src={logo} alt="logo" /><span className="text-3xl font-bold">FOR OUR BEAUTY</span></a>
                </div>
                <ul className="flex gap-9 text-xl">
                    <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">Home</a></li>
                    <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">About Us</a></li>
                    <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">Contact Us</a></li>
                    <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">Gallery</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;