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
      <body className="min-h-full w-full  flex flex-col">
        <Header />
        <main className="w-full max-w-300 px-2 py-2.5 "> {children}</main>
      </body>
    </html>
  );
}
