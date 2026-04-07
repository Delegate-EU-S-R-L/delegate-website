const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold">Delegate</span>
          <p className="text-sm opacity-70 mt-1">
            Il modo semplice per avere un sito professionale.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm opacity-70">
          <a href="#problema" className="hover:opacity-100 transition-opacity">Problema</a>
          <a href="#pacchetti" className="hover:opacity-100 transition-opacity">Pacchetti</a>
          <a href="#contatto" className="hover:opacity-100 transition-opacity">Contatti</a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Delegate. Tutti i diritti riservati.
      </div>
    </div>
  </footer>
);

export default Footer;
