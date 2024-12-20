import { COMPLEMENTS } from "@/utils/complements";
import TitleSection from "../atoms/TitleSection";
import OptionComplement from "./OptionComplement";

const ComplementsStep = () => {
  return (
    <section className="flex flex-col gap-8">
      <TitleSection title="Choose complements" index={3} />
      <div className="flex lg:flex-row flex-col justify-center">
        {COMPLEMENTS.map((complement) => (
          <OptionComplement complement={complement} key={complement.id} />
        ))}
      </div>
    </section>
  );
};

export default ComplementsStep;
