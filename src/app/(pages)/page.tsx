import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MySite</h1>
          <p className="text-xl mb-6">Your modern and responsive platform.</p>
          <a
            href="/services"
            className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-200 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Feature 1</h3>
              <p>Detail your first key feature here.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Feature 2</h3>
              <p>Describe your second feature here.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="font-semibold text-xl mb-3">Feature 3</h3>
              <p>Explain your third feature here.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
