interface NavProps {
    dict: any;
}

import Image from "next/image";

import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png"
import { Dropdown } from "../components/DropdownMenu";
import Link from "next/link";

export function Nav({ dict }: NavProps) {
    return (
        <nav className="container mx-auto grid grid-cols-12 h-full items-center px-4 pb-6 mt-6 md:mt-0 sm:pt-0 lg:pb-4 lg:mt-4 2xl:pt-6 2xl:pb-16 2xl:mt-0">
            <div className="col-span-6 lg:col-span-4">
                <Link href="/" className="">
                    <Image
                        src={LogoEnjoy}
                        alt="Logo Enjoy"
                        className="w-52 h-auto border-b-2 border-transparent hover:border-primary-color transition-all ease-out duration-500"
                    />
                </Link>
            </div>
            <div className="lg:col-span-4 font-bold text-red-700 hidden lg:flex justify-center">
                {dict.signin.nav}
            </div>
            <div className="col-span-6 lg:col-span-4 text-end">
                <Dropdown />
            </div>
        </nav>
    );
}