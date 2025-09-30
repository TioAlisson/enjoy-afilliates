'use client';

import { usePathname } from 'next/navigation';
import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png";
import Image from "next/image";
import Link from "next/link";

type Language = 'pt-BR' | 'en-US';

type Link = {
  name: string;
  href: string;
};

const links: Record<Language, Link[]> = {
  'en-US': [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Events", href: "/events" },
    { name: "My Profile", href: "/profile" },
    { name: "Password", href: "/change-password" },
    { name: "Payments", href: "/payment-history" },
    { name: "Logout", href: "/auth/signin" },
  ],
  'pt-BR': [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Eventos", href: "/events" },
    { name: "Meu Perfil", href: "/profile" },
    { name: "Senha", href: "/change-password" },
    { name: "Pagamentos", href: "/payment-history" },
    { name: "Sair", href: "/auth/signin" },
  ],
};

export default function NavAside() {
  const pathname = usePathname();

  const language = (pathname?.split('/')[1] as Language) || 'en-US';
  const normalizedPathname = pathname?.replace(`/${language}`, '') || '';
  const selectedLinks = links[language];

  return (
    <nav className="flex justify-between xl:flex-col w-full">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={LogoEnjoy}
          alt="Logo Enjoy"
          className="mt-24 lg:mt-20 px-6 w-72"
        />
        <span className="font-semibold text-primary-color mb-5 xl:mb-0">INFLUENCER PROGRAM</span>
      </div>
      <div className="hidden xl:flex items-center gap-4 my-6 py-6 px-2 border-t-2 border-b-2">
        <div className="bg-primary-color w-16 h-16 flex justify-center items-center rounded-full">
          <span className="text-white text-3xl">A</span>
        </div>
        <div>
          <h2 className="text-xl py-1">Jonatan</h2>
          <p className="text-base">Jonatan@teste</p>
        </div>
      </div>
      <div className="hidden md:flex flex-row items-center justify-start xl:flex-col xl:items-start gap-6 text-lg m-6 mt-24 lg:mt-20 xl:mt-0">
        {selectedLinks.map((link, index) => {
          const isActive = normalizedPathname === link.href;

          return (
            <Link
              key={index}
              href={link.href}
              className={`text-zinc-800 hover:text-primary-color font-bold text-base ${isActive ? "!text-primary-color" : ""}`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
