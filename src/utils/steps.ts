import { Step } from "../types/step";

export const steps: Step[] = [
    {
      title: 'Personal Info',
      currentStep: 1,
      isActive: true,
    },
    {
      title: 'Select plan',
      currentStep: 2,
      isActive: false,
    },
    {
      title: 'Complements',
      currentStep: 3,
      isActive: false,
    },
    {
      title: 'Checkout',
      currentStep: 4,
      isActive: false,
    },
  ]