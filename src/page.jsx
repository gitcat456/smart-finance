import { useState } from "react";
import Charts from "./assets/charts";
import ToggleBar from "./Components/Toggle";
import Categories from "./Components/Categories";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  // State for each category's data
  const [financeData, setFinanceData] = useState({
    salary: "",
    bonus: "",
    commission: "",
    sideHustle: "",
    farmingIncome: "",
    otherIncome: "",
  });

  const [housingData, setHousingData] = useState({
    rent: "",
    phone: "",
    electricity: "",
    cookingGas: "",
    water: "",
    other1: "",
    other2: "",
    other3: "",
    other4: "",
    other5: "",
  });

  const [foodData, setFoodData] = useState({
    groceries: "",
    lunch: "",
    foodShopping: "",
    other: "",
  });

  const [transportationData, setTransportationData] = useState({
    parkingFees: "",
    busTaxiFare: "",
    carInsurance: "",
    carWash: "",
    fuel: "",
    maintenance: "",
    other: "",
  });

  // Function to handle card click
  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to go back to the cards view
  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  // Function to calculate total for a category
  const calculateTotal = (data) => {
    return Object.values(data).reduce((total, value) => total + (parseFloat(value) || 0), 0);
  };

  // Detailed views for each category
  const renderDetails = () => {
    const categories = {
      Finance: {
        data: financeData,
        setData: setFinanceData,
        fields: [
          { label: "Salary", key: "salary" },
          { label: "Bonus", key: "bonus" },
          { label: "Commission", key: "commission" },
          { label: "Side Hustle", key: "sideHustle" },
          { label: "Income from Farming Projects", key: "farmingIncome" },
          { label: "Other Income", key: "otherIncome" },
        ],
        gradient: "from-green-500 to-teal-600",
        icon: (
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
        ),
      },
      Housing: {
        data: housingData,
        setData: setHousingData,
        fields: [
          { label: "Mortgage or Rent", key: "rent" },
          { label: "Phone/Airtime/Credit Card", key: "phone" },
          { label: "Electricity Bill/Tokens", key: "electricity" },
          { label: "Cooking Gas/Charcoal", key: "cookingGas" },
          { label: "Water", key: "water" },
          { label: "Other 1", key: "other1" },
          { label: "Other 2", key: "other2" },
          { label: "Other 3", key: "other3" },
          { label: "Other 4", key: "other4" },
          { label: "Other 5", key: "other5" },
        ],
        gradient: "from-blue-500 to-purple-600",
        icon: (
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
        ),
      },
      Food: {
        data: foodData,
        setData: setFoodData,
        fields: [
          { label: "Groceries", key: "groceries" },
          { label: "Lunch", key: "lunch" },
          { label: "Food Shopping", key: "foodShopping" },
          { label: "Other", key: "other" },
        ],
        gradient: "from-yellow-500 to-orange-600",
        icon: (
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
        ),
      },
      Transportation: {
        data: transportationData,
        setData: setTransportationData,
        fields: [
          { label: "County Parking Fees", key: "parkingFees" },
          { label: "Bus/Taxi Fare", key: "busTaxiFare" },
          { label: "Car Insurance", key: "carInsurance" },
          { label: "Car Wash", key: "carWash" },
          { label: "Fuel", key: "fuel" },
          { label: "Maintenance", key: "maintenance" },
          { label: "Other", key: "other" },
        ],
        gradient: "from-pink-500 to-red-600",
        icon: (
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
        ),
      },
    };

    const category = categories[selectedCategory];
    if (!category) return null;       //gradient-to-br ${category.gradient}

    return (
      <div className="px-5 min-h-screen flex flex-col justify-between">
        <div className={`bg-gradient-to-br ${category.gradient} px-20 py-4 rounded-lg shadow-lg text-white`}>
          <h2 className="text-center text-3xl font-bold mb-6"> {selectedCategory}</h2>
          <div className="space-y-4">
            {category.fields.map((field) => (
              <div key={field.key} className="bg-gradient-to-br from-blue-700 to-blue-500 p-4 rounded-lg backdrop-blur-sm  hover:scale-105 transform transition-all duration-400 cursor-pointer">
                <label className="block text-sm font-medium">{field.label}:</label>
                <input
                  type="number"
                  value={category.data[field.key]}
                  onChange={(e) =>
                    category.setData({ ...category.data, [field.key]: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                  placeholder="Enter amount"
                />
              </div>
            ))}
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-lg font-bold">
                Total: Ksh{calculateTotal(category.data).toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Categories Button at the Bottom */}
        <div className="p-8">
          <button
            onClick={handleBackClick}
            className="w-full px-4 py-2 bg-blue text-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
          >
            ← Back to Categories
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Stylish Header */}
      <div className="text-center mb-4 p-2 bg-gradient-to-r from-purple-600 to-blue-500  shadow-2xl transform transition-all duration-300 hover:scale-15">
        <h1 className="text-5xl font-extrabold text-white mb-4 animate-pulse">
          Smart Finance Manager
        </h1>
        <p className="text-xl text-white/90 font-medium animate-bounce">
          Take control of your finances with ease and style.
        </p>
      </div>

      {/* Toggle Bar */}
      <ToggleBar onToggle={(isOpen) => setShowCategories(isOpen)} />

      {/* Beautiful Text Below the Navbar */}
      <div className="text-center text-3xl font-bold text-gray-800 mt-4">
        Your money graphs
      </div>

      {/* Charts Component */}
      <Charts />

      {/* Categories */}
      {showCategories && !selectedCategory && (
        <Categories onCardClick={handleCardClick} />
      )}

      {/* Render Details if a category is selected */}
      {selectedCategory && renderDetails()}
    </div>
  );
}