import React from "react";
import { Locale } from "@/config/i18nConfig";
import { Dropdown } from "../auth/components/DropdownMenu";
import NavAside from "./template/NavAside";
import MenuMobile from "./components/MenuMobile";
import Image from "next/image";

import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
};

function ClientLayoutContent({ children }: { children: React.ReactNode; lang: Locale }) {
  return (
    <div className="text-center p-4">
      {children}
    </div>
  );
}

export default async function HomeLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
 

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
      <main className="col-span-12 xl:col-span-9 2xl:col-span-10 mt-[100px] xm:mt-36 lg:mt-20">
        <ClientLayoutContent lang={lang}>
          {children}
        </ClientLayoutContent>
      </main>
    </div>
  );
}