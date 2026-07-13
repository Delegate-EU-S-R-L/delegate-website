import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: Props) => {
  const { lang, setLang, t } = useLanguage();

  const btn = (target: Lang, label: string) => {
    const active = lang === target;
    return (
      <button
        type="button"
        onClick={() => setLang(target)}
        aria-pressed={active}
        aria-label={`${t.languageSwitcher.label}: ${label}`}
        className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
          active
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 border border-border rounded-full px-1 py-0.5 ${className}`}
      role="group"
      aria-label={t.languageSwitcher.label}
    >
      {btn("it", t.languageSwitcher.it)}
      <span className="text-border" aria-hidden="true">|</span>
      {btn("en", t.languageSwitcher.en)}
    </div>
  );
};

export default LanguageSwitcher;
