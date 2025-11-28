import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-cyan-100 to-cyan-300 p-8">
        <div className="min-h-screen bg-[url('img.jpeg')] bg-cover">

      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-cyan-800 mb-5 mt-50">
          Welcome to Home
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.  assumenda nulla dolorem tempore perferendis! Et veritatis aliquam quisquam?.
        </p>

        <button className="bg-cyan-700 hover:bg-cyan-900 text-white py-3 px-8 rounded-lg shadow-lg transition">
          Get Started
        </button>
        
      </div>
      
</div>
      </div>
    
  );
};

export default Home;
