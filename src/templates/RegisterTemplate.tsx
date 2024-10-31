import ProgressBar from "@/components/organisms/ProgressBar";
import TitlePage from "@/components/atoms/TitlePage";
import { Step } from "@/types/step";

const RegisterTemplate = ({
  steps,
  children,
}: {
  steps: Step[];
  children: React.ReactNode;
}) => {
  return (
    <section className="">
      <header className="bg-bg-primary h-[30dvh] top-0">
        <TitlePage />
        <ProgressBar steps={steps} />
      </header>
      <section className="h-[50dvh] px-40 py-20">{children}</section>
      <footer className="bg-bg-primary h-[20dvh] bottom-0"></footer>
    </section>
  );
};

export default RegisterTemplate;
