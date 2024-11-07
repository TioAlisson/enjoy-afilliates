import React from "react";
import HomeLayout from "@/app/HomeLayout";
import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";

type DashboardProps = {
    params: {
        lang: Locale;
    };
};

export default function Dashboard({ params }: DashboardProps) {
    const dict = getDictionaryServerOnly(params.lang);

    return (
        <div>
            <HomeLayout lang={params.lang} dict={dict}>
                <div className="mt-12">
                    <h1>Sign-in</h1>
                </div>
            </HomeLayout>
        </div>
    );
}
