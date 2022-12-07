import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Element } from "react-scroll";

const Memberships = () => {
  const tiers = [
    {
      id: "tier-hobby",
      name: "Standard",
      href: "/login",
      priceMonthly: 79,
      description:
        "Our Standard plan offer all the everyday gym essential you need.",
      features: [
        "Access to change rooms and showers",
        "Choose up to one of our six locations to go to",
        "Access to all the newest machines and weights",
        "Access to professional trainers with additional charges",
      ],
    },
    {
      id: "tier-team",
      name: "Premium",
      href: "/login",
      priceMonthly: 99,
      description:
        "With our premium plan we offer the absolute best gym experience one could ask for.",
      features: [
        "Access to change rooms, steam rooms and showers ",
        "Complementary Hot towel service",
        "Access to all gym locations at any time",
        "Access to premium-member access areas",
        "Includes 5-hr weekly training session hosted by our professional trainers",
      ],
    },
  ];
  return (
    <div className="bg-gray-900">
      <Element name="memberships">
        <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-lg font-semibold leading-8 text-red-400">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-200">
                The right price for you,{" "}
                <br className="hidden sm:inline lg:hidden" />
                whoever you are
              </p>
              <p className="mt-6 text-lg leading-8 text-white/60">
                We offer a two-tier member system ensuring a range of budgets
                can be accommodated
              </p>
            </div>
          </div>
        </div>
        <div className="flow-root bg-gray-800 pb-32 lg:pb-40 shadow-xl">
          <div className="relative -mt-80">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col rounded-3xl bg-gray-800 shadow-xl ring-1 ring-black/10"
                  >
                    <div className="p-8 sm:p-10">
                      <h3
                        className="text-lg font-semibold leading-8 tracking-tight text-red-600"
                        id={tier.id}
                      >
                        {tier.name}
                      </h3>
                      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-100">
                        ${tier.priceMonthly}
                        <span className="text-lg font-semibold leading-8 tracking-normal text-gray-400">
                          /mo
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-gray-400">
                        {tier.description}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col p-2">
                      <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-700 p-6 sm:p-8">
                        <ul role="list" className="space-y-6">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon
                                  className="h-6 w-6 text-red-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <p className="ml-3 text-sm leading-6 text-gray-200">
                                {feature}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <a
                            href={tier.href}
                            className="inline-block w-full rounded-lg bg-red-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-red-700"
                            aria-describedby={tier.id}
                          >
                            Get started today
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Memberships;
