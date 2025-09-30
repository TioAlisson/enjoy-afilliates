import React from "react";

import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import InputPassword from "./components/InputPassword";
import { Button } from "@/components/ui/button";


type DashboardProps = {
    params: {
        lang: Locale;
    };
};

export default function Dashboard({ params }: DashboardProps) {
    const dict = getDictionaryServerOnly(params.lang);

    const passwordFields = [
        { label: dict.changePassword.password },
        { label: dict.changePassword.newPassword },
        { label: dict.changePassword.confirmNewPassword }
    ];

    return (
        <div lang={params.lang}>
            <div className="max-w-xl mx-auto mt-10 md:mt-auto">
                <h1 className="text-4xl text-center lg:text-start font-medium">{dict.changePassword.changePassword}</h1>
                <div className="mt-8 xm:mt-20 lg:mt-16">
                    {passwordFields.map((field, index) => (
                        <InputPassword
                            key={index}
                            label={field.label}
                            htmlFor={field.label}
                            id={field.label}
                        />
                    ))}
                    <div className="text-center lg:text-start">
                        <Button variant="red" className="px-12 py-6 my-12 mx-auto w-full lg:w-2/6">Salvar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
