import Image, { StaticImageData } from "next/image";

interface CardEventProps {
    image: string | StaticImageData
    alt: string
    day: string
    url: string
    nameLink: string
    city: string
    city2: string
    state: string
}

import IconLocation from "@/public/assets/icon/location.svg"
import Link from "next/link";

export default function CardEvent({ image, alt, day, url, nameLink, city, city2, state }: CardEventProps) {
    return (
        <div className="border overflow-hidden rounded-xl">
            <Image
                src={image}
                alt={alt}
                width={300}
                height={100}
                className="object-cover w-full"
            />
            <div className="py-6 px-4 xl:p-6">
                <div className="flex justify-between">
                    <p className="text-red-700 font-bold">{day}</p>
                    <Link href={url}>
                        <p className="text-sm hover:underline cursor-pointer font-bold">{nameLink}</p>
                    </Link>
                </div>
                <span className="flex mt-4 text-sm font-bold">{city}</span>
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <Image
                            src={IconLocation}
                            alt="Localization Icon"
                        />
                        <p className="text-sm">{city2}</p>
                    </div>
                    <p className="text-red-700 font-bold xl:text-xl">{state}</p>
                </div>
            </div>
        </div>
    );
}