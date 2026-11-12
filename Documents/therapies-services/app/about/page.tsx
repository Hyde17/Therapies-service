"use client";
import Button from "@/components/button";
import Card from "@/components/card";

import { aboutData, therapists } from "@/data";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <section className="w-full bg-bg py-[6vw] px-[10vw] grid ">
      <h2 className="--tracking-[0.01em] text-[2.25rem] text-brand mb-[0.6em]">
        About
      </h2>
      <p className="mb-10 max-w-[64ch] text-muted text-lg ">
        Talking Therapies exists to make it easier to ask for psychological
        support, and to offer it with care, honesty and professional standards.
      </p>
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 place-items-center">
        {aboutData.map((abt, id) => (
          <Card key={id} title={abt.title} info={abt.summary} id="" />
        ))}
      </article>
      <article>
        <article>
          {therapists.map((doc) => (
            <article
              key={doc.title}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-center "
            >
              <figure className="aspect-square rounded-[20px] bg-clay text-brand grid place-items-center p-4 font-medium aria-[Placeholder for therapist portrait]">
                {doc.img}
                <figcaption>Therapist portrait</figcaption>
              </figure>
              <article className="grid gap-[0.6em]">
                <h3 className="text-[1.5rem]">Meet the therapist</h3>
                <p className="mb-4 max-w-[64ch]">
                  [{doc.name}] is a [{doc.title}] with experience helping adults
                  with anxiety, depression, OCD and trauma. [{doc.brief}]
                </p>
                <ul className="  pl-10 mb-4">
                  <li className="list-disc font-normal text-[1.0625rem] leading-[1.7] text-text">
                    Qualifications:{doc.qualification}
                  </li>
                  <li className="list-disc font-normal text-[1.0625rem] leading-[1.7] text-text">
                    Registration and memberships: {doc.reg}
                  </li>
                  <li className="list-disc font-normal text-[1.0625rem] leading-[1.7] text-text">
                    Areas of experience:{doc.areas}
                  </li>
                </ul>
                <small className="mb-4">
                  All credentials and experience claims must be verified before
                  publication.
                </small>
                <article>
                  <Button
                    onClick={() => router.push("/contact")}
                    color={"bg"}
                    border={"brand"}
                    text={"brand"}
                  >
                    Arrange an initial consultation
                  </Button>
                </article>
              </article>
            </article>
          ))}
        </article>
      </article>
    </section>
  );
}
