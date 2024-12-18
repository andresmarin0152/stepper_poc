import { BILLING_TYPE } from "@/utils/plans";
import TitleSection from "../atoms/TitleSection";
import Toggle from "../atoms/Toggle";
import SelectPlanForm from "../molecules/SelectPlanForm";
import { useState } from "react";

const SelectPlanStep = () => {

  const [selectedBillingType, setSelectedBillingType] = useState<string>(BILLING_TYPE.MONTHLY);

  return (
    <section className="flex xl:flex-row flex-wrap md:justify-between gap-12 md:gap-2">
      <section className="flex flex-col gap-4 md:gap-2">
        <TitleSection title="Select plan" index={2} />
        <Toggle selectedBillingType={selectedBillingType} setSelectedBillingType={setSelectedBillingType} />
      </section>
      <section>
        <SelectPlanForm selectedBillingType={selectedBillingType}  />
      </section>
    </section>
  );
};

export default SelectPlanStep;
