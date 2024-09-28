"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/core/Header";
import AlertDialog from "@/components/core/AlertDialog";
import Lottie from "react-lottie-player";
import hexaAnimation from "../../public/lottie/hexa.json";
import Button from "@/components/core/Buttons";

// Define a type for the step configuration
type Step = {
  title: string;
  subtitle?: string;
  inputType?: "text" | "email";
  placeholder?: string;
  validation: (value: string) => boolean;
};

// Define the steps configuration
const steps: Step[] = [
  {
    title: "Let's start with the basics. Type in your first name.",
    inputType: "text",
    placeholder: "First name",
    validation: (name: string) =>
      name.trim().length > 0 && /^[a-zA-Z\s-]+$/.test(name),
  },
  {
    title: "How should we contact you? Type in your email address.",
    inputType: "email",
    placeholder: "Email address",
    validation: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  },
  {
    title: "Thanks, {firstName}! Now, it's time to get a reality check.",
    subtitle: "This will take 2-3 minutes.",
    validation: () => true, // No input validation needed for the last step
  },
];

export default function Onboarding() {
  const [showAlert, setShowAlert] = useState(false);
  const [firstName, setFirstName] = useState("");
  // Remove this line:
  // const [email, setEmail] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showMaxLengthAlert, setShowMaxLengthAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [inputs, setInputs] = useState<string[]>(
    new Array(steps.length).fill("")
  );
  const [fadeIn, setFadeIn] = useState(false);

  const MAX_LENGTH = 25;

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setShowAlert(true);
    }
  };

  const handleRefreshClick = () => {
    console.log("Refresh clicked");
  };

  const handleSubmit = () => {
    if (
      currentStep < steps.length &&
      steps[currentStep - 1].validation(inputs[currentStep - 1])
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleContinueClick = () => {
    setShowSuccessAlert(true);
  };

  const handleInputChange = (value: string) => {
    const newInputs = [...inputs];
    newInputs[currentStep - 1] = value;
    setInputs(newInputs);
    if (currentStep === 1) {
      setFirstName(value);
    }
    // Remove this else-if block:
    // else if (currentStep === 2) {
    //   setEmail(value);
    // }
  };

  useEffect(() => {
    if (firstName.length === MAX_LENGTH) {
      setShowMaxLengthAlert(true);
      const timer = setTimeout(() => {
        setShowMaxLengthAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [firstName]);

  useEffect(() => {
    if (currentStep === steps.length) {
      setTimeout(() => setFadeIn(true), 500);
    } else {
      setFadeIn(false);
    }
  }, [currentStep]);

  return (
    <div className="flex flex-col px-4 py-3 md:px-8 md:py-8 supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] bg-black text-white">
      <Header
        onBackClick={handleBackClick}
        onRefreshClick={handleRefreshClick}
      />

      <main className="flex flex-col flex-grow">
        <div className="flex flex-col items-center text-center">
          <Lottie
            loop
            animationData={hexaAnimation}
            play
            style={{ width: 50, height: 50 }}
          />
          <div className="w-full max-w-[500px] mt-5">
            <p className="text-xl font-sohne max-w-[300px] md:text-3xl md:max-w-[500px] mx-auto">
              {steps[currentStep - 1].title.replace("{firstName}", firstName)}
            </p>
            {steps[currentStep - 1].subtitle && (
              <p className="mt-4 text-lg font-sohne">
                {steps[currentStep - 1].subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto mb-5 mt-[50vh] transform -translate-y-1/2">
          {currentStep < steps.length ? (
            <div className="relative">
              <input
                type={steps[currentStep - 1].inputType}
                value={inputs[currentStep - 1]}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={steps[currentStep - 1].placeholder}
                maxLength={currentStep === 1 ? MAX_LENGTH : undefined}
                className="w-full px-6 py-4 bg-transparent border border-white rounded-[18px] text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                disabled={
                  !steps[currentStep - 1].validation(inputs[currentStep - 1])
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 disabled:opacity-50"
              >
                <Image
                  src="/images/icons/arrow-send.svg"
                  alt="Submit"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          ) : (
            <Button
              onClick={handleContinueClick}
              variant="secondary"
              className={`w-full transition-opacity duration-500 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            >
              Continue
            </Button>
          )}
          {showMaxLengthAlert && currentStep === 1 && (
            <p className="text-red-500 mt-2">
              Maximum character limit reached ({MAX_LENGTH} characters).
            </p>
          )}
        </div>
      </main>

      <AlertDialog
        isOpen={showAlert}
        link="/walkthrough"
        onClose={() => setShowAlert(false)}
      />

      <AlertDialog
        isOpen={showSuccessAlert}
        onClose={() => setShowSuccessAlert(false)}
        variant="success"
        title="Check Complete!"
        message="We will send you an email with your results."
      />
    </div>
  );
}
