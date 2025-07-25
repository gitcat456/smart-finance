import Header from "./Components/Head";
import ServicesSection from "./sample.jsx";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Hero Section - More Compact */}
      <section className="pt-24 pb-6 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Streamline Your Financial Management
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Pocket Manager helps you track income, expenses, and investments in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-full shadow hover:shadow-md transition"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Tighter Layout */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 ">Key Features</h2>
            <p className="text-gray-600">
              Everything you need to take control of your finances
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Income Tracking',
                desc: 'Automatically organize and categorize your income sources.',
                icon: 'fas fa-money-bill-wave',
                gradient: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Expense Management',
                desc: 'Monitor spending patterns with smart categorization.',
                icon: 'fas fa-chart-pie',
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Investment Insights',
                desc: 'Track portfolio performance with detailed analytics.',
                icon: 'fas fa-chart-line',
                gradient: 'from-emerald-500 to-teal-600'
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br ${feature.gradient} p-5 rounded-lg shadow-md text-white hover:shadow-lg transition`}
              >
                <i className={`${feature.icon} text-2xl mb-3`}></i>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Reduced Padding */}
      <section id="services" className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ServicesSection />
        </div>
      </section>

      {/* Compact CTA Section */}
      <section className="py-14 px-6 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your finances?</h2>
          <p className="text-white text-opacity-90 mb-6">
            Join thousands of users who have taken control of their financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#"
              className="px-6 py-2.5 bg-white text-indigo-900 font-medium rounded-full shadow hover:bg-gray-100 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="px-6 py-2.5 border border-white text-white font-medium rounded-full hover:bg-white hover:bg-opacity-10 transition"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}