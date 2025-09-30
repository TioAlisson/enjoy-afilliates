
interface InputSocialProps {
  image: string | StaticImageData
  alt: string
  name: string
  id: string
}
import { Input } from "@/components/ui/input"
import Image, { StaticImageData } from "next/image";

export default function InputSocial({ image, alt, name, id }: InputSocialProps) {
  return (
    <div className="flex gap-5">
      <Image
        src={image}
        alt={alt}
        width={28}
        height={20}
        className="min-w-8"
      />
      <Input
        className="text-sm md:text-base border border-zinc-300 flex px-4 my-4 py-5 rounded-md outline-none w-full text-[16px] focus-visible:ring-transparent shadow-transparent"
        name={name}
        id={id}
      />
    </div>
  );
}