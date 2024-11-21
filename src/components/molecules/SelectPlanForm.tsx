import { PLANS } from "@/utils/plans";
import CardPlan from "../atoms/CardPlan";

const SelectPlanForm = () => {
  const currentPlan = PLANS.find((plan) => plan.id === 1);
  return (
    <section className="flex flex-wrap gap-4">
      {PLANS.map((plan) => (
        <CardPlan plan={plan} key={plan.id} currentPlan={currentPlan} />
      ))}
    </section>
  );
};

export default SelectPlanForm;
