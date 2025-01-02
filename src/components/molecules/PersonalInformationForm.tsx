import { useState } from "react";
import GeneralInput from "../atoms/GeneralInput";
import { PersonalInformation } from "@/types/personalInformation";
import * as yup from 'yup';

const PersonalInformationForm = () => {
  const [personalInformation, setPersonalInformation] = useState<PersonalInformation>({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validationSchema = yup.object({
    userName: yup.string().required("Nombre completo es obligatorio"),
    userEmail: yup.string().email("Correo electrónico no válido").required("Correo electrónico es obligatorio"),
    userPhone: yup.string().required("Número de teléfono es obligatorio"),
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPersonalInformation({
      ...personalInformation,
      [id]: value,
    });

    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validationSchema.validate(personalInformation, { abortEarly: false });
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        const fieldErrors: {[key: string]: string} = {};
        validationErrors.inner.forEach(error => {
          fieldErrors[error.path!] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form  onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <GeneralInput id="userName"  label="Nombre completo" type="text" placeholder="Enter your full name" value={personalInformation.userName}
        onChange={handleChange}
        error={errors.userName}/>
        <GeneralInput id="userEmail" label="Correo electrónico" type="text" placeholder="example@example.com" value={personalInformation.userEmail}
        onChange={handleChange}
        error={errors.userEmail}/>
        <GeneralInput id="userPhone" label="Número teléfono" type="text" placeholder="xxx-xxx-xx-xx" value={personalInformation.userPhone}
        onChange={handleChange}
        error={errors.userPhone}/>
        <button type="submit">Submit</button>
    </form>
      );
};

export default PersonalInformationForm;