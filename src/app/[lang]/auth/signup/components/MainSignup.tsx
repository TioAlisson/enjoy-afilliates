import SectionEarnMoney from "./SectionEarnMoney";
import SectionSignup from "./SectionSignup";

import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import { Locale } from "@/config/i18nConfig";



export default function MainSignup({ params }: { params: { lang: Locale } }) {
    const dict = getDictionaryServerOnly(params.lang);
    const infoTexts = [
        { title: dict.signup.textOne, alt: "Info 1" },
        { title: dict.signup.textTwo, alt: "Info 2" },
        { title: dict.signup.textThree, alt: "Info 3" },
        { title: dict.signup.textFour, alt: "Info 4" }
    ];
    return (
        <main>
            <div className="grid grid-cols-12 px-4 py-8 lg:px-28 2xl:px-40 xl:pt-16 bg-red-700">
                <div className="col-span-12 lg:col-span-5 bg-white lg:ps-12 2xl:ps-16 px-6 lg:px-0">
                    <SectionSignup dict={dict} />
                </div>
                <div className="col-span-12 lg:col-span-7 bg-form">
                    <SectionEarnMoney dict={dict} infoTexts={infoTexts} />
                </div>
            </div>
        </main>
    );
}