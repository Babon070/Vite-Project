import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black p-6 shadow-lg sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-white text-2xl font-bold">Babon Dev</Link>
                <ul className="flex space-x-4">
                    <Link to='/' className="text-white hover:text-gray-400 transition duration-300">
                        Home
                    </Link>
                    <Link className="text-white hover:text-gray-400 transition duration-300" to='/about'>
                        About
                    </Link>
                    <Link className="text-white hover:text-gray-400 transition duration-300" to='/contact'>
                        Contacts
                    </Link>
                    <Link className="text-white hover:text-gray-400 transition duration-300" to='/projects'>
                        Projects
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
