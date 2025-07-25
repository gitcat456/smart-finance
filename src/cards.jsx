const Cards = ({ handleCardClick }) => {
  const cardData = [
    {
      title: "Housing",
      description: "Manage your housing expenses and track your budget",
      gradient: "from-blue-600 to-indigo-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Finance",
      description: "Track your income and manage your finances",
      gradient: "from-emerald-500 to-teal-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Food",
      description: "Track your food expenses and manage your budget",
      gradient: "from-amber-500 to-orange-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m-8-8v8m16-8v8M9 4h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      title: "Transportation",
      description: "Track your transportation expenses and manage your budget",
      gradient: "from-rose-500 to-pink-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(card.title)}
          className={`bg-gradient-to-br ${card.gradient} rounded-xl shadow-lg p-5 text-white hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1`}
        >
          <div className="flex items-center mb-3">
            <div className="p-2 mr-3 rounded-lg bg-white bg-opacity-20">
              {card.icon}
            </div>
            <h2 className="text-lg font-semibold">{card.title}</h2>
          </div>
          <p className="text-sm text-white text-opacity-90 pl-11">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;