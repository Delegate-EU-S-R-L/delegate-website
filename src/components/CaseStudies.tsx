import { ExternalLink } from "lucide-react";
import motoredirettoImg from "@/assets/motorediretto.png";
import sangiorgiImg from "@/assets/sangiorgi.png";
import { useLanguage } from "@/i18n/LanguageContext";

const meta = [
  { name: "MotoreDiretto", image: motoredirettoImg, url: "https://www.motorediretto.com/" },
  { name: "Sangiorgi Trasporti", image: sangiorgiImg, url: "https://sangiorgitrasporti.com/" },
];

const CaseStudies = () => {
  const { t } = useLanguage();
  return (
    <section id="esempi" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {t.cases.title}
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          {t.cases.subtitle}
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {meta.map((c, i) => {
            const item = t.cases.items[i];
            return (
              <div
                key={c.name}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <img
                  src={c.image}
                  alt={t.cases.screenshotAlt(c.name)}
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.cases.whyLabel}
                    </span>
                    <p className="mt-1 text-sm text-foreground">{item.why}</p>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {t.cases.resultLabel}
                    </span>
                    <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">{item.result}</p>
                  </div>

                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {t.cases.cta}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
