import { useState } from "react";
import { steps } from "@/utils/steps";
import RegisterTemplate from "@/templatesReact/RegisterTemplate";
import Register from "@/pages/Register";

const GeneralSection = () => {
  const [currentStep, setCurrentStep] = useState(steps[0]);

  function handleNextStep() {
    if (currentStep.accessor === steps[steps.length - 1].accessor) {
      return;
    }
    setCurrentStep(steps[currentStep.accessor + 1]);
  }

  function handlePreviousStep() {
    if (currentStep.accessor === steps[0].accessor) {
      return;
    }
    setCurrentStep(steps[currentStep.accessor - 1]);
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
