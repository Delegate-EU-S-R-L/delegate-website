import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  return (
    <a
      href="https://wa.me/393513317239"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
