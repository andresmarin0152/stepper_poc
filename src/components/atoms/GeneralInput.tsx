import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
    id: string;
    value: string;
    label: string;
    type: string;
    placeholder: string;
    error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel=({id, label, type, placeholder, value, error, onChange}: Props)=> { 
  return (
    <div className="items-center gap-1.5 grid w-full">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default InputWithLabel
