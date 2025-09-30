'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Language = 'pt-BR' | 'en-US';

type LinkItem = {
    name: string;
    href: string;
};

const links: Record<Language, LinkItem[]> = {
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

export default function MenuMobileCustom() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const pathname = usePathname();
    const language = (pathname.split('/')[1] as Language) || 'en-US';
    const normalizedPathname = pathname.replace(`/${language}`, '');
    const selectedLinks = links[language];

    return (
        <div className="flex md:hidden">
            <Button
                className="bg-transparent hover:bg-transparent fixed top-5 right-3 z-50"
                onClick={toggleMenu}
            >
                <div className={`relative w-8 h-6 flex flex-col justify-between items-end cursor-pointer transition-all duration-300 ease-in-out  ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
                    <span className={`w-full h-1 bg-gray-700 transition-all duration-300 ease-in-out transform rounded-xl ${isOpen ? '-rotate-45 translate-y-[10px]' : ''}`}></span>
                    <span className={`h-1 bg-gray-700 transition-all duration-300 ease-in-out rounded-xl ${isOpen ? 'opacity-0 w-full' : 'w-3/4'}`}></span>
                    <span className={`h-1 bg-gray-700 transition-all duration-300 ease-in-out transform rounded-xl  ${isOpen ? 'rotate-45 translate-y-[-10px] w-full' : 'w-2/4'}`}></span>
                </div>
            </Button>

            <div className={`absolute top-0 right-0 ${isOpen ? 'backdrop-blur-sm bg-zinc-600/80 w-full h-screen' : ''}`}
                onClick={() => setIsOpen(false)}
            >
                <div className={`absolute top-0 right-0 bg-white p-6 shadow-lg rounded-md z-40 h-screen transition-all duration-500 !pt-24 ${isOpen ? 'menu menuOpen' : 'menu menuClosed'}`}
                    onClick={(e) => e.stopPropagation()}>
                    <Link href="/" passHref>
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-primary-color w-16 h-16 flex justify-center items-center rounded-full">
                                <span className="text-white text-3xl">A</span>
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl py-1 text-center">Jonatan Rafael</h2>
                                <p className="text-[14px] text-center text-muted-foreground">Jonatan@teste</p>
                            </div>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-6 text-center py-6">
                        {selectedLinks.map((link, index) => {
                            const isActive = normalizedPathname === link.href || (normalizedPathname.startsWith(link.href) && normalizedPathname !== '/');
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`text-lg  hover:text-primary-color font-semibold ${isActive ? "!text-primary-color" : ""}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
