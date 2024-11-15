import CheckoutStep from "@/components/organisms/CheckoutStep";
import ComplementsStep from "@/components/organisms/ComplementsStep";
import PersonalInformationStep from "@/components/organisms/PersonalInformationStep";
import SelectPlanStep from "@/components/organisms/SelectPlanStep";
import { Step } from "@/types/step";
import { StepEnum } from "@/utils/steps";

const mappedComponents = {
  [StepEnum.PersonalInfo]: PersonalInformationStep,
  [StepEnum.SelectPlan]: SelectPlanStep,
  [StepEnum.Complements]: ComplementsStep,
  [StepEnum.Checkout]: CheckoutStep,
};

const Register = ({ currentStep }: { currentStep: Step }) => {
  const CurrentComponent = mappedComponents[currentStep.accesor];

  return (
    <section>
      <CurrentComponent />
    </section>
  );
};

export default Register;
