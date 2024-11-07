import { Input } from "@/components/ui/input"

interface InputSignupProps {
    label: string
    htmlFor: string 
    type: string
    id: string
}

export default function InputSignup(props: InputSignupProps) {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <Input
                className="border border-zinc-300 bg-[#ECECEC] p-4 my-2 rounded-md outline-none w-full text-[16px]"
                type={props.type}
                id={props.id}
            />
        </div>
    );
}
