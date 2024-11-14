import { Step } from "../../types/step";
import ProgressIndicator from "../atoms/ProgressIndicator";
import style from "../../assets/styles/organisms/ProgressBar.module.css";

const StepIndicator = ({
  step,
  isActive,
}: {
  step: Step;
  isActive: boolean;
}) => {
  return (
    <div className="relative">
      <div
        className={`flex items-center gap-2  p-2 border rounded-full md:w-40 ${
          style.stepIndicator
        } ${isActive ? "border-purple-primary-title" : "border-gray-500"}`}
      >
        <ProgressIndicator currentStep={step.currentStep} isActive={isActive} />
        <span className={` hidden md:block ${isActive ? "" : "text-gray-500"}`}>
          {" "}
          {step.title}{" "}
        </span>
      </div>
    </div>
  );
};

export default StepIndicator;
