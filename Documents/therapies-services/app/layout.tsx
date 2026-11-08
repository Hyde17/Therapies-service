import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Talking Therapies",
  description:
    "Talking Therapies exists to make it easier to ask for psychological support, and to offer it with care, honesty and professional standards.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="font-body h-full antialiased">
      <body className="min-h-full w-full flex flex-col">
        <Header />
        <main className="w-full text-text font-normal text-[1.0625rem] font-body ">
          {children}
        </main>
      </body>
    </html>
  );
}
