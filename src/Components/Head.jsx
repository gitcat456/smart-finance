import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/Login">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </Link>
      <Link to="/SignUp">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/vite.svg" alt="vite logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-white">Pocket Manager</h1>
        </div>
        <Buttons />
      </div>
    </nav>
  );
};

export default Header;