"use client"

import * as React from "react"

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
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus-visible:border-none">
                <Button variant="defaultTeste" className="focus-visible:border-none">
                    {/* Box Shadow None */}
                    <Image
                        src={IconUnited}
                        alt="Icon United"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuLabel>
                    Chosse Language
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="en" className="cursor-pointer">
                        <Image
                            src={IconUnited}
                            alt="Icon United"
                            className="cursor-pointer"
                        />
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="br" className="cursor-pointer"><Image
                        src={IconBrazil}
                        alt="Icon Brazil"
                    />
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}