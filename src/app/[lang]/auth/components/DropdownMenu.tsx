"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import IconBrazil from "@/public/assets/icon/icon-brazil.svg"
import IconUnited from "@/public/assets/icon/icon-united-kingdom.svg"

import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Dropdown() {
    const pathname = usePathname() // Hook para obter o caminho atual da URL.

    // Determina o idioma atual com base na URL.
    const currentLang = pathname.includes('pt-BR') ? 'pt-BR' : 'en-US';
    
    // Define o ícone atual com base no idioma.
    const currentIcon = currentLang === 'pt-BR' ? IconBrazil : IconUnited;

    // Define o texto do rótulo com base no idioma atual.
    const labelText = currentLang === 'pt-BR' ? 'Escolha sua linguagem' : 'Choose Language';

    // Função para mudar o idioma ao clicar em um item do menu.
    const handleLanguageChange = (lang: string) => {
        // Substitui a parte do idioma na URL atual.
        const newPath = pathname.replace(/^\/(en-US|pt-BR)/, `/${lang}`);
        window.location.href = newPath;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus-visible:border-none">
                <Button variant="defaultPrimary" className="focus-visible:border-none">
                    <Image
                        src={currentIcon} // Usa o ícone atual determinado anteriormente.
                        alt={`Icon ${currentLang === 'pt-BR' ? 'Brazil' : 'United Kingdom'}`}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-54">
                <DropdownMenuLabel>
                    {labelText} 
                    {/* // Exibe o texto do rótulo baseado no idioma atual. */}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="en" className="cursor-pointer" onClick={() => handleLanguageChange('en-US')}>
                        <Image
                            src={IconUnited}
                            alt="Icon United" 
                            className="cursor-pointer"
                        />
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="br" className="cursor-pointer" onClick={() => handleLanguageChange('pt-BR')}>
                        <Image
                            src={IconBrazil}
                            alt="Icon Brazil" 
                        />
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
