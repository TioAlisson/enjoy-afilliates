interface SectionSignupProps {
    dict: any;
}

import Image from "next/image";
import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import InputsSingup from "./InputsSignup";

export default function SectionSignup({ dict }: SectionSignupProps) {

    return (
        <section className="pt-20">
            <Link href="/">
                <Image
                    src={LogoEnjoy}
                    alt="Logo Enjoy"
                    className="w-64 mx-auto lg:mx-0 border-b-2 border-transparent hover:border-primary-color transition-all ease-out duration-500"
                />
            </Link>
            <div className="text-center lg:text-start py-8">
                <h1 className="text-2xl">{dict.signup.share}</h1>
                <h2 className="text-sm text-muted-foreground pt-4">{dict.signup.share}</h2>
                <span className="block w-10 border-b-4 mt-2 border-primary-color mx-auto lg:mx-0"></span>
            </div>
            <InputsSingup dict={dict} />
            <div>
                <Link href="/auth/signin" rel="noopener noreferrer" className="flex justify-center lg:justify-start pt-6 py-10 ">
                    <Button className="py-6 px-12 w-full md:w-40 " variant="red">
                        {dict.InfoSignupInput.btnApply}
                    </Button>
                </Link>
            </div>
        </section>
    );
}