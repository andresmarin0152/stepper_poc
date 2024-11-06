import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
    id: string;
    label: string;
    type: string;
    placeholder: string;
}

const InputWithLabel=({id, label, type, placeholder}: Props)=> { 
  return (
    <div className="items-center gap-1.5 grid w-full md:max-w-sm">
      <Label htmlFor="email">{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  )
}

export default InputWithLabel
