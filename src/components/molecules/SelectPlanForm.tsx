import { getInfoByBillingType } from "@/utils/plans";
import CardPlan from "../atoms/CardPlan";
import { useState } from "react";

const SelectPlanForm = ( { selectedBillingType } : { selectedBillingType: string } ) => {
  const [currentPlan, setCurrentPlan] = useState(1);

  const PLANS = getInfoByBillingType(selectedBillingType);

  const changePlan = (plan: number) => {
    setCurrentPlan(plan);
  };

  return (
    <section className="flex flex-wrap gap-4">
      {PLANS.map((plan) => (
        <CardPlan plan={plan} key={plan.id} currentPlan={PLANS.find((plan) => plan.id === currentPlan)} changePlan={changePlan} selectedBillingType={selectedBillingType} />
      ))}
    </section>
  );
};

export default SelectPlanForm;
