import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl ">
          <div className="relative z-10 bg-gray-900 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl pt-12 lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-screen w-48 translate-x-1/2 transform text-gray-900 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Going to the gym</span>{" "}
                  <span className="block text-red-600 xl:inline">
                    revolutionized.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  With our new gyms, there’s machines, weights, and trainers all
                  available to help you reach your fitness goals and with our
                  member tracker you can make sure it’s never too busy when
                  starting your gym session.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:top-12">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
