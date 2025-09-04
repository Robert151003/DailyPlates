import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-6 py-12 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Announcement */}
      {/*<Announcements
        Announcement="Exciting update coming soon! A chat subsystem will allow users to chat directly from the bottom of the screen."
        active={true}
      />*/}

      {/* Hero / Welcome Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
          Welcome to Your Recipe Hub 🍳
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Explore a world of delicious meals—breakfast, lunch, and dinner recipes with easy-to-follow instructions, nutritional info, and tips for every dish.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Whether you&apos;re a seasoned chef or just starting out, we&apos;ve got something for everyone. Dive in and get cooking!
        </p>
      </div>


    </section>
  );
};

export default Home;
