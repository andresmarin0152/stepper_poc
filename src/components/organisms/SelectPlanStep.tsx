import TitleSection from "../atoms/TitleSection";
import Toggle from "../atoms/Toggle";
import SelectPlanForm from "../molecules/SelectPlanForm";

const SelectPlanStep = () => {
  return (
    <section className="flex xl:flex-row flex-wrap md:justify-between gap-12 md:gap-2">
      <section className="flex flex-col gap-4 md:gap-2">
        <TitleSection title="Select plan" index={2} />
        <Toggle />
      </section>
      <section>
        <SelectPlanForm />
      </section>
    </section>
  );
};

export default SelectPlanStep;
