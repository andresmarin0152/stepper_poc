import TitleSection from "../atoms/TitleSection";
import DescriptionSection from "../atoms/DescriptionSection";

const GeneralSection = () => {
  return (
    <article className="flex flex-col gap-2">
      <TitleSection title="Personal Information" index={1} />
      <DescriptionSection />
    </article>
  );
};

export default GeneralSection;
