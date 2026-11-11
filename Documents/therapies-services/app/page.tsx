"use client";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import heroImg from "../public/hero-img.jpg";
import secondHeroImg from "../public/second-hero.jpg";

export default function Home() {
  const router = useRouter();

  const handleConsultation = () => {
    router.push("/contact");
  };
  const handleGetHelp = () => {
    router.push("/help");
  };
  return (
    <section>
      <section className="w-full grid md:grid-cols-2 place-items-center gap-12 bg-bg p-[clamp(10vw,20px,8vw)]">
        <article className="grid gap-3">
          <small className="text-link font-semibold flex items-center text-base">
            <span className="w-6 h-1 rounded-sm bg-ochre mr-2.5"> </span>A space
            to understand and move forward
          </small>
          <h1 className="text-[3.75rem] -bg-conic-0 leading-[1.18] text-brand font-semibold font-head  --tracking-[0.15em]line-clamp-10 ">
            You don’t have to work through difficult feelings alone.
          </h1>
          <p className="text-muted text-4.5 max-w-[64ch] mb-3">
            Taking the first step towards therapy can feel difficult. We offer
            thoughtful, evidence-based support to help you understand what
            you’re experiencing and find a way forward.
          </p>
          <article className="flex flex-col md:flex-row md:items-center gap-4 mt-7 mb-3">
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
            <article className="flex flex-col md:flex-row md:gap-4">
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
        <figure className="aspect-4/3  h-92 rounded-[20px] relative ">
          <Image
            src={heroImg}
            alt="A therapist and a client talking in a bright, calm room"
            className="object-cover w-full relative rounded-[20px] z-8  aspect-4/3"
          />
          <span className="before:content-['']  before:absolute before:bg-sage before:rounded-[28px] before:w-full before:h-92 before:rotate-3 before:inset-6.5"></span>

          <figcaption className="absolute -bottom-1 max-w-63.5 left-3 px-3 py-4 bg-card border-line border font-head text-base p-2 text-brand z-10 rounded-[14px]">
            A thoughtful, confidential space to talk.
          </figcaption>
        </figure>
      </section>
      <section className="w-full grid md:grid-cols-2 place-items-center gap-12 bg-sage p-[clamp(10vw,20px,8vw)]">
        <figure className="aspect-4/3  h-80 rounded-[20px]">
          <Image
            src={secondHeroImg}
            alt="A therapist listening attentively during a session"
            className="object-cover w-full rounded-[20px] aspect-4/3"
          />
        </figure>
        <article className=" gap-3">
          <h2 className="text-[2.25rem] -bg-conic-0 leading-[1.18] text-brand font-semibold font-head  --tracking-[0.1em]line-clamp-10 mb-[0.6em]">
            Finding the right support starts with being heard.
          </h2>
          <p className="text-muted text-4.5 max-w-[64ch] ">
            We believe therapy works best when you feel understood, not judged.
            Sessions are unhurried and confidential, and we move at a pace that
            feels manageable for you.
            <span className="block mt-[1em]">
              We use cognitive behavioral therapy (CBT) and bring warmth and
              curiosity to every conversation. [Replace with your practice’s own
              values and any other approaches you genuinely offer.]
            </span>
          </p>
        </article>
      </section>
    </section>
  );
}
