import { useState } from "react";
import { steps } from "@/utils/steps";
import RegisterTemplate from "@/templatesReact/RegisterTemplate";
import Register from "@/pages/Register";

const GeneralSection = () => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  function handleNextStep() {
    if (currentStep.accesor === steps[steps.length - 1].accesor) {
      return;
    }
    setCurrentStep(steps[currentStep.accesor + 1]);
  }

  function handlePreviousStep() {
    if (currentStep.accesor === steps[0].accesor) {
      return;
    }
    setCurrentStep(steps[currentStep.accesor - 1]);
  }

  return (
    <article className="flex flex-row gap-2">
      <RegisterTemplate
        steps={steps}
        currentStep={currentStep}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      >
        <Register currentStep={currentStep} />
      </RegisterTemplate>
    </article>
  );
};

export default GeneralSection;
