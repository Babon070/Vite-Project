import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-black p-4 shadow-lg border-b">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-white text-2xl font-bold">My Portfolio</Link>
                <ul className="flex space-x-4">
                    <Link to='/' className="text-white hover:text-gray-400 transition duration-300">
                        Home
                    </Link>
                    <Link className="text-white hover:text-gray-400 transition duration-300" to='/about'>
                        About
                    </Link>
                    <Link className="text-white hover:text-gray-400 transition duration-300" to='/contact'>
                        Contact Me
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
