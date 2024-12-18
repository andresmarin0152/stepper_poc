import { BILLING_TYPE } from "@/utils/plans";

const Toggle = ( { selectedBillingType, setSelectedBillingType } : { selectedBillingType: string, setSelectedBillingType: React.Dispatch<React.SetStateAction<string>>} ) => {
  

  const handleToggle = () => {
    setSelectedBillingType(
      selectedBillingType === BILLING_TYPE.MONTHLY 
        ? BILLING_TYPE.YEARLY 
        : BILLING_TYPE.MONTHLY
    );
  };

  return (
    <div 
      className="flex items-center gap-2 border-[#D9D9D9] m-0 p-0 border rounded-md max-w-max cursor-pointer"
      onClick={handleToggle}
    >
      <p 
        className={`p-2 rounded-md text-sm ${
          selectedBillingType === BILLING_TYPE.MONTHLY 
            ? 'bg-gray-secondary-text text-white' 
            : 'text-[#D9D9D9]'
        }`}
      >
        {BILLING_TYPE.MONTHLY}
      </p>
      <p 
        className={`p-2 ${
          selectedBillingType === BILLING_TYPE.YEARLY 
            ? 'bg-gray-secondary-text text-white rounded-md' 
            : 'text-[#D9D9D9]'
        }`}
      >
        {BILLING_TYPE.YEARLY}
      </p>
    </div>
  );
};

export default Toggle;