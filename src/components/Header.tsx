import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSindnorte from "@/assets/logo-sindnorte.png";
const navLinks = [
  { label: "Início", path: "/" },
  { label: "Quem Somos", path: "/quem-somos" },
  { label: "Serviços", path: "/servicos" },
  { label: "Feriados", path: "/feriados" },
  { label: "Convênios", path: "/convenios" },
  { label: "Notícias", path: "https://www.sindnorte.com.br/eventos", external: true },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={logoSindnorte}
            alt="SINDNORTE PE - Sindicato Empresarial do Sistema Comércio"
            className="h-10 w-auto md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground ${
                  location.pathname === link.path
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:8133718119" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
            <Phone className="h-4 w-4" />
            (81) 3371-8119
          </a>
          <Button asChild>
            <Link to="/contato">Fale Conosco</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 font-body text-sm font-medium text-muted-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 font-body text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <Button asChild className="mt-3 w-full">
            <Link to="/contato" onClick={() => setOpen(false)}>Fale Conosco</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
