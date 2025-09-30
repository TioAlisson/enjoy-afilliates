import { Input } from "@/components/ui/input"

interface InputSignupProps {
    label: string
    htmlFor: string 
    id: string
}

export default function InputSignup(props: InputSignupProps) {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <Input
                className="border border-zinc-300 px-4 my-3 py-5 rounded-md outline-none w-full text-[16px] focus-visible:ring-transparent shadow-transparent"
                type="password"
                id={props.id}
            />
        </div>
    );
}
