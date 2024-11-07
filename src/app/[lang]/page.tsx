import React from "react";
import Link from "next/link";
import HomeLayout from "../HomeLayout";
import { Locale } from "@/config/i18nConfig";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionaries-server-only";

type HomeProps = {
  params: {
    lang: Locale;
  };
};

export default function Home({ params }: HomeProps) {
  const dict = getDictionaryServerOnly(params.lang);

  return (
    <div className="text-4xl h-screen">
      <HomeLayout lang={params.lang}>
        <div className="flex justify-center flex-col mt-12">
          <Link
            className="hover:text-green-400 bg-red-900 text-white p-2 rounded-md"
            href="/dashboard"
          >
            {dict.signin.newUser}
          </Link>
          <Link
            className="hover:text-green-400 bg-blue-900 text-white p-2 rounded-md mt-4"
            href="/auth/signup"
          >
            Page Signup ✅
          </Link>
        </div>
      </HomeLayout>
    </div>
  );
}
