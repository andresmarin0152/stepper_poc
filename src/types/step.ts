import { StepEnum } from "@/utils/steps";

export interface Step {
  title: string;
  accesor: StepEnum;
  currentStep: number;
}
