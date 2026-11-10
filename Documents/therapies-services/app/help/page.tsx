import Card from "@/components/card";
import CardSummary from "@/components/card-summary";

export default function HelpPage() {
  return (
    <section>
      <section className="w-full  bg-bg p-[clamp(10vw,20px,6vw)]">
        <h2 className="--tracking-[0.01em]">How we can help</h2>
        <p>
          Many people find that more than one difficulty overlaps. If you’re not
          sure where you fit, that’s fine. We can work it out together.
        </p>
        <article className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card
            title="Anxiety"
            info={"When worry starts to take up too much space."}
            summary={
              <CardSummary
                description={
                  "Anxiety can affect how you think, feel and respond to everyday situations, and make ordinary responsibilities feel overwhelming."
                }
                lists={}
              />
            }
          />
          <Card
            title="Depression and low mood"
            info={"When everything feels heavier than it used to."}
            summary={<CardSummary description={""} />}
          />
          <Card
            title="Anxiety"
            info={"When worry starts to take up too much space."}
            summary={<CardSummary description={""} />}
          />
          <Card
            title="Anxiety"
            info={"When worry starts to take up too much space."}
            summary={<CardSummary description={""} />}
          />
        </article>
      </section>
      <section className="w-full bg-clay p-[clamp(10vw,20px,6vw)]"></section>
    </section>
  );
}
