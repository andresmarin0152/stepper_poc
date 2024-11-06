import TitleSection from "../atoms/TitleSection";
import DescriptionSection from "../atoms/DescriptionSection";
import PersonalInformationForm from "@/components/molecules/PersonalInformationForm";

const PersonalInfformationStep = () => {
  return (
    <section className="flex md:flex-row flex-col gap-8 md:gap-2">
        <section className="flex flex-col gap-4 md:gap-2 md:w-1/2">
            <TitleSection title="Personal Information" index={1} />
            <DescriptionSection />
        </section>
        <section className="md:w-1/2">
            <PersonalInformationForm />
        </section>
    </section>
  );
};      

export default PersonalInfformationStep;    