const ProgressIndicator = ({ currentStep, isActive }: { currentStep: number, isActive?: boolean }) => {
  return (
    <div className={`flex justify-center items-center p-1 border rounded-full w-6 h-6 ${isActive ? " border-purple-primary-title" : " border-gray-500"}` }>
      <span className={isActive ? '' : 'text-gray-500'}> {currentStep} </span>
    </div>
  )
}

export default ProgressIndicator
