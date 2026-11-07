"use client";
import Button from "@/components/button";

export default function Home() {
  return (
    <section className="w-full bg-sage">
      <small className="text-link font -semibold before:w-6 before:h-1 rounded-sm before:bg-ochre mr-2.5 align-middle">
        A space to understand and move forward
      </small>
      <article>
        <article>
          <h1>You don’t have to work through difficult feelings alone.</h1>
          <p>
            Taking the first step towards therapy can feel difficult. We offer
            thoughtful, evidence-based support to help you understand what
            you’re experiencing and find a way forward.
          </p>
          <article>
            <Button
              color="brand"
              border="brand"
              text="brand-ink"
              onClick={() => {}}
            >
              Book an initial consultation
            </Button>
            <Button
              color="brand-ink"
              border="brand-ink"
              text="brand"
              onClick={() => {}}
            >
              Explore how we can help
            </Button>
          </article>
          <ul>
            <li className="before:content-'\2713'">
              <span></span>Confidential support
            </li>
            <p>Evidence-based treatment</p>
            <article>
              <p>Qualified therapist</p>
            </article>
          </ul>
        </article>
        <figure>
          {/* <Image
            src=""
            alt="A therapist and a client talking in a bright, calm room"
          /> */}

          <figcaption>A thoughtful, confidential space to talk.</figcaption>
        </figure>
      </article>
    </section>
  );
}
