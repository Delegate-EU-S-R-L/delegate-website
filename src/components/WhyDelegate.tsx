import { Zap, Heart, Shield, Target, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast", desc: "Your site goes live in days, not months." },
  { icon: Heart, title: "Simple", desc: "No complications. Just what you actually need." },
  { icon: Shield, title: "Hassle-free", desc: "We take care of everything, from start to finish." },
  { icon: Target, title: "Built for real businesses", desc: "Designed for SMEs and professionals, not tech companies." },
  { icon: MessageCircle, title: "Direct communication", desc: "You always speak to a real person, not a bot." },
];

const WhyDelegate = () => (
  <section className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Why Delegate
      </h2>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="flex items-start gap-4 p-4">
            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <r.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDelegate;
