interface FormProfileProps {
    dict: any
}

import InputProfile from "./InputProfile";

export default function FormProfile({ dict }: FormProfileProps) {
    const idiomas = [
        { value: 'pt', label: 'Português' },
        { value: 'en', label: 'Inglês' }
    ];
    const formProfile = [
        { label: dict.profile.firstName, htmlFor: "name", name: "name", type: "text", id: "name" },
        { label: dict.profile.lastName, htmlFor: "lastName", name: "lastName", type: "text", id: "lastName" },
        { label: dict.profile.dateOfBirth, htmlFor: "birth", name: "birth", type: "date", id: "birth" },
        { label: dict.profile.mobileNumber, htmlFor: "number", name: "number", type: "phone", id: "number" },
        { label: dict.profile.country, htmlFor: "country", name: "country", type: "select", id: "country" },
        { label: dict.profile.city, htmlFor: "city", name: "city", type: "text", id: "city" },
        { label: dict.profile.preferredLanguage, htmlFor: "language", name: "language", type: "select", id: "language", options: idiomas },
        { label: dict.profile.influencerCode, htmlFor: "code", name: "code", type: "text", id: "code" },

    ];
    return (
        <form action="" className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {formProfile.map((field, index) => (
                <InputProfile
                    key={index}
                    label={field.label}
                    htmlFor={field.htmlFor}
                    name={field.name}
                    type={field.type}
                    id={field.id}
                    options={field.options}
                />
            ))}
        </form>
    );
}