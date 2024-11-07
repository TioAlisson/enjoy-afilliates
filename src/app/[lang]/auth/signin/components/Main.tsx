interface MainProps {
    dict: any;
}

import Image from "next/image";
import LogoEnjoy from "@/public/assets/img/logo-white-enjoytix.png";
import FormLogin from "./FormLogin";


export default function Main({ dict }: MainProps) {
    return (
        <main className="img-login xm:h-[100vh] 2xl:h-[85vh] flex justify-center overflow-x-clip">
            <div className="grid grid-cols-12 items-center gap-8 pt-12 pb-8">
                <div className="hidden lg:flex lg:col-span-6 justify-end lg:pb-28 ">
                    <div>
                        <Image
                            src={LogoEnjoy}
                            alt="Logo Enjoy"
                            className="w-[350px] h-auto"
                        />
                        <p className="text-white mt-6 w-96">
                            {dict.signin.textEnjoy}
                        </p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <FormLogin dict={dict} />
                </div>
            </div>
        </main>
    );
}
