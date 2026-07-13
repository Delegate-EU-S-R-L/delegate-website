import { MessageCircle, PenTool, Rocket, Users, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "We talk", desc: "You tell us about your business and what you need." },
  { icon: PenTool, title: "We build the site", desc: "We design it around your business." },
  { icon: Rocket, title: "We take it live", desc: "Your site is ready and visible to everyone." },
  { icon: Users, title: "Customers find you", desc: "They get in touch easily through your site." },
  { icon: CheckCircle, title: "All under control", desc: "Manage enquiries without any confusion." },
];

const HowItWorks = () => (
  <section id="come-funziona" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        How it works
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Five simple steps. No complications.
      </p>

      <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 flex-1 text-center relative">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="md:text-center">
              <div className="text-xs font-semibold text-primary mb-1">Step {i + 1}</div>
              <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
