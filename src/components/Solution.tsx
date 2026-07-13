import { Building2, List, Phone, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Building2, List, Phone, Award];

const Solution = () => {
  const { t } = useLanguage();
  return (
    <section id="soluzione" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {t.solution.title}
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {t.solution.items.map((text, i) => {
            const Icon = icons[i];
            return (
              <div key={text} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
