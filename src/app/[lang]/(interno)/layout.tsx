'use client'
import { useEffect, useState } from 'react';

import React from "react";
import { Locale } from "@/config/i18nConfig";
import { Dropdown } from "../auth/components/DropdownMenu";
import NavAside from "./template/NavAside";
import MenuMobile from "./components/MenuMobile";
import Image from "next/image";

import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png";

type LayoutProps = {
  children: React.ReactNode;
  lang: Locale;
  dict?: any;
};

import { usePathname } from "next/navigation"

export default function HomeLayout({ children }: LayoutProps) {
  const pathname = usePathname(); // Obtém o caminho da URL dinamicamente
  const [isProfilePage, setIsProfilePage] = useState(false);

  useEffect(() => {
    // Verifica se a URL corresponde ao padrão "/[idioma]/profile"
    const isProfile = pathname.match(/^\/(en-US|pt-BR)\/profile$/);
    setIsProfilePage(!!isProfile);
  }, [pathname]); // Reexecuta sempre que o pathname mudar

  return (
    <div className="xl:h-screen grid grid-cols-12 gap-0">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b-2 z-10 col-span-12 shadow-md py-5 lg:py-2">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-4 md:col-span-12 md:ms-auto">
            <Dropdown />
          </div>
          <div className="col-span-4 text-center md:hidden">
            <Image
              src={LogoEnjoy}
              alt="Logo Enjoy"
            />
          </div>
          <div className="col-span-4 ms-auto">
            <MenuMobile />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="hidden md:flex col-span-12 xl:col-span-3 2xl:col-span-2 shadow-2xl items-start overflow-y-auto">
        <NavAside />
      </aside>

      {/* Main */}
      <main className={`col-span-12 xl:col-span-9 2xl:col-span-10 ${!isProfilePage ? 'mt-[100px] xm:mt-36 lg:mt-20' : ''}`}>
        {children}
      </main>
    </div>
  );
}
