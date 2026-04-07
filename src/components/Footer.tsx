const Footer = () => (
  <footer className="bg-secondary/40 py-14">
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
      <div className="pt-3 space-y-1">
        <p>CCIAA: Monte Rosa Laghi Alto Piemonte</p>
        <p>Capitale sociale: € 10.000 i.v.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
