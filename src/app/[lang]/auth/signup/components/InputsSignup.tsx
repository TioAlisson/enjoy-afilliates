interface InputSingupProps {
    dict: any;
}

import InputSignup from "./InputSingup";
import SelectSingup from "./SelectSignup";

export default function InputSingup({ dict }: InputSingupProps) {
    const inputFields = [
        { label: dict.InfoSignupInput.inputFields.label1, htmlFor: "name", id: "name", type: "name" },
        { label: dict.InfoSignupInput.inputFields.label2, htmlFor: "lastName", id: "lastName", type: "name" }
    ];

    const otherFields = [
        { label: dict.InfoSignupInput.otherFields.label1, htmlFor: "email", id: "email", type: "email" },
        { label: dict.InfoSignupInput.otherFields.label2, htmlFor: "password", id: "password", type: "password" },
        { label: dict.InfoSignupInput.otherFields.label3, htmlFor: "confirmPassword", id: "confirmPassword", type: "password" }
    ];

    return (
        <div>
            <div className="lg:pe-8 2xl:pe-16">
                <SelectSingup dict={dict} />
            </div>
            <div className="lg:pe-8 2xl:pe-16">
                <div className="grid grid-cols-2 gap-4">
                    {inputFields.map((field) => (
                        <InputSignup
                            key={field.id}
                            label={field.label}
                            htmlFor={field.htmlFor}
                            id={field.id}
                            type={field.type}
                        />
                    ))}
                </div>
                <div>
                    {otherFields.map((field) => (
                        <InputSignup
                            key={field.id}
                            label={field.label}
                            htmlFor={field.htmlFor}
                            id={field.id}
                            type={field.type}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
