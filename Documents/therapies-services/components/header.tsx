"use client";
import Link from "next/link";
import Button from "./button";

export default function Header() {
  const handleOpenMenu = () => {
    console.log("clicked");
  };

  const handleConsultation = () => {
    console.log("navigate to consult");
  };

  return (
    <header className="w-full relative border-b-line  bg-bg px-2 py-2.5">
      <nav className="w-full min-h-18  h-20 max-w-300 flex items-center justify-around gap-3 sticky font-[head] font-normal  ">
        <article>
          <Link href="/" className="text-brand font-head font-bold text-xl">
            Talking Therapies
          </Link>
        </article>
        <menu className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="text-base text-text font-body px-2 py-2.5 active:border-b-2 active:border-terra active:border-b-md"
          >
            Home
          </Link>
          <Link
            href="/help"
            className="text-base text-text font-body px-2  active:border-b-2 active:border-terra active:border-b-md grid"
          >
            How we can <span className="">help</span>
          </Link>
          <Link
            href="/approach"
            className="text-base text-text font-body px-2 active:border-b-2 active:border-terra active:border-b-md grid"
          >
            Our <span>approach</span>
          </Link>
          <Link
            href="/about"
            className="text-base text-text font-body px-2 py-2.5 active:border-b-2 active:border-terra active:border-b-md"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-base text-text font-body px-2 py-2.5 active:border-b-2 active:border-terra active:border-b-md"
          >
            Resources
          </Link>
          <Link
            href="/faq"
            className="text-base text-text font-body px-2 py-2.5 active:border-b-2 active:border-b-terra active:border-b-md"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="text-base text-text font-body px-2 py-2.5 active:border-b-2 active:border-terra active:border-b-md"
          >
            Contacts
          </Link>
        </menu>
        {window.innerWidth > 428 ? (
          <Button
            onClick={handleConsultation}
            color="brand"
            border="brand"
            text="brand-ink"
          >
            Book{" "}
            <span className="grid mx-2">
              an <span></span>initial
            </span>{" "}
            consultation
          </Button>
        ) : (
          <Button
            onClick={handleConsultation}
            color="brand"
            border="brand"
            text="brand-ink"
          >
            Book consultation
          </Button>
        )}
        {window.innerWidth < 428 && (
          <Button
            onClick={handleOpenMenu}
            color="brand-ink"
            border="brand-ink"
            text="brand"
          >
            Menu
          </Button>
        )}
      </nav>

      {window.innerWidth < 428 ? (
        <section className="menu absolute w-full bg-sage left-0 right-0 top-20">
          <menu className=" w-full hidden md:flex flex-col gap-1 h-auto px-2 py-2.5 ">
            <Link
              href="/"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2 active:border-b-terra active:border-b-md"
            >
              Home
            </Link>
            <Link
              href="/help"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2  active:border-b-terra active:border-b-md"
            >
              How we can help
            </Link>
            <Link
              href="/approach"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2  active:border-b-terra active:border-b-md"
            >
              Our approach
            </Link>
            <Link
              href="/about"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2  active:border-b-terra active:border-b-md"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2  active:border-b-terra active:border-b-md"
            >
              Resources
            </Link>
            <Link
              href="/faq"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2  active:border-b-terra active:border-b-md"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-base text-text font-body px-2 py-2.5 active:border-b-2  active:border-b-terra active:border-b-md"
            >
              Contacts
            </Link>
          </menu>
        </section>
      ) : null}
    </header>
  );
}
