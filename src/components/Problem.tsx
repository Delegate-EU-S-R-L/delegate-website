import { Globe, Clock, MessageSquare, UserX } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Globe, Clock, MessageSquare, UserX];

const Problem = () => {
  const { t } = useLanguage();
  return (
    <section id="problema" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {t.problem.title}
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          {t.problem.subtitle}
        </p>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.problem.items.map((p, i) => {
            const Icon = icons[i];
            return (
              <div
                key={p.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;
