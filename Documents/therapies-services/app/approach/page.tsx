"use client";

// import approachImg from "@/components/approach-img";
import Button from "@/components/button";
import Card from "@/components/card";
import { feesAndAvailability, therapyPattern } from "@/data";
import { useRouter } from "next/navigation";
// import Image from "next/image";
export default function ApproachPage() {
  const router = useRouter();

  const handleApproach = () => {
    router.push("/approach");
  };

  return (
    <section>
      <section className=" grid grid-cols-1 md:grid-cols-2 w-full  bg-bg py-[4vw] gap-12 px-[10vw] items-center">
        <article>
          <h2 className="--tracking-[1.18] text-[2.25rem] text-brand  mb-[0.6em]">
            Our approach
          </h2>
          <article className="grid gap-[1em]  max-w-[64ch]">
            <p className="mb-4 max-w-[64ch] text-muted text-lg">
              Cognitive behavioural therapy (CBT) is a practical, structured
              talking therapy. It looks at how your thoughts, feelings, body
              sensations and behaviour affect one another, so you can change the
              patterns that keep you stuck.
            </p>
            <p>
              <strong>In sessions</strong> we agree goals together, try
              approaches that fit your difficulty, and review progress
              regularly. You’ll often try small tasks between sessions.
            </p>
            <p>
              <strong>Who it may suit.</strong>
              CBT helps many people, but not everyone, and an initial
              consultation is the place to talk about whether it’s right for
              you.
            </p>
            <article>
              <Button
                onClick={handleApproach}
                color={"brand-ink"}
                border={"brand"}
                text={"brand"}
              >
                What to expect
              </Button>
            </article>
          </article>

          <figure>
            {/* <Image src={approachImg} alt="approach pattern" /> */}
          </figure>
        </article>
      </section>
      <section className=" grid w-full bg-sage py-[4vw]  px-[10vw] ">
        <article>
          <h2 className="--tracking-[1.18] text-[2.25rem] text-brand  mb-[0.6em]">
            Starting therapy doesn’t have to feel complicated.
          </h2>
          <ul className="grid grid-cols-1  md:grid-cols-3  gap-6 ">
            {therapyPattern.map((pattern, id) => (
              <li key={id} className="list-none">
                <Card
                  id={""}
                  title={pattern.title}
                  info={pattern.details}
                  icon={pattern.id}
                />
              </li>
            ))}
          </ul>
          <article></article>
        </article>
        <article>
          <h2 className="--tracking-[1.18] text-[2.25rem] text-brand  mt-10 mb-[0.6em]">
            Fees and availability
          </h2>
          <article className="overflow-x-auto ">
            <table className="w-full rounded-xl overflow-hidden bg-card  border-collapse px-6 py-6">
              <thead className="">
                <tr>
                  <th>Appointment</th>
                  <th>Length</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {feesAndAvailability.map((fee, id) => (
                  <tr key={id} className="font-body font-normal">
                    <td>{fee.appointment}</td>
                    <td>{fee.duration}</td>
                    <td>{fee.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
          <article className="max-w-[64ch] my-4">
            <small
              className="text-[.875rem]
    text-muted"
            >
              Sessions: [online / in person]. Cancellation: [notice period and
              policy]. Payment: [arrangements]. Current availability: [waiting
              time]. Replace every bracketed item with confirmed details.
            </small>
          </article>
          <article>
            <Button
              onClick={() => router.push("/contact  ")}
              color={"brand"}
              border={"brand-ink"}
              text={"card"}
            >
              Enquire about availability
            </Button>
          </article>
        </article>
      </section>
    </section>
  );
}
