const Footer = () => (
  <footer className="bg-secondary/40 pt-0 pb-10">
    {/* Thin separator line */}
    <div className="container mx-auto px-4 lg:px-8">
      <hr className="border-t border-border mb-10" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 text-center space-y-1.5 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Delegate S.r.l.</p>
      <p>C.F./P.IVA: 02826580025</p>
      <p>Corso Vercelli 82, 13045 Gattinara (VC), Italia</p>
      <p>
        PEC:{" "}
        <a href="mailto:delegateeusrl@pec.it" className="hover:text-foreground transition-colors">
          delegateeusrl@pec.it
        </a>
      </p>
      <p className="pt-2">
        CCIAA: Monte Rosa Laghi Alto Piemonte • Capitale sociale: € 10.000 i.v.
      </p>
    </div>

    <div className="container mx-auto px-4 lg:px-8 mt-8 text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Delegate. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

export default Footer;
