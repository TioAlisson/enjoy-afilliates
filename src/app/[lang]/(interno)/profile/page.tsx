import React from "react";

import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import FormProfile from "./components/FormProfile";
import SocialAccount from "./components/SocialAccount";


type DashboardProps = {
    params: {
        lang: Locale;
    };
};

export default function Dashboard({ params }: DashboardProps) {

    const dict = getDictionaryServerOnly(params.lang);

    return (
        <div lang={params.lang} className="xl:h-screen lg:overflow-y-scroll pt-20">
            <div className="max-w-xl mx-auto mt-10 md:mt-auto">
                <div className="">
                    <div className="flex items-center flex-col lg:flex-row justify-between">
                        <div className="text-center mb-6">
                            <h1 className="text-2xl md:text-4xl text-center lg:text-start font-medium ">{dict.profile.influencerProfile}</h1>
                            <span className="text-muted-foreground flex lg:pt-4">{dict.profile.createProfile}</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="mb-2 text-lg md:text-2xl">Avatar</p>
                            <div className="bg-primary-color w-24 h-24 flex justify-center items-center rounded-full ">
                                <span className="text-white text-5xl">A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 lg:max-w-[500px]">
                    <FormProfile dict={dict} />
                    <SocialAccount dict={dict} />
                </div>
            </div>
        </div>
    );
}
