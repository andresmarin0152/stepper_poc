import TitleSection from "../atoms/TitleSection";
import SelectPlanForm from "../molecules/SelectPlanForm";

const SelectPlanStep = () => {
  return (
    <section className="flex md:flex-row flex-col gap-8 md:gap-2">
      <section className="flex flex-col gap-4 md:gap-2">
        <TitleSection title="Select plan" index={2} />
      </section>
      <section>
        <SelectPlanForm />
      </section>
    </section>
  );
};

export default SelectPlanStep;
