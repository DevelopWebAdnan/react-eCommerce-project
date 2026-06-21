
import logo from '../../assets/shopping-cart/shopping-cart-32.png';

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    // const routes = [
    //     {
    //         id: 1,
    //         path: "/",
    //         name: "Home",
    //         element: "Home",
    //         isPrivate: false,
    //     },
    //     {
    //         id: 2,
    //         path: "/products",
    //         name: "Products",
    //         element: "Products",
    //         isPrivate: false,
    //     },
    //     {
    //         id: 3,
    //         path: "/product/:id",
    //         name: "Product Details",
    //         element: "ProductDetails",
    //         isPrivate: false,
    //     },
    //     {
    //         id: 4,
    //         path: "/cart",
    //         name: "Cart",
    //         element: "Cart",
    //         isPrivate: true,
    //     },
    //     {
    //         id: 5,
    //         path: "/dashboard",
    //         name: "Dashboard",
    //         element: "Dashboard",
    //         isPrivate: true,
    //     },
    // ];

    const links = <>
    <li><a href="">Home</a></li>
    <li><a href="">Item3</a></li>
    </>
    return (
        <div className="p-2">
            <nav className='flex md:flex-row-reverse md:justify-between bg-blue-100'>
                <div className="md:hidden text-2xl btn" onClick={() => setOpen(!open)}>
                    {
                        open === true ?
                            <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                <ul className={`md:flex duration-1000 absolute ${open ? 'top-16' : '-top-60'} md:static bg-blue-200 items-center`}>
                    {/* {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    } */}
                    {links}
                </ul>
                {/* <div> */}
                <button className="btn text-xl">
                    <img src={logo} alt="logo" />
                    <span>FOR OUR BEAUTY</span>
                </button>
                {/* </div> */}
            </nav>
            {/* <ul className="md:flex md:gap-10 text-xl">
                <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">Home</a></li>
                <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">About Us</a></li>
                <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">Contact Us</a></li>
                <li className="hover:text-primary transition-colors ease-in-out duration-300"><a href="#">Gallery</a></li>
            </ul> */}
            {/* <nav className="flex justify-between items-center">
            </nav> */}
        </div>
    );
};

export default Navbar;