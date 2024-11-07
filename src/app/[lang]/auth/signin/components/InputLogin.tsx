import { Input } from "@/components/ui/input"

interface InputLoginProps {
    type: string | any
    id: string
    placeholder: string
}

export default function InputLogin(props: InputLoginProps) {
    return (
        <Input className="border border-zinc-300 bg-[#ECECEC] p-4 my-2 rounded-md outline-none" type={props.type} id={props.id} placeholder={props.placeholder} />
    );
}