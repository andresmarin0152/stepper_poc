import GeneralInput from "../atoms/GeneralInput";

const PersonalInformationForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full">
        <GeneralInput id="userName"  label="Nombre completo" type="text" placeholder="Enter your full name"/>
        <GeneralInput id="userEmail" label="Correo electrónico" type="email" placeholder="example@example.com"/>
        <GeneralInput id="userPhone" label="Número teléfono" type="number" placeholder="xxx-xxx-xx-xx"/>
    </form>
      );
};

export default PersonalInformationForm;