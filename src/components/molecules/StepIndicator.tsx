import { Step } from "../../types/step"
import ProgressIndicator from "../atoms/ProgressIndicator"
import style from '../../assets/styles/organisms/ProgressBar.module.css'

const StepIndicator = ({ step }: { step: Step }) => {
  return (
    <div className="relative">
        <div className={`flex items-center gap-2  p-2 border rounded-full w-40 ${style.stepIndicator} ${ step.isActive ? 'border-purple-primary-title' : 'border-gray-500'}`}>
        <ProgressIndicator currentStep={step.currentStep} isActive={step.isActive} />
        <span className={
            step.isActive ? '' : 'text-gray-500'
        }> {step.title} </span>
        </div>
    </div>
  )
}

export default StepIndicator
