import InfoBanner from "../template/InfoBanner";

import Main from "./components/Main";

import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import { Locale } from "@/config/i18nConfig";
import { Nav } from "../template/Nav";

export default function Signin({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryServerOnly(params.lang);
  return (
    <div className="h-screen">
      <header className="2xl:h-[15vh]">
        <InfoBanner dict={dict} />
        <Nav dict={dict} />
      </header>
      <Main dict={dict} />
    </div>
  );
}