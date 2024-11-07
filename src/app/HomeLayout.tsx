import React from "react";
import { Locale } from "@/config/i18nConfig";
import { Dropdown } from "./[lang]/auth/components/DropdownMenu";
import NavAside from "./[lang]/template/NavAside";

type LayoutProps = {
  children: React.ReactNode;
  lang: Locale;  // Passando o idioma
  dict?: any;
};

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen grid grid-cols-12 gap-0">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white p-2 border-b-2 z-10 col-span-12 shadow-md">
        <div className="flex justify-end">
          <Dropdown />
        </div>
      </header>

      {/* Sidebar / Menu */}
      <aside className="bg-white col-span-12 lg:col-span-3 2xl:col-span-2 shadow-xl h-screen">
        <NavAside />
      </aside>

      {/* Main content */}
      <main className="col-span-12 lg:col-span-9 2xl:col-span-10 mt-16 lg:mt-0">
        {children}
      </main>
    </div>
  );
}
