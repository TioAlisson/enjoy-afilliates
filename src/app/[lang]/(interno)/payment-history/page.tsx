import React from "react";

import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InfoPayment from "./components/InfoPayment";

type DashboardProps = {
    params: {
        lang: Locale;
    };
};

export default function Dashboard({ params }: DashboardProps) {


    const dict = getDictionaryServerOnly(params.lang);
    const payment = [
        { id: 1, money: "100,00", paragraph: dict.paymentHistory.balance },
        { id: 2, money: "200,00" },
        { id: 3, money: "50,00" },
    ];

    return (
        <div className="">
            <div lang={params.lang}>
                <div className="max-w-xl mx-auto mt-10 md:mt-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center">
                        <h1 className="lg:mt-0 text-4xl mb-6 sm md:mb-0">{dict.paymentHistory.Payments}</h1>
                        <Link href="https://connect.stripe.com/setup/e/acct_1PU8A1C1ENG272fN/FUHRuvqefnbm" className="w-full md:w-1/3">
                            <Button variant="red" className="w-full"> 
                                <p>{dict.paymentHistory.bankDetails}</p>
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-8 xm:mt-20 lg:mt-16">
                        <div className="flex flex-col sm:flex-row rounded-lg bg-[#E0E0E0]">
                            {payment.map((payment, index) => (
                                <InfoPayment
                                    key={index}
                                    money={payment.money}
                                    paragraph={payment.paragraph}
                                />
                            ))}
                        </div>
                        <p className="text-center sm:text-start mt-6">{dict.paymentHistory.bankDetails}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
