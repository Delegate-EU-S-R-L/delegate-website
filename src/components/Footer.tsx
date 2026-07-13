import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-secondary/40 pt-0 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <hr className="border-t border-border mb-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center space-y-1.5 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">{t.footer.company}</p>
        <p>{t.footer.vat}</p>
        <p>{t.footer.address}</p>
        <p>
          {t.footer.pecLabel}{" "}
          <a href="mailto:delegateeusrl@pec.it" className="hover:text-foreground transition-colors">
            delegateeusrl@pec.it
          </a>
        </p>
        <p className="pt-2">{t.footer.cciaa}</p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Delegate. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
