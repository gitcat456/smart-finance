const ServicesSection = () => {
  const services = [
    {
      title: "Income Tracker",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Track your income flow for fast and efficient planning. Beat inefficiency and ad-hoc management.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Expense Tracker",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>
      ),
      description: "Manage your money outflow with our tool that helps track expenses for better financial planning.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Savings & Investments",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: "Invest your saved money in real-time projects with guaranteed returns and income generation.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Virtual Graphs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Visualize your finances in real-time charts enabling better predictions and decision making.",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const proFeatures = [
    {
      title: "AI Integration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Get AI-generated reports and automated suggestions to better manage your financial assets.",
      gradient: "from-violet-600 to-purple-900"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Financial Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive tools to manage your finances efficiently and grow your wealth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${service.gradient} rounded-xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className="p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white bg-opacity-20 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-white text-opacity-90">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pro Features Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-4">Pro Features</h3>
              {proFeatures.map((feature, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-white bg-opacity-20 mr-4 text-white">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-white text-opacity-90 pl-12">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <button className="bg-white text-indigo-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105">
                Upgrade to Pro
              </button>
              <p className="text-white text-opacity-80 mt-4 text-center">
                Unlock advanced features and analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;