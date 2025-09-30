interface InputEventProps {
  dict: any;
}

import { Input } from "@/components/ui/input"
import Image from "next/image";

import IconSearch from "@/public/assets/icon/icon-search.svg"
import { SheetFilter } from "./SheetFilter";
export default function InputEvent({dict}: InputEventProps) {

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center text-sm md:text-base bg-[#ECECEC] border border-zinc-300 px-4 py-1 my-12 rounded-3xl outline-none w-full">
        <Image
          src={IconSearch}
          alt="Search Icon"
        />
        <Input
          className="text-sm md:text-base border-none focus-visible:ring-transparent shadow-transparent"
          type="text"
          id="search-event"
          name="search-event"
          placeholder={dict.events.placeholderEvent}
        />
      </div>
      <SheetFilter />
    </div>
  );
}
