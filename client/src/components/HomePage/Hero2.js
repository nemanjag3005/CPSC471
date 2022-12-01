import React from "react";

const Hero2 = () => {
  return (
    <div className="overflow-hidden bg-gray-800 pt-12">
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-700"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl">
              A better way to go to the gym.
            </h2>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white"></div>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-200">
                  Competitive rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white"></div>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-200">
                  Competitive rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white"></div>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-200">
                  Competitive rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white"></div>
                <p className="mt-6 text-lg font-semibold leading-8 text-gray-200">
                  Competitive rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
