import React, { useEffect, useState } from "react";
import { Mail, Lightbulb, Clock, Search, TrendingUp } from "lucide-react";
import type {TTypeSteps} from '../types/types'



const steps: TTypeSteps[] = [
  {
    title: "SIGN UP",
    icon: <Mail className="text-white w-6 h-6" />,
    description: "Seller starts registration on the platform.",
    color: "bg-green-600",
    margin: "mt-0 md:mt-[10.5rem]",
  },
  {
    title: "DETAILS",
    icon: <Lightbulb className="text-white w-6 h-6" />,
    description: "Submit business name, address, and contact.",
    color: "bg-blue-900",
    margin: "mt-0 md:mt-[7.5rem]",
  },
  {
    title: "COMPLAINCE",
    icon: <Clock className="text-white w-6 h-6" />,
    description: "Provide bank and compliance-related document details.",
    color: "bg-green-600",
    margin: "mt-0 md:mt-[4.5rem]",
  },
  {
    title: "ONBOARD",
    icon: <Search className="text-white w-6 h-6" />,
    description: "Add brand info and trademark proof documents.",
    color: "bg-blue-900",
    margin: "mt-0 md:mt-[1.5rem]",
  },
  {
    title: "VERIFY",
    icon: <TrendingUp className="text-white w-6 h-6" />,
    description: "Upload and verify documents for seller activation.",
    color: "bg-green-600",
    margin: "mt-0 md:mt-[-1.5rem]",
  },
];

export default function StepsSection() {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev >= steps.length) return 0;
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-[#003366] mb-2">
        Get started with 5 most simplified steps
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Follow our streamlined process to launch your project quickly and
        efficiently. No complex setup required.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-full md:w-1/5 transition-opacity duration-700 ease-in-out ${
              step.margin
            } ${index < visibleSteps ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color}`}
            >
              {step.icon}
            </div>
            <div
              className={`w-full text-center px-3 py-3 mt-3 ${step.color} text-white font-bold`}
            >
              {step.title}
            </div>
            <p className="text-center text-sm text-gray-600 mt-2 px-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
