
import logo from '../../assets/shopping-cart/shopping-cart-32.png';

const Navbar = () => {

    return (
        <div className="max-w-7xl mx-auto p-2">
            <nav className="flex justify-between items-center">
                <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                        <img src={logo} alt="logo" />
                        <span>FOR OUR BEAUTY</span>
                    </button>
                </div>
                <ul className="md:flex md:gap-10 text-xl">
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