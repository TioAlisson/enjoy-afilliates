'use client';

import Image from "next/image";
import InfoSignup from "./components/InfoSignup";
import InfoBanner from "../template/InfoBanner";

import LogoEnjoy from "@/public/assets/img/logo-red-enjoytix.png"
import IconForm from "@/public/assets/icon/enjoy-logo-icon.svg"

import { Button } from "@/components/ui/button";
import Link from "next/link";

import data from "@/messages/data.json"

export default function Signup() {

    return (
        <div className="lg:h-screen lg:overflow-hidden bg-red-700">
            <div style={{ '--orange-bg': '29, 29, 31', '--opacity-animate': '0.9' } as any}>
                <InfoBanner />
            </div>
            <div className="grid grid-cols-12 px-4 py-8 xl:px-52 xl:pt-20 xl:pb-44">
                <div className="col-span-12 lg:col-span-5 bg-white">
                    <div className="pt-20 lg:ps-16">
                        <Image
                            src={LogoEnjoy}
                            alt="Logo Enjoy"
                            className="w-64 mx-auto lg:mx-0"
                        />
                        <h2>Compartilhe e ganhe</h2>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 bg-form">
                    <div className="bg-zinc-900/60 p-22 lg:pb-40">
                        <div className="px-6 py-12 lg:py-0 lg:pt-20 lg:ms-16">
                            <Link href="/locale/auth/signin">
                                <Button className="py-6 px-12" variant="red" >
                                    Entrar
                                </Button>
                            </Link>
                            <h2 className="py-8 text-lg text-white font-bold">Você tem amigos ou seguidores que gostam de eventos e shows? <br /> Agora você pode ser pago indicando seus amigos para nossos eventos</h2>
                            <div>
                                {data.InfoSignup.map((item, index) => (
                                    <InfoSignup
                                        key={index}
                                        src={IconForm}
                                        alt={item.alt}
                                        title={item.title}
                                    />
                                ))}
                            </div>
                            <p className="text-base lg:text-xl text-white font-semibold leading-8 py-8">Estamos crescendo rápido e é porque nossos clientes estão espalhando a palavra. Agora queremos retribuir o favor a todos que nos ajudaram. Comece a compartilhar e ser pago hoje! Sing up now!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}