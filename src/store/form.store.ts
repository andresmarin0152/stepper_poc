import { Complement } from "@/types/complement";
import { PersonalInformation } from "@/types/personalInformation";
import { Plan } from "@/types/plans";
import { create } from "zustand";

export interface FormData {
  plan: Plan;
  complements: Complement[];
  personalInformation: PersonalInformation;
}

export const useFormStore = create((set) => ({
  formData: {
  },
  setFormData: (data: FormData) => set({ formData: data }),
}));