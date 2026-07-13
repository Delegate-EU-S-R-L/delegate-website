import { ExternalLink } from "lucide-react";
import motoredirettoImg from "@/assets/motorediretto.png";
import sangiorgiImg from "@/assets/sangiorgi.png";

const cases = [
  {
    name: "MotoreDiretto",
    image: motoredirettoImg,
    desc: "A mobile car maintenance service that needed to receive quick enquiries from customers.",
    why: "Simple structure with WhatsApp front and centre to capture immediate requests.",
    result: "Customers now reach out directly from the site, without confusing phone calls.",
    url: "https://www.motorediretto.com/",
  },
  {
    name: "Sangiorgi Trasporti",
    image: sangiorgiImg,
    desc: "A haulage company that needed a professional online presence.",
    why: "A polished layout designed to convey trust to business clients.",
    result: "A clear online presence and much tidier contact requests.",
    url: "https://sangiorgitrasporti.com/",
  },
];

const CaseStudies = () => (
  <section id="esempi" className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
        Who has already chosen us
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        A few examples of businesses we've helped.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cases.map((c) => (
          <div
            key={c.name}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Screenshot */}
            <img
              src={c.image}
              alt={`Screenshot of the ${c.name} website`}
              className="w-full h-48 object-cover object-top"
              loading="lazy"
            />

            <div className="p-6 space-y-4">
              {/* Project name */}
              <h3 className="text-lg font-bold text-foreground">{c.name}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

              {/* Why it was done this way */}
              <div className="bg-muted/50 rounded-lg p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Why we built it this way
                </span>
                <p className="mt-1 text-sm text-foreground">{c.why}</p>
              </div>

              {/* Result */}
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Result
                </span>
                <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">{c.result}</p>
              </div>

              {/* CTA */}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Visit the site
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
