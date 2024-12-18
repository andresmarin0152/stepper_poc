import checkPlan from "@/assets/icons/checkPlan.svg";
import { Plan } from "@/types/plans";
import { BILLING_TYPE } from "@/utils/plans";

const CardPlan = ({
  plan,
  currentPlan,
  changePlan,
  selectedBillingType,
}: {
  plan: Plan;
  currentPlan: Plan | undefined;
  changePlan: (plan: number) => void;
  selectedBillingType: string;
}) => {

  const isPlanActive = plan.id === currentPlan?.id;

  return (
    <button
      onClick={() => changePlan(plan.id)}
      className={`flex flex-col gap-6  p-3 border-2 rounded-md w-[18.75rem] ${
        isPlanActive ? "border-purple-primary-title" : "border-gray-400"
      } `}
    >
      <h3 className="font-medium text-black">{plan.name}</h3>
      <div className="gap-2 grid grid-cols-2">
        <p className="text-5xl">${plan.price}</p>
        <div
          className={`flex flex-col gap-1 text-gray-secondary-text text-xs ${
            isPlanActive
              ? "text-purple-primary-title"
              : "text-gray-secondary-text"
          }`}
        >
          <span>per user</span>
          <span>per { selectedBillingType === BILLING_TYPE.MONTHLY ? "month" : "year" }</span>
        </div>
      </div>
      <section className="w-full">
        <p className="text-sm">Plan for basic users up to 10</p>
        <button
          className={`px-4 py-[6px] rounded-md w-full text-white ${
            isPlanActive
              ? "bg-purple-primary-title"
              : "bg-gray-secondary-text  "
          }`}
        >
          Get started
        </button>
      </section>
      <div>
        <h4 className="font-light text-sm text-start">FEATURES</h4>
        <p>{plan.titleFeature}</p>
      </div>
      <section>
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-start">
            <figure>
              <img src={checkPlan} alt="Check Plan" />
            </figure>
            <p>{feature}</p>
          </div>
        ))}
      </section>
    </button>
  );
};

export default CardPlan;
