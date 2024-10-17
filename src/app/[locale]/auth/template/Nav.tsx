import Image from "next/image";

import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png"
import { Dropdown } from "../components/DropdownMenu";

export default function Nav() {
    return (
        <div className="grid grid-cols-12 items-center container mx-auto py-6 px-4 sm:px-0">
            <div className="col-span-6 lg:col-span-4">
                <Image
                    src={LogoEnjoy}
                    alt="Logo Enjoy"
                    width={200}
                />
            </div>
            <div className="lg:col-span-4 font-bold text-red-700 hidden lg:flex justify-center">
                INFLUENCER PROGRAM
            </div>
            <div className="col-span-6 lg:col-span-4 text-end">
                <Dropdown />
            </div>
        </div>
    );
}