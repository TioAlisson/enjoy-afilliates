'use client'

import { useEffect, useState } from 'react';
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";
import { Locale } from "@/config/i18nConfig";
import InfoBanner from "../auth/template/InfoBanner";

import { Nav } from '../auth/template/Nav';
import MainPolicyPrivacy from './components/MainPolicyPrivacy';



export default function PolicyPrivacy ({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryServerOnly(params.lang);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`2xl:h-[15vh] bg-white fixed top-0 left-0 right-0 ${isScrolled ? 'border-b-4 border-[#FF9000]' : ''}`}>
        <InfoBanner dict={dict} />
        <Nav dict={dict}  />
      </header>
      <MainPolicyPrivacy dict={dict} />
    </>
  );
}
