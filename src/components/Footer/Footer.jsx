import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h3 className="text-xl font-bold mb-4">CONTACT INFO</h3>
                    <div className="mb-2">
                        <h4 className="font-semibold">ADDRESS: </h4>
                        <p>Mirpur-2, Dhaka.</p>
                    </div>
                    <div className="mb-2">
                        <h4 className=" font-semibold">PHONE: </h4>
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="mb-2">
                        <h4 className="font-semibold">EMAIL: </h4>
                        <p>mail@example.com</p>
                    </div>
                    <div className="mb-8">
                        <h4 className="font-semibold">WORKING DAYS/HOURS: </h4>
                        <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                    </div>
                    <div className="flex gap-2 mb-8">
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">CUSTOMER SERVICE</h3>
                    <div>
                        <p>Help & FAQs</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Orders History</p>
                        <p>My Accounts</p>
                        <p>About Us</p>
                        <p>Privacy</p>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">MAIN FEATURES</h3>
                </div>
            </div>
            <div className="divider"></div>
            <p className="mt-8"><small>&copy For Our Beauty 2026. All Rights Reserved</small></p>
        </div>
    );
};

export default Footer;