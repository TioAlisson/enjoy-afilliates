'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import InfoEarnMoney from "./InfoEarnMoney";
import IconForm from "@/public/assets/icon/enjoy-logo-icon.svg";

interface SectionEarnMoneyProps {
    dict: any;
    infoTexts: { title: string; alt: string }[];
}

export default function SectionEarnMoney ({ dict, infoTexts } : SectionEarnMoneyProps) {
    return (
        <section className="bg-zinc-900/80 p-22 lg:pb-32 xl:pb-40 2xl:pb-48">
            <div className="px-6 py-12 lg:py-0 lg:pt-20 lg:ms-8 2xl:ms-16">
                <Link href="/auth/signin" rel="noopener noreferrer">
                    <Button className="py-6 px-12" variant="red">
                        {dict.signup.btnLogin}
                    </Button>
                </Link>
                <h2 className="py-10 text-lg text-white font-bold 2xl:w-3/4">{dict.signup.subtitleZincPart}</h2>
                <div>
                    {infoTexts.map((item, index) => (
                        <InfoEarnMoney
                            key={index}
                            src={IconForm}
                            alt={item.alt}
                            title={item.title}
                        />
                    ))}
                </div>
                <p className="text-base lg:text-xl text-white font-semibold leading-8 mt-16">
                    {dict.signup.thanks}
                </p>
            </div>
        </section>
    );
};
