import Card from "@/components/card";
import CardSummary from "@/components/card-summary";
import { anxietyLists, moodLists, ocdLists, traumaLists } from "@/data";

export default function HelpPage() {
  return (
    <section>
      <section className="w-full bg-bg py-[4vw] grid gap-[0.6em] px-[10vw]">
        <h2 className="--tracking-[0.01em] text-[2.25rem] text-brand  mb-[0.6em]">
          How we can help?
        </h2>
        <p className="mb-4 max-w-[64ch] text-muted text-lg">
          Many people find that more than one difficulty overlaps. If you’re not
          sure where you fit, that’s fine. We can work it out together.
        </p>
        <article className="grid grid-cols-1 md:grid-cols-4 gap-6   ">
          <Card
            id="anxiety"
            title="Anxiety"
            info={"When worry starts to take up too much space."}
            summary={
              <CardSummary
                description={
                  "Anxiety can affect how you think, feel and respond to everyday situations, and make ordinary responsibilities feel overwhelming."
                }
                lists={anxietyLists.map((list, id) => (
                  <li key={id} className="list-disc">
                    {list.details}
                  </li>
                ))}
                conclusion={
                  "Therapy can help you understand these patterns and try different ways of responding. This is not a diagnostic checklist."
                }
              />
            }
          />
          <Card
            id="mood"
            title="Depression and low mood"
            info={"When everything feels heavier than it used to."}
            summary={
              <CardSummary
                description={
                  "Low mood can drain energy, motivation and enjoyment, and make it hard to see a way forward."
                }
                lists={moodLists.map((li, id) => (
                  <li key={id} className="list-disc">
                    {li.details}
                  </li>
                ))}
                conclusion={
                  "Therapy can help you rebuild routines, change unhelpful thinking and reconnect with what matters to you."
                }
              />
            }
          />
          <Card
            id="ocd"
            title="OCD"
            info={"When intrusive thoughts and routines take over."}
            summary={
              <CardSummary
                description={
                  "OCD is more than liking things tidy. It can involve unwanted thoughts and urges to do things repeatedly to feel safe."
                }
                lists={ocdLists.map((list, id) => (
                  <li key={id} className="list-disc">
                    {list.details}
                  </li>
                ))}
                conclusion={
                  "Specialist CBT approaches can help you loosen the hold of obsessions and compulsions at a pace you can manage."
                }
              />
            }
          />
          <Card
            id="trauma"
            title="Trauma and PTSD"
            info={"When the past still feels close."}
            summary={
              <CardSummary
                description={
                  "After distressing events, memories and reactions can feel as if they’re happening now."
                }
                lists={traumaLists.map((list, id) => (
                  <li key={id} className="list-disc">
                    {list.details}
                  </li>
                ))}
                conclusion={
                  "Trauma-focused therapy can help you process what happened. You never have to share more than you’re ready to."
                }
              />
            }
          />
        </article>
      </section>
      <section className="w-full  bg-clay py-[4vw] grid gap-[0.6em] px-[10vw]">
        <h2 className="--tracking-[0.01em] text-[2.25rem] text-brand  mb-[0.6em]">
          How therapy can help?
        </h2>
        <p className="mb-4 max-w-[64ch] text-muted text-lg">
          Everyone’s path is different. Progress isn’t always a straight line,
          and we can’t promise a particular outcome, but these are the stages
          many people move through.
        </p>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6   ">
          <Card
            id=""
            icon={1}
            title="Understand"
            info={
              "Make sense of what you’re experiencing and what keeps it going."
            }
          />
          <Card
            id=""
            icon={2}
            title="Explore"
            info={
              "Notice patterns and develop strategies that feel useful to you."
            }
          />
          <Card
            id=""
            icon={3}
            title="Build confidence"
            info={
              "Practice new ways of responding and manage difficulties with more confidence."
            }
          />
        </article>
      </section>
    </section>
  );
}
