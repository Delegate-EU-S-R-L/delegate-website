import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, CheckCircle } from "lucide-react";
import motoredirettoImg from "@/assets/motorediretto.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base">
              <a href="#contatto">{t.hero.ctaPrimary}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base">
              <a href="#esempi">{t.hero.ctaSecondary}</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-delay-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Globe className="h-4 w-4 text-primary" />
              {t.hero.block1Title}
            </div>
            <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
              <img
                src={motoredirettoImg}
                alt={t.hero.block1Alt}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MessageCircle className="h-4 w-4 text-primary" />
              {t.hero.block2Title}
            </div>
            <div className="rounded-xl border border-border bg-card shadow-md p-5 space-y-4">
              <div className="space-y-3">
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-foreground">
                  {t.hero.chat1}
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-foreground">
                  <p>{t.hero.chatZone}</p>
                  <p>{t.hero.chatJob}</p>
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-foreground">
                  {t.hero.chat3}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {t.hero.chatResult}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground max-w-xl mx-auto animate-fade-in-delay-2">
          {t.hero.support}
        </p>
      </div>
    </section>
  );
};

export default Hero;
