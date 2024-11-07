interface SectionSignupProps {
  dict: any;
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectSingup({ dict }: SectionSignupProps) {
  return (
    <div>
      <Select>
        <label>{dict.signup.selectSignup}</label>
        <SelectTrigger className="mb-2">
          <SelectValue placeholder="UK & EU" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="uk-eu">UK & EU</SelectItem>
          <SelectItem value="usa">USA</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}