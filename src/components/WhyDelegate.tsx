import { Zap, Heart, Shield, Target, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Veloce", desc: "Il tuo sito è online in pochi giorni, non mesi." },
  { icon: Heart, title: "Semplice", desc: "Niente complicazioni. Solo quello che serve." },
  { icon: Shield, title: "Senza pensieri", desc: "Ci occupiamo noi di tutto, dalla A alla Z." },
  { icon: Target, title: "Per attività reali", desc: "Pensato per PMI e professionisti, non aziende tech." },
  { icon: MessageCircle, title: "Comunicazione diretta", desc: "Parli sempre con una persona, non con un bot." },
];

const WhyDelegate = () => (
  <section className="py-20 md:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Perché Delegate
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
