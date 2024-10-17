import Image from "next/image";
import LogoEnjoy from "@/public/assets/img/logo-white-enjoytix.png";
import FormLogin from "../components/FormLogin";



export default function Main() {
    return (
        <div className="img-login h-[85vh] flex justify-center">
            <div className="grid grid-cols-12 items-center gap-8">
                <div className="hidden lg:flex lg:col-span-6 justify-end lg:pb-28">
                    <div>
                        <Image
                            src={LogoEnjoy}
                            alt="Logo Enjoy"
                            width={350}
                            height={88}
                        />
                        <p className="text-white mt-2">
                            From reggaeton and funk to seminars and <br /> networking events. EnjoyTix puts your <br /> event in front of your customers.
                        </p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}
