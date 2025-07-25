import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Pocket Manager
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/login" className="px-4 py-1.5 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition">
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-full shadow-sm hover:shadow-md transition"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;