import { Checkbox } from "@/components/ui/checkbox";
import { Complement } from "@/types/complement";

const OptionComplement = ({ complement }: { complement: Complement }) => {
  return (
    <section className="flex justify-between lg:justify-center items-center gap-2 lg:gap-8 border-gray-300 lg:px-12 lg:border-r-2 last:border-r-0 h-28 lg:h-56">
      <Checkbox id="option" className="w-5 h-5" />

      <div className="w-40 lg:max-w-36">
        <h3 className="font-extrabold text-sm">{complement.title}:</h3>
        <p className="text-xs">{complement.description}</p>
      </div>

      <h3 className="font-bold text-2xl">
        ${complement.price}/ <br />
        Mes
      </h3>
    </section>
  );
};

export default OptionComplement;
