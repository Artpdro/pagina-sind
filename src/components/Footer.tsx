import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold">SINDNORTE</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest opacity-70">
              Sindicato Empresarial do Comércio
            </p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              O SINDNORTE – Sindicato das Empresas do Comércio e Serviços do Eixo Norte, fundado em 1999, é presidido por Milton Tavares de Melo Junior. Com sede em Paulista e unidades em Olinda e Igarassu, a entidade atua na representação do setor nos municípios de Olinda, Paulista, Abreu e Lima, Igarassu, Itapissuma e Ilha de Itamaracá.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Navegação</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Início", path: "/" },
                { label: "Quem Somos", path: "/quem-somos" },
                { label: "Serviços", path: "/servicos" },
                { label: "Convênios", path: "/convenios" },
                { label: "Notícias", path: "/noticias" },
                { label: "Contato", path: "/contato" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 transition-opacity hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-80">Rua Epitácio Pessoa, 04, Centro, Paulista – PE</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-80">(81) 3371-8119</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-80">contato@sindnorte.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-80">Seg–Sex: 07:30 – 17:00</span>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Parceiros</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "Fecomércio PE", url: "http://fecomercio-pe.com.br/site/" },
                { name: "SESC PE", url: "https://www.sescpe.org.br/" },
                { name: "SENAC PE", url: "http://www.pe.senac.br/" },
                { name: "CNC", url: "https://www.portaldocomercio.org.br/" },
              ].map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
                  >
                    {p.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} SINDNORTE – Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
