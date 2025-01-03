import { Step } from "../types/step";

export enum StepEnum {
  PersonalInfo,
  SelectPlan,
  Complements,
  Checkout,
}

export const steps: Step[] = [
  {
    title: "Personal Info",
    accessor: StepEnum.PersonalInfo,
    currentStep: 1,
  },
  {
    title: "Select plan",
    accessor: StepEnum.SelectPlan,
    currentStep: 2,
  },
  {
    title: "Complements",
    currentStep: 3,
    accessor: StepEnum.Complements,
  },
  {
    title: "Checkout",
    accessor: StepEnum.Checkout,
    currentStep: 4,
  },
];
