import React from "react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Will any new locations be added soon?",
      answer:
        "We are constantly expanding our gym network and will be partnering with existing gyms in the future to being even more ease to our member!",
    },
    {
      id: 2,
      question: "How does the member tracking feature work?",
      answer:
        "When a member signs in, our system track the number of members currently in the gym and as such can provide this data showing how busy our gyms are. When a member signs out our system also keeps track ensuring an accurate count.",
    },
    {
      id: 3,
      question: "Do we offer other payment plans?",
      answer:
        "Currently we only offer two tiers of monthly plans: standard and premium. Payment must be made at the end of every month and will be billed directly.",
    },
    {
      id: 4,
      question: "What qualifications do the trainers have?",
      answer:
        "Our trainers have been selected to be the most knowledgeable, helpful, and caring trainers out there! We require all our trainers to have degrees in either kinesiology, physiotherapy, or biomechanics.",
    },
    // More questions...
  ];
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-400">
            We know going to the gym and signing up especially can be stressful
            and complicated but don’t worry we are here to make things as simple
            and straightforward as possible.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
