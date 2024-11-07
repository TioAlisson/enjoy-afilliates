interface PolicyPrivacyProps {
    dict: any;
}

interface SectionProps {
    title: string;
    content: string[];
}

const Section = ({ title, content }: SectionProps) => (
    <div className="pb-12">
        <div className="flex items-center gap-2 pb-5">
            <span className="block min-w-6 min-h-6 rounded-full bg-primary-color"></span>
            <h2 className="font-semibold text-xl">{title}</h2>
        </div>
        {content.map((event, index) => (
            <p key={index} className="py-3">{event}</p>
        ))}
    </div>
);

export default function PolicyPrivacy({ dict }: PolicyPrivacyProps) {
    const sections = [
        { title: dict.policyPrivacy.introduction, content: [dict.policyPrivacy.introduction1, dict.policyPrivacy.introduction2] },
        { title: dict.policyPrivacy.personalData, content: [dict.policyPrivacy.personalData1, dict.policyPrivacy.personalData2, dict.policyPrivacy.personalData3, dict.policyPrivacy.personalData4] },
        { title: dict.policyPrivacy.dataAutomatically, content: [dict.policyPrivacy.dataAutomatically1, dict.policyPrivacy.dataAutomatically2, dict.policyPrivacy.dataAutomatically3] },
        { title: dict.policyPrivacy.marketing, content: [dict.policyPrivacy.marketing1, dict.policyPrivacy.marketing2] },
        { title: dict.policyPrivacy.lawful, content: [dict.policyPrivacy.lawful1, dict.policyPrivacy.lawful2] },
        { title: dict.policyPrivacy.weShare, content: [dict.policyPrivacy.weShare1, dict.policyPrivacy.weShare2] },
        { title: dict.policyPrivacy.weHold, content: [dict.policyPrivacy.weHold1] },
        { title: dict.policyPrivacy.cookies, content: [dict.policyPrivacy.cookies1, dict.policyPrivacy.cookies2, dict.policyPrivacy.cookies3] },
        { title: dict.policyPrivacy.security, content: [dict.policyPrivacy.security1, dict.policyPrivacy.security2] },
        { title: dict.policyPrivacy.lawfulProcessing, content: [dict.policyPrivacy.lawfulProcessing1, dict.policyPrivacy.lawfulProcessing2] },
        { title: dict.policyPrivacy.yourRights, content: [dict.policyPrivacy.yourRights1, dict.policyPrivacy.yourRights2, dict.policyPrivacy.yourRights3, dict.policyPrivacy.yourRights4] },
        { title: dict.policyPrivacy.retention, content: [dict.policyPrivacy.retention1, dict.policyPrivacy.retention2, dict.policyPrivacy.retention3] },
        { title: dict.policyPrivacy.general, content: [dict.policyPrivacy.general1, dict.policyPrivacy.general2, dict.policyPrivacy.general3] },
    ];

    return (
        <section>
            <div className="pb-20">
                <div className="flex items-center gap-2 pb-5">
                    <span className="block min-w-6 min-h-6 rounded-full bg-primary-color"></span>
                    <h2 className="font-semibold text-xl">{dict.policyPrivacy.introduction}</h2>
                </div>
                {sections[0].content.map((event, index) => (
                    <p key={index} className="py-3">{event}</p>
                ))}
            </div>
            {sections.slice(1).map((section, index) => (
                <Section key={index} title={section.title} content={section.content} />
            ))}
        </section>
    );
}
