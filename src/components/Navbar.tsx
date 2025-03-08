const Navbar = () => {
    return (
      <nav className="bg-black p-4 shadow-lg border-b-2">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  