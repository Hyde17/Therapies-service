"use client";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/contact");
  };
  const handleGetHelp = () => {
    router.push("/help");
  };
  return (
    <section className="w-full flex flex-col md:flex-row items-center  gap-12  bg-bg p-[clamp(10vw,20px,8vw)] ">
      <article className="grid gap-3">
        <small className="text-link font-semibold flex items-center text-base ">
          <span className="w-6 h-1 rounded-sm bg-ochre mr-2.5"> </span>A space
          to understand and move forward
        </small>
        <h1 className="text-[3.75rem] -bg-conic-0 leading-[1.18] text-brand font-semibold font-head  --tracking-[0.15em]line-clamp-10 ">
          You don’t have to work through difficult feelings alone.
        </h1>
        <p className="text-muted text-4.5 max-w-[64ch] mb-3">
          Taking the first step towards therapy can feel difficult. We offer
          thoughtful, evidence-based support to help you understand what you’re
          experiencing and find a way forward.
        </p>
        <article className="flex flex-col md:flex-row md:items-center  gap-4 mb-3">
          <Button
            color="brand"
            border="brand"
            text="brand-ink"
            onClick={handleConsultation}
          >
            Book an initial consultation
          </Button>
          <Button
            color="brand-ink"
            border="brand"
            text="brand"
            onClick={handleGetHelp}
          >
            Explore how we can help
          </Button>
        </article>
        <ul className="grid ">
          <article className="flex  flex-col  md:flex-row md:gap-4">
            <li className="list-none  ">
              <span className="content-[&#10003;] bg-terra mr-2 fill-terra  "></span>
              Confidential support
            </li>
            <li className="list-none ">
              <span className="content-[&#10003;] bg-terra mr-2  "></span>
              Evidence-based treatment
            </li>
          </article>

          <article>
            <li className="list-none   ">
              <span className="content-[&#10003;] bg-terra mr-2 "></span>
              Qualified therapist
            </li>
          </article>
        </ul>
      </article>
      <figure className="aspect-4/3 border-2 border-terra w-full   h-90 relative">
        <Image
          src=""
          alt="A therapist and a client talking in a bright, calm room"
          className="object-cover w-full rounded-[20px] "
        />

        <figcaption className="absolute -bottom-4.5 max-w-63.5 left-2 px-3 py-4 bg-card border-line border font-head text-base p-2 text-brand">
          A thoughtful, confidential space to talk.
        </figcaption>
      </figure>
    </section>
  );
}
