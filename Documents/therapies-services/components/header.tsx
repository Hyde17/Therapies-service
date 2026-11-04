import Link from "next/link";

export default function Header() {
  const handleOpenMenu = () => {
    console.log("clicked");
  };

  return (
    <header className="relative">
      <nav className="w-full min-h-24 max-w-300 h-20 bg-brand flex items-center justify-between gap-3 sticky font-[head] font-normal px-2 py-2.5 ">
        <article>
          <Link href="/" className="text-[brand] font-head font-bold text-xl ">
            Talking Therapies
          </Link>
        </article>
        <menu className="hidden md:flex items-center gap-1 ">
          <Link
            href="/"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-red-500 active:border-b-md"
          >
            Home
          </Link>
          <Link
            href="/help"
            className="text-base text-[text] font-body px-2 active:border-b-2 active:border-red-500 active:border-b-md"
          >
            How we can help
          </Link>
          <Link
            href="/approach"
            className="text-base text-[text] font-body px-2 active:border-b-2 active:border-red-500 active:border-b-md"
          >
            Our approach
          </Link>
          <Link
            href="/about"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-red-500 active:border-b-md"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-red-500 active:border-b-md"
          >
            Resources
          </Link>
          <Link
            href="/faq"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-red-500 active:border-b-md"
          >
            Contacts
          </Link>
        </menu>
        <article>
          <button className="hidden md:flex">
            Book an initial consultation
          </button>
          <button className="flex md:hidden">Book consultation</button>
        </article>
        <article className="flex md:hidden">
          <button>Menu</button>
        </article>
      </nav>
      <section className="absolute w-full bg-[sage] left-0 right-0 top-20">
        <menu className="hidden md:flex flex-col gap-1 h-auto px-2 py-2.5 ">
          <Link
            href="/"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            Home
          </Link>
          <Link
            href="/help"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            How we can help
          </Link>
          <Link
            href="/approach"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            Our approach
          </Link>
          <Link
            href="/about"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            Resources
          </Link>
          <Link
            href="/faq"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="text-base text-[text] font-body px-2 py-2.5 active:border-b-2 active:border-b-red-500 active:border-b-md"
          >
            Contacts
          </Link>
        </menu>
      </section>
    </header>
  );
}
