import { Step } from "@/types/step";
import { StepEnum } from "@/utils/steps";
import { create } from "zustand";

export const useStepperStore = create((set) => ({
  currentStep: StepEnum.PersonalInfo,
  setCurrentStep: (step: Step) => set({ currentStep: step.accessor }),
}));