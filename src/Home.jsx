import Header from "./Components/Head";
import Sample from "./sample.jsx";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto px-6 py-12 text-center">
       
        <h2 className="text-4xl font-bold text-gray-800 mb-6 opacity-80 ">
          Tired of daily hectic planning process?
        </h2>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-xl text-gray-600 animate-pulse">
            Pocket Manager is a simple mobile tool that helps you officiate and
            automate your daily tasks.
          </h2>
        </section>
      </div>
      <Sample />
    
    </div>
  );
};

export default Homepage;