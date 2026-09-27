import React, { useEffect } from "react";

const PayUPolicyChecklist = () => {


   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const policies = [
    {
      title: "Privacy Policy",
      description:
        "Outlines how you collect, store, and secure customer data, explicitly mentioning third-party payment processing.",
    },
    {
      title: "Refund & Cancellation Policy",
      description:
        "States exact timelines (e.g., 5-7 working days) and the refund method (e.g., original payment source).",
    },
    {
      title: "Shipping & Delivery Policy",
      description:
        "Details transit timelines, delivery areas, or immediate delivery terms for digital goods/services.",
    },
    {
      title: "Terms & Conditions (T&C)",
      description:
        "Establishes the legal contract covering order rules, user eligibility, and liability limits.",
    },
    {
      title: "Contact Us Details",
      description:
        "Displays your registered business name, physical address, support email, and active phone number.",
    },
  ];

  return (
    <section className="w-full bg-slate-900 pt-32 px-4">
      <div className="max-w-4xl mx-auto  rounded-2xl shadow-md p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
          Here is the complete, unfied checklist of all mandatory terms, policies,and Details required on your website for PayU approval:
        </h2>

        <ul className="space-y-6">
          {policies.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 border-b border-gray-200 pb-5"
            >
              <div className="mt-2 w-3 h-3 rounded-full bg-white flex-shrink-0"></div>

              <p className="text-white text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-blueColor">
                  {item.title}:
                </span>{" "}
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PayUPolicyChecklist;