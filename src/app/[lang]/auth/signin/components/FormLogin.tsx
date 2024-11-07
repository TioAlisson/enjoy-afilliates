interface FormLoginProps { dict: any; }

import Image from "next/image";

import LogoForm from "@/public/assets/img/logo-login-form.svg";
import IconGoogle from "@/public/assets/icon/icon-google.svg";
import IconFacebook from "@/public/assets/icon/icon-facebook.svg";
import LogoEnjoytix from "@/public/assets/img/logo-white-enjoytix.png";
import InputLogin from "./InputLogin";
import Link from "next/link";

const styleTextTerms = "text-red-700 font-bold hover:underline cursor-pointer mx-2";

export default function FormLogin({ dict }: FormLoginProps) {
    return (
        <div>
            <div className="col-span-12 md:col-span-6 h-full px-2 lg:px-0 flex flex-col items-center lg:items-start justify-center">
                <div className="w-11/12 lg:w-[420px] py-12 bg-white rounded-md card-login">
                    <div className="flex flex-col items-center">
                        <Image
                            src={LogoForm}
                            alt="LogoForm"
                            className="w-12 h-auto"
                        />
                        <span className="text-3xl font-bold py-3">Login</span>
                        <div className="flex flex-col sm:flex-row gap-2 text-center">
                            <span className="text-zinc-500/80 font-medium">{dict.signin.newUser}</span>
                            <Link
                                href="/auth/signup"
                                className="text-red-700 font-bold hover:underline cursor-pointer"
                                rel="noopener noreferrer">
                                {dict.signin.newAccount}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 mx-auto my-6">
                        <InputLogin
                            type="email"
                            id="email"
                            placeholder={dict.signin.email}
                        />
                        <InputLogin
                            type="password"
                            id="password"
                            placeholder={dict.signin.password}
                        />
                        <div className="text-zinc-500/80 text-sm flex items-center gap-2 px-2 my-2 mb-4">
                            <span>{dict.signin.forgotPassword}</span>
                            <Link
                                href="/"
                                className="hover:underline"
                                rel="noopener noreferrer">
                                {dict.signin.recover}
                            </Link>
                        </div>
                        <Link href="/">
                            <button className="flex justify-center w-full text-white bg-red-700 py-3 rounded-md hover:bg-red-700/90 transition-all ease-in-out duration-500">{dict.signin.btnOpen}</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <p className="font-semibold text-zinc-600/80">{dict.signin.connect}</p>
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={IconGoogle}
                                alt="Icon Google"
                                className="w-6 h-auto"
                            />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={IconFacebook}
                                alt="Icon Facebook"
                                className="w-7 h-auto"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col xm:flex-row items-center gap-4 text-white text-xs pt-12 px-2 sm:w-[520px] terms">
                    <Image
                        src={LogoEnjoytix}
                        alt="Logo Enjoytix"
                        width={150}
                    />
                    <div className="text-center sm:text-start">
                        <span>{dict.signin.TCAgreementOne}</span>
                        <Link href="/terms" className={styleTextTerms}>
                            {dict.signin.TCAgreementTwo}
                        </Link>
                        <span>{dict.signin.TCAgreementThree}</span>
                        <Link href="/policy-privacy" className={styleTextTerms} rel="noopener noreferrer">
                            {dict.signin.TCAgreementFour}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}