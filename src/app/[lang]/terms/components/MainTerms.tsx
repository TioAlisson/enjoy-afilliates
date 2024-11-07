import TermsAndConditions from "./TermsAndConditions";

interface SectionSignupProps {
    dict: any;
}

export default function MainTerms({ dict }: SectionSignupProps) {
    return (
        <main className="mt-[20vh] xm:mt-[15vh] 2xl:mt-[14vh]">
            <div className="bg-primary-color py-20 lg:py-28">
                <h1 className="text-center text-white text-2xl font-semibold">{dict.terms.termsConditions}</h1>
            </div>
            <TermsAndConditions dict={dict} />
        </main>
    );
}