import Image from "next/image";

import LogoForm from "@/public/assets/img/logo-login-form.svg";
import IconGoogle from "@/public/assets/icon/icon-google.svg";
import IconFacebook from "@/public/assets/icon/icon-facebook.svg";
import LogoEnjoytix from "@/public/assets/img/logo-white-enjoytix.png";
import InputLogin from "./InputLogin";
import Link from "next/link";


const styleTextTerms = "text-red-700 font-bold hover:underline cursor-pointer mx-2";

export default function FormLogin() {
    return (
        <div>
            <div className="col-span-12 md:col-span-6 h-full px-2 lg:px-0 flex flex-col items-center lg:items-start justify-center">
                <div className="w-11/12 xm:w-[420px] py-12 bg-white rounded-md">
                    <div className="flex flex-col items-center">
                        <Image
                            src={LogoForm}
                            alt="LogoForm"
                            width={50}
                        />
                        <span className="text-3xl font-bold py-3">Login</span>
                        <div className="flex flex-col sm:flex-row gap-2 text-center">
                            <span className="text-zinc-500/80 font-medium">New User?</span>
                            <Link href="/locale/auth/signup" className="text-red-700 font-bold hover:underline cursor-pointer">Create a new account</Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 mx-auto my-6">
                        <InputLogin
                            type="email"
                            id="email"
                            placeholder="Endereço do e-mail"
                        />
                        <InputLogin
                            type="password"
                            id="password"
                            placeholder="Digite a senha"
                        />
                        <div className="text-zinc-500/80 text-sm flex items-center gap-2 px-2 my-2 mb-4">
                            <span>Forgot password?</span>
                            <Link href="/" className="hover:underline">Recover</Link>
                        </div>
                        <button className="text-white bg-red-700 py-3 rounded-md hover:bg-red-700/90 transition-all ease-in-out duration-500">Next</button>
                    </div>
                    <div className="flex items-center justify-center gap-2 ">
                        <p className="font-semibold text-zinc-600/80">Connect by</p>
                        <Link href="#">
                            <Image
                                src={IconGoogle}
                                alt="Icon Google"
                                width={22}
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={IconFacebook}
                                alt="Icon Facebook"
                                width={26}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col xm:flex-row items-center gap-4 text-white text-xs pt-6 px-2 w sm:w-[520px]">
                    <Image
                        src={LogoEnjoytix}
                        alt="Logo Enjoytix"
                        width={150}
                    />
                    <div className="text-center sm:text-start">
                        <span>By continuing you agree to EnjoyTix</span>
                        <Link href="#" className={styleTextTerms}>
                            Terms & Conditions
                        </Link>
                        <span>and have read the</span>
                        <Link href="#" className={styleTextTerms}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}