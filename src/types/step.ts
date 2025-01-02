import { StepEnum } from "@/utils/steps";

export interface Step {
  title: string;
  accessor: StepEnum;
  currentStep: number;
}
