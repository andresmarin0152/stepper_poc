import checkPlan from "@/assets/icons/checkPlan.svg";
import { Plan } from "@/types/plans";

const CardPlan = ({ plan }: { plan: Plan }) => {
  return (
    <article className="flex flex-col gap-4 border-gray-500 p-4 border rounded-md">
      <h3 className="font-medium text-black">{plan.name}</h3>
      <div className="gap-2 grid grid-cols-2">
        <p className="text-5xl">${plan.price}</p>
        <div className="flex flex-col gap-1 text-gray-secondary-text text-xs">
          <span>per month</span>
          <span>per year</span>
        </div>
      </div>
      <section className="w-full">
        <p className="text-sm">Plan for basic users up to 10</p>
        <button className="bg-gray-secondary-text px-4 py-[6px] rounded-md w-full text-white">
          Get started
        </button>
      </section>
      <div>
        <h4 className="font-light text-sm">FEATURES</h4>
        <p>{plan.titleFeature}</p>
      </div>
      <section>
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <figure>
              <img src={checkPlan} alt="Check Plan" />
            </figure>
            <p>{feature}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default CardPlan;
