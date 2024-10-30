import TitleSection from "../atoms/TitleSection";
import DescriptionSection from "../atoms/DescriptionSection";
import PersonalInformationForm from "@/components/molecules/PersonalInformationForm";

const PersonalInfformationStep = () => {
  return (
    <section className="flex flex-row gap-2">
        <section className="flex flex-col gap-2 w-1/2 p-6">
            <TitleSection title="Personal Information" index={1} />
            <DescriptionSection />
        </section>
        <section className="w-1/2 p-6">
            <PersonalInformationForm />
        </section>
    </section>
  );
};      

export default PersonalInfformationStep;    