
import { Input } from "@/components/ui/input"
import Image from "next/image";

import IconSearch from "@/public/assets/icon/icon-search.svg"
export default function Search() {
    return (
        <div className="flex border border-zinc-400 bg-[#ECECEC] p-4 py-1 lg:py-2 my-5 xm:my-10 lg:my-5 rounded-md ">
            <Image
                src={IconSearch}
                alt="Icon Search"
            />
            <Input
                className="focus-visible:ring-transparent shadow-transparent border-none text-lg font-semibold"
                placeholder="Search"
                id="dashboard-search"
            />
        </div>
    );
}