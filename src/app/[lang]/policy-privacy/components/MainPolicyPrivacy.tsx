interface MainPolicyPrivacyProps {
    dict: any;
}

import PolicyPrivacy from "./PolicyPrivacy";

export default function MainPolicyPrivacy({ dict }: MainPolicyPrivacyProps) {
    return (
        <main className="mt-[20vh] xm:mt-[15vh] 2xl:h-[65vh] 2xl:mb-[7.5vh] ">
            <div className="bg-primary-color py-32">

            </div>
            <div className="bg-white shadow-md rounded-xl -mt-40 mb-20 lg:-mt-32 py-8 border max-w-[1240px] mx-auto w-11/12 px-8 2xl:overflow-y-scroll h-full ">
                <div className="py-12">
                    <h1 className="text-2xl text-center font-semibold">{dict.policyPrivacy.title}</h1>
                    <span className="block text-center text-muted-foreground pt-6 pb-16">{dict.policyPrivacy.subtitle}</span>
                </div>
                <PolicyPrivacy dict={dict} />
            </div>
        </main>
    );
}