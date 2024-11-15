import { PLANS } from "@/utils/plans";
import CardPlan from "../atoms/CardPlan";

const SelectPlanForm = () => {
  return (
    <section className="gap-4 grid grid-cols-3">
      {PLANS.map((plan) => (
        <CardPlan plan={plan} key={plan.id} />
      ))}
    </section>
  );
};

export default SelectPlanForm;
