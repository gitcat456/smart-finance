import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Charts from "./assets/charts";
import ToggleBar from "./Components/Toggle";
import Categories from "./Components/Categories";

// Configuration for all categories
const categoryConfig = {
  Finance: {
    fields: [
      { label: "Salary", key: "salary", icon: "💵" },
      { label: "Bonus", key: "bonus", icon: "🎁" },
      { label: "Commission", key: "commission", icon: "📊" },
      { label: "Side Hustle", key: "sideHustle", icon: "🚀" },
      { label: "Farming Income", key: "farmingIncome", icon: "🌱" },
      { label: "Other Income", key: "otherIncome", icon: "✨" },
    ],
    gradient: "from-emerald-500 to-teal-600",
    icon: "💰",
  },
  Housing: {
    fields: [
      { label: "Rent/Mortgage", key: "rent", icon: "🏠" },
      { label: "Phone/Internet", key: "phone", icon: "📱" },
      { label: "Electricity", key: "electricity", icon: "💡" },
      { label: "Cooking Gas", key: "cookingGas", icon: "🔥" },
      { label: "Water", key: "water", icon: "💧" },
      { label: "Other 1", key: "other1", icon: "📌" },
      { label: "Other 2", key: "other2", icon: "📌" },
    ],
    gradient: "from-blue-500 to-indigo-600",
    icon: "🏡",
  },
  Food: {
    fields: [
      { label: "Groceries", key: "groceries", icon: "🛒" },
      { label: "Lunch", key: "lunch", icon: "🍱" },
      { label: "Dining Out", key: "foodShopping", icon: "🍽️" },
      { label: "Other", key: "other", icon: "✨" },
    ],
    gradient: "from-amber-500 to-orange-600",
    icon: "🍎",
  },
  Transportation: {
    fields: [
      { label: "Parking Fees", key: "parkingFees", icon: "🅿️" },
      { label: "Bus/Taxi Fare", key: "busTaxiFare", icon: "🚌" },
      { label: "Car Insurance", key: "carInsurance", icon: "📄" },
      { label: "Car Wash", key: "carWash", icon: "🚗" },
      { label: "Fuel", key: "fuel", icon: "⛽" },
      { label: "Maintenance", key: "maintenance", icon: "🔧" },
      { label: "Other", key: "other", icon: "✨" },
    ],
    gradient: "from-rose-500 to-pink-600",
    icon: "🚕",
  },
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategories, setShowCategories] = useState(false);
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    Object.keys(categoryConfig).forEach(category => {
      categoryConfig[category].fields.forEach(field => {
        initialData[`${category}_${field.key}`] = "";
      });
    });
    return initialData;
  });

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setShowCategories(true);
  };

  const handleInputChange = (category, key, value) => {
    setFormData({
      ...formData,
      [`${category}_${key}`]: value,
    });
  };

  const calculateTotal = (category) => {
    return categoryConfig[category].fields.reduce((total, field) => {
      const value = parseFloat(formData[`${category}_${field.key}`]) || 0;
      return total + value;
    }, 0);
  };

  const renderCategoryDetails = () => {
    const category = categoryConfig[selectedCategory];
    const total = calculateTotal(selectedCategory);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`min-h-screen p-6 bg-gradient-to-br ${category.gradient} text-white`}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackClick}
              className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm flex items-center gap-2"
            >
              <span>←</span> Back
            </motion.button>
            <h1 className="text-3xl font-bold">{selectedCategory}</h1>
            <div className="text-2xl">{category.icon}</div>
          </div>

          <div className="space-y-4 mb-8">
            {category.fields.map((field) => (
              <motion.div
                key={field.key}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 p-4 rounded-xl backdrop-blur-sm"
              >
                <label className="text-sm font-medium mb-1 flex items-center gap-2">
                  <span className="text-lg">{field.icon}</span>
                  {field.label}
                </label>
                <div className="flex items-center">
                  <span className="mr-2">Ksh</span>
                  <input
                    type="number"
                    value={formData[`${selectedCategory}_${field.key}`]}
                    onChange={(e) =>
                      handleInputChange(selectedCategory, field.key, e.target.value)
                    }
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="0.00"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white/20 p-6 rounded-xl backdrop-blur-sm text-center"
          >
            <div className="text-xl font-semibold mb-2">Total</div>
            <div className="text-4xl font-bold">Ksh {total.toFixed(2)}</div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <motion.header 
  className="fixed top-0 left-0 w-full py-6 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl z-50"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ 
    type: "spring",
    stiffness: 300,
    damping: 20
  }}
>
  <div className="container mx-auto px-6 text-center">
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.h1
        className="text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
        animate={{
          scale: [1, 1.03, 1],
          textShadow: [
            "0 0 8px rgba(255,255,255,0.3)",
            "0 0 16px rgba(255,255,255,0.4)",
            "0 0 8px rgba(255,255,255,0.3)"
          ],
          transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }
        }}
      >
        Smart Finance Manager
      </motion.h1>
    </motion.div>
    
    <motion.p
      className="text-xl font-medium text-white/90"
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: 0.3 }
      }}
    >
      Take control of your finances with confidence
    </motion.p>
    
    {/* Subtle animated underline */}
    <motion.div
      className="mt-4 h-1 bg-white/30 mx-auto max-w-xs rounded-full"
      initial={{ scaleX: 0 }}
      animate={{ 
        scaleX: 1,
        transition: { delay: 0.5 }
      }}
    />
  </div>
</motion.header>

      {/* Main Content */}
      <div className="pt-40 pb-20 px-6">
        <ToggleBar onToggle={setShowCategories} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Your Financial Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            Visualize and manage your money effectively
          </p>
        </motion.div>

        <Charts />

        <AnimatePresence>
          {showCategories && !selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Categories onCardClick={handleCardClick} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCategory && renderCategoryDetails()}
        </AnimatePresence>
      </div>
    </div>
  );
}