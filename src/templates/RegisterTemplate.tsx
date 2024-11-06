import ProgressBar from "@/components/organisms/ProgressBar";
import TitlePage from "@/components/atoms/TitlePage";
import { Step } from "@/types/step";
import { Button } from "@/components/ui/button";

const RegisterTemplate = ({
  steps,
  children,
}: {
  steps: Step[];
  children: React.ReactNode;
}) => {
  return (
    <section className="">
      <header className="bg-bg-primary h-[25dvh] md:h-[30dvh] top-0">
        <TitlePage />
        <ProgressBar steps={steps} />
      </header>
      <section className="h-[50dvh] px-11 py-5 md:px-40 md:py-20">
        {children}
      </section>
      <section className="bg-bg-primary h-[25dvh] md:h-[20dvh] md:hidden bottom-0 grid grid-cols-2 gap-3 w-full px-11 py-5">
        <Button variant={"outline"}>Cancel</Button>
        <Button className="bg-purple-primary-title">Next Step</Button>
      </section>
      <footer className="hidden md:block bg-bg-primary h-[15dvh] md:h-[20dvh] bottom-0"></footer>
    </section>
  );
};

export default RegisterTemplate;
