"use client";
import Link from "next/link";
import Button from "./button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/contact");
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-bg px-2 py-2.5 border-b-2 border-line">
      <nav className="w-full relative  min-h-18 h-20 max-w-300 flex items-center justify-evenly font-[head] font-normal mx-auto py-0  px-[clamp(8px,4vw,10px)]">
        <article>
          <Link href="/" className="text-brand font-head font-bold text-xl">
            Talking <span className="block"> Therapies</span>
          </Link>
        </article>
        <menu className="menu hidden md:flex items-center gap-1 ">
          <Link
            href="/"
            className="text-base text-text head px-2 py-2.5 active:border-b-3  active:border-terra active:border-b-md font-semibold"
          >
            Home
          </Link>
          <Link
            href="/help"
            className="text-base text-text head px-2  active:border-b-3  active:border-terra active:border-b-md font-semibold "
          >
            How we can <span className="block">help</span>
          </Link>
          <Link
            href="/approach"
            className="text-base text-text head px-2 active:border-b-3  active:border-terra active:border-b-md font-semibold"
          >
            Our <span className="block">approach</span>
          </Link>
          <Link
            href="/about"
            className="text-base text-text head px-2 py-2.5 active:border-b-3  active:border-terra active:border-b-md font-semibold"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-base text-text head px-2 py-2.5 active:border-b-3  active:border-terra active:border-b-md font-semibold"
          >
            Resources
          </Link>
          <Link
            href="/faq"
            className="text-base text-text head px-2 py-2.5 active:border-b-3  active:border-b-terra active:border-b-md font-semibold"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="text-base text-text head px-2 py-2.5 active:border-b-3  active:border-terra active:border-b-md font-semibold"
          >
            Contacts
          </Link>
        </menu>
        {/* Desktop */}
        <div className="hidden md:flex items-center ">
          <Button
            onClick={handleConsultation}
            color="brand"
            border="brand"
            text="brand-ink"
          >
            Book{" "}
            <span className="grid text-left mx-1">
              an <span> initial</span>
            </span>
            consultation
          </Button>
        </div>

        {/* Mobile */}
        <div className=" md:hidden ">
          <Button
            onClick={handleConsultation}
            color="brand"
            border="brand"
            text="brand-ink"
          >
            Book <span className="block">consultation</span>
          </Button>
        </div>
        <div className="flex md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            color="bg"
            border="brand"
            text="brand"
          >
            Menu
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex md:hidden">
          <section className="menu absolute w-full bg-sage left-0 right-0 top-20">
            <menu className=" w-full flex flex-col gap-1 h-auto px-2 py-2.5 ">
              <Link
                href="/"
                className="text-base text-text head px-2 py-2.5 active:border-b-3 active:py-2 active:border-b-terra active:border-b-md font-semibold"
              >
                Home
              </Link>
              <Link
                href="/help"
                className="text-base text-text head px-2 py-2.5 active:border-b-3 active:py-2  active:border-b-terra active:border-b-md font-semibold"
              >
                How we can help
              </Link>
              <Link
                href="/approach"
                className="text-base text-text head px-2 py-2.5 active:border-b-3 active:py-2  active:border-b-terra active:border-b-md font-semibold"
              >
                Our approach
              </Link>
              <Link
                href="/about"
                className="text-base text-text head px-2 py-2.5 active:border-b-3 active:py-2  active:border-b-terra active:border-b-md font-semibold"
              >
                About
              </Link>
              <Link
                href="/resources"
                className="text-base text-text head px-2 py-2.5 active:border-b-3 active:py-2  active:border-b-terra active:border-b-md font-semibold"
              >
                Resources
              </Link>
              <Link
                href="/faq"
                className="text-base text-text head px-2 py-2.5 active:border-b-3 active:py-2  active:border-b-terra active:border-b-md font-semibold"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="text-base text-text head px-2 py-2.5  font-semibold"
              >
                Contacts
              </Link>
            </menu>
          </section>
        </div>
      )}
    </header>
  );
}
