
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <nav className="flex justify-between">
                <div>
                    <a href="#" className="text-3xl font-bold">FOR OUR BEAUTY</a>
                </div>
                <div>
                    <a className="ml-4" href="#">Home</a>
                    <a href="#" className="ml-4">About</a>
                    <a href="#" className="ml-4">Contact</a>
                    <a href="#" className="ml-4">Gallery</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;