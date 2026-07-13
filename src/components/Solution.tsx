import { Building2, List, Phone, Award } from "lucide-react";

const points = [
  { icon: Building2, text: "Presents your business clearly" },
  { icon: List, text: "Showcases your services" },
  { icon: Phone, text: "Lets customers contact you easily" },
  { icon: Award, text: "Improves your professional image online" },
];

const Solution = () => (
  <section id="soluzione" className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        With Delegate you get a simple website that…
      </h2>
      <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {points.map((p) => (
          <div key={p.text} className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-foreground font-medium leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
