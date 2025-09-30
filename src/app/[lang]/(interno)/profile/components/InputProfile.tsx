interface InputProfileProps {
  label: string;
  htmlFor: string;
  name: string;
  type: string;
  id: string;
  options?: { value: string, label: string }[]; 
}

import { Input } from "@/components/ui/input" 

export default function InputProfile({ label, htmlFor, name, type, id, options}: InputProfileProps) {
  if (type === 'select') {
    return (
      <div>
        <label className="font-bold text-sm md:text-base" htmlFor={htmlFor}>{label}</label>
        <select
          id={id}
          name={name}
          className="text-sm md:text-base border border-zinc-300 px-4 my-3 py-[7.7px] rounded-md outline-none w-full text-[16px] focus-visible:ring-transparent shadow-transparent"
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className="font-bold text-sm md:text-base" htmlFor={htmlFor}>{label}</label>
      <Input
        className="input-profile text-sm md:text-base border border-zinc-300 flex px-4 my-3 py-5 rounded-md outline-none w-full text-[16px] focus-visible:ring-transparent shadow-transparent"
        type={type}  
        id={id}
        name={name}  
      />
    </div>
  );
}
