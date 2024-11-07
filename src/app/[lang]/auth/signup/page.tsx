'use client';

import InfoBanner from "../template/InfoBanner";
import MainSignup from "./components/MainSignup";

import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import { Locale } from "@/config/i18nConfig";

export default function Signup({ params }: { params: { lang: Locale } }) {
    const dict = getDictionaryServerOnly(params.lang);

    return (
        <div className="lg:h-[100vh] bg-red-700">
            <nav style={{ '--orange-bg': '29, 29, 31', '--opacity-animate': '0.9' } as any}>
                <InfoBanner dict={dict} />
            </nav>
            <MainSignup params={params} />
        </div>
    );
}
