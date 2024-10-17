 import Image, { StaticImageData } from "next/image";

 interface InfoSignupProps {
     src: string | StaticImageData
     alt: string
     title: string
 }

 export default function InfoSignup(props: InfoSignupProps) {
     return (
         <div className="flex gap-4 py-2">   
             <Image 
                 src={props.src}
                 alt={props.alt}
                 width={28}
                 height={25}
             />
             <h3 className="text-white lg:line-clamp-1">{props.title}</h3>
         </div>
     );
 }