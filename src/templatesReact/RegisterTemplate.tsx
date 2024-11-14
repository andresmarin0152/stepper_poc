import ProgressBar from "@/components/organisms/ProgressBar";
import TitlePage from "@/components/atoms/TitlePage";
import { Step } from "@/types/step";
import { Button } from "@/components/ui/button";

const RegisterTemplate = ({
  steps,
  currentStep,
  handleNextStep,
  children,
}: {
  steps: Step[];
  currentStep: Step;
  handleNextStep: () => void;
  children: React.ReactNode;
}) => {
  return (
    <section className="">
      <header className="top-0 bg-bg-primary h-[25dvh] md:h-[30dvh]">
        <TitlePage />
        <ProgressBar steps={steps} currentStep={currentStep} />
      </header>
      <section className="px-11 md:px-40 py-5 md:py-20 h-[50dvh]">
        {children}
      </section>
      <section className="bottom-0 flex md:justify-end bg-bg-primary px-11 md:px-40 py-5 w-full h-[25dvh] md:h-[20dvh]">
        <div className="gap-3 grid grid-cols-2 w-full md:w-[50%] h-[25dvh] md:h-[20dvh]">
          <Button variant={"outline"}>Cancel</Button>
          <Button className="bg-purple-primary-title" onClick={handleNextStep}>
            Next Step
          </Button>
        </div>
      </section>
    </section>
  );
};

export default RegisterTemplate;
