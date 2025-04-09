const Categories = ({ onCardClick }) => {
    return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Housing */}
        <div
          onClick={() => onCardClick("Housing")}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <h2 className="text-xl font-semibold">Housing</h2>
          </div>
          <p className="text-sm opacity-90">
            Manage your housing expenses and track your budget.
          </p>
        </div>
  
        {/* Card 2: Finance */}
        <div
          onClick={() => onCardClick("Finance")}
          className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1zm-6 8a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Finance</h2>
          </div>
          <p className="text-sm opacity-90">
            Track your income and manage your finances.
          </p>
        </div>
  
        {/* Card 3: Food */}
        <div
          onClick={() => onCardClick("Food")}
          className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1zm-6 8a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Food</h2>
          </div>
          <p className="text-sm opacity-90">
            Track your food expenses and manage your budget.
          </p>
        </div>
  
        {/* Card 4: Transportation */}
        <div
          onClick={() => onCardClick("Transportation")}
          className="bg-gradient-to-br from-pink-500 to-red-600 rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1zm-6 8a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Transportation</h2>
          </div>
          <p className="text-sm opacity-90">
            Track your transportation expenses and manage your budget.
          </p>
        </div>
      </div>
    );
  };
  
  export default Categories;