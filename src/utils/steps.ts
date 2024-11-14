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
    accesor: StepEnum.PersonalInfo,
    currentStep: 1,
  },
  {
    title: "Select plan",
    accesor: StepEnum.SelectPlan,
    currentStep: 2,
  },
  {
    title: "Complements",
    currentStep: 3,
    accesor: StepEnum.Complements,
  },
  {
    title: "Checkout",
    accesor: StepEnum.Checkout,
    currentStep: 4,
  },
];
