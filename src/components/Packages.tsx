import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Packages = () => {
  const { t } = useLanguage();
  return (
    <section id="pacchetti" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {t.packages.title}
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          {t.packages.subtitle}
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package 1 */}
          <div className="bg-card border-2 border-emerald-200 rounded-2xl p-8 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-4">
              {t.packages.pkg1Badge}
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              {t.packages.pkg1Desc}
            </p>
            <ul className="space-y-3 flex-1">
              {t.packages.pkg1Features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-secondary/60 rounded-xl text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">{t.packages.pkg1HowTitle}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span>{t.packages.pkg1Step1}</span>
                <ArrowRight className="h-3 w-3" />
                <span>{t.packages.pkg1Step2}</span>
                <ArrowRight className="h-3 w-3" />
                <span className="font-medium text-foreground">{t.packages.pkg1Step3}</span>
              </div>
            </div>
            <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              <a href="#contatto">{t.packages.cta}</a>
            </Button>
          </div>

          {/* Package 2 */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-bl-xl">
              {t.packages.pkg2Recommended}
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold w-fit mb-4">
              {t.packages.pkg2Badge}
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              {t.packages.pkg2Desc}
            </p>
            <ul className="space-y-3 flex-1">
              {t.packages.pkg2Features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-secondary/60 rounded-xl text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">{t.packages.pkg2HowTitle}</p>
              <div className="space-y-1">
                <p>{t.packages.pkg2A}</p>
                <p>{t.packages.pkg2B}</p>
                <p>{t.packages.pkg2C}</p>
              </div>
              <p className="mt-2 font-medium text-foreground">
                {t.packages.pkg2Bottom}
              </p>
            </div>
            <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              <a href="#contatto">{t.packages.cta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
