import { useState } from "react";

const ToggleBar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  return (
    <div className="flex justify-center p-4">
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {isOpen ? "Hide Categories" : "Show Categories"}
      </button>
    </div>
  );
};

export default ToggleBar;