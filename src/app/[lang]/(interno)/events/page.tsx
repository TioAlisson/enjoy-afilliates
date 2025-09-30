import React from "react";

import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";

import InputEvent from "./components/InputEvent";
import CardEvent from "./components/CardEvent";

type DashboardProps = {
    params: {
        lang: Locale;
    };
};

import Teste from "@/public/assets/img/img-card-event.png"

export default function Dashboard({ params }: DashboardProps) {
    const dict = getDictionaryServerOnly(params.lang);

    return (
        <div lang={params.lang}>
            <div className="max-w-xl mx-auto md:mt-auto">
                <h1 className="text-4xl text-center font-bold">{dict.events.titleEvent}</h1>
                <InputEvent dict={dict} />
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-10 justify-items-center">
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                    <CardEvent
                        image={Teste}
                        alt="Teste"
                        day="Qui, 31 out"
                        nameLink={dict.events.yourLink}
                        url="/"
                        city="it's Goiânia babe"
                        city2="State of Goiás"
                        state={dict.events.state}
                    />
                </div>
            </div>
        </div>
    );
}
