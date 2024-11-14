import { Step } from "../../types/step";
import StepIndicator from "../molecules/StepIndicator";
import style from "../../assets/styles/organisms/ProgressBar.module.css";

const ProgressBar = ({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: Step;
}) => {
  return (
    <div className={`flex justify-center gap-8 p-8 ${style.stepContainer}`}>
      {steps.map((step, index) => (
        <StepIndicator
          key={index}
          step={step}
          isActive={step.accesor === currentStep.accesor}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
