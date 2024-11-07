interface SectionSignupProps {
    dict: any;
}

interface SectionProps {
    title: string;
    content: string[];
}

const Section = ({ title, content }: SectionProps) => (
    <div className="pb-6">
        <h2 className="font-semibold pb-3 pt-6">{title}</h2>
        {content.map((event, index) => (
            <h3 key={index} className="py-4 text-zinc-800" dangerouslySetInnerHTML={{ __html: event }} />
        ))}
    </div>
);

export default function TermsAndConditions({ dict }: SectionSignupProps) {

    const sections = [
        { title: dict.terms.applyingProgram, content: [dict.terms.subtitleApplyingProgram] },
        { title: dict.terms.promotingEvent, content: [dict.terms.promotingEvent1, dict.terms.promotingEvent2, dict.terms.promotingEvent3, dict.terms.promotingEvent4, dict.terms.promotingEvent5, dict.terms.promotingEvent6, dict.terms.promotingEvent7, dict.terms.promotingEvent8, dict.terms.promotingEvent9, dict.terms.promotingEvent10, dict.terms.promotingEvent11] },
        { title: dict.terms.trackingCommissions, content: [dict.terms.trackingCommissions1, dict.terms.trackingCommissions2, dict.terms.trackingCommissions3, dict.terms.trackingCommissions4, dict.terms.trackingCommissions5, dict.terms.trackingCommissions6, dict.terms.trackingCommissions7] },
        { title: dict.terms.payingCommissions, content: [dict.terms.payingCommissions1, dict.terms.payingCommissions2, dict.terms.payingCommissions3, dict.terms.payingCommissions4, dict.terms.payingCommissions5, dict.terms.payingCommissions6, dict.terms.payingCommissions8, dict.terms.payingCommissions9] },
        { title: dict.terms.relationship, content: [dict.terms.relationship1, dict.terms.relationship2, dict.terms.relationship3] },
        { title: dict.terms.restrictions, content: [dict.terms.restrictions1, dict.terms.restrictions2] },
        { title: dict.terms.terminations, content: [dict.terms.terminations1] },
        { title: dict.terms.stripeTerms, content: [dict.terms.stripeTerms1] },
    ];

    return (
        <div className="container mx-auto py-16">
            <h2 className="font-semibold">{dict.terms.influencerProgram}</h2>
            <p className="pt-12 pb-8 text-zinc-800">{dict.terms.subtitleInfluencerProgram}</p>
            {sections.map((section, index) => (
                <Section key={index} title={section.title} content={section.content} />
            ))}
            <h3 className="pt-8">{dict.terms.end}</h3>
        </div>
    );
}
