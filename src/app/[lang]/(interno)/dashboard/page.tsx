import React from "react";

import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import InfoDashboard from "./components/InfoDashboard";
import Search from "./components/Search";
import EventMetrics from "./components/EventMetrics";


type DashboardProps = {
    params: {
        lang: Locale;
    };
};

export default function Dashboard({ params }: DashboardProps) {
    const dict = getDictionaryServerOnly(params.lang);

    return (
        <div lang={params.lang}>
            <div className="max-w-xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h1 className="lg:mt-0 text-4xl mb-6 md:mb-0">Dashboard</h1>

                    <div className="bg-primary-color text-white font-semibold px-4 py-2 rounded-lg text-center">
                        <p className="text-[14px] xm:text-base">{dict.dashboard.date}</p>
                    </div>

                </div>
                <div className="mt-8 xm:mt-20 lg:mt-16">
                    <InfoDashboard dict={dict} />
                    <Search />
                    <div className="custom-scrollbar overflow-y-scroll md:overflow-y-auto w-full lg:mb-12">
                        <EventMetrics dict={dict} />
                    </div>
                </div>
            </div>
        </div>
    );
}