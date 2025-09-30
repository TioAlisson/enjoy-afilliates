interface SocialAccountProps {
  dict: any
}

import { Button } from "@/components/ui/button";
import InputSocial from "./InputSocial";



import Image1 from "@/public/assets/icon/icon-facebook.svg"
import Image2 from "@/public/assets/icon/icon-instagram.svg"
import Image3 from "@/public/assets/icon/icon-twitter.svg"
import Image4 from "@/public/assets/icon/icon-youtube.svg"

const images = [
  { image: Image1, alt: "Facebook", id: "facebook", name: "facebook" },
  { image: Image2, alt: "Instagram", id: "instagram", name: "instagram" },
  { image: Image3, alt: "Twitter", id: "twitter", name: "twitter" },
  { image: Image4, alt: "Youtube", id: "youtube", name: "youtube" },
];

export default function SocialAccount({ dict }: SocialAccountProps) {
  return (
    <div>
      <h2 className="py-6 text-start text-2xl font-semibold">{dict.profile.socialAccount}</h2>
      {images.map((item, index) => (
        <InputSocial
          key={index}
          image={item.image}
          alt={item.alt}
          id={item.id}
          name={item.name}
        />
      ))}
      <div className="text-center lg:text-start my-12">
        <Button variant="red" className="px-24 py-6 text-lg mx-auto w-full lg:w-2/6">{dict.profile.btnSave}</Button>
      </div>
    </div>
  );
}