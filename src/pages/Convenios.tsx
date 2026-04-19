import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import logoSenac from "@/assets/logo-senac.png";
import logoSesc from "@/assets/logo-sesc.png";
import logoFecomercio from "@/assets/logo-fecomercio.jpg";
import logoCnc from "@/assets/logo-cnc.png";

const partners = [
  {
    logo: logoSenac,
    name: "SENAC PE",
    description: "Cursos profissionalizantes e de qualificação para o comércio. Empresas associadas ao SINDNORTE têm acesso a condições especiais.",
    url: "http://www.pe.senac.br/",
  },
  {
    logo: logoSesc,
    name: "SESC PE",
    description: "Saúde, cultura, lazer e assistência social para trabalhadores do comércio e seus dependentes.",
    url: "https://www.sescpe.org.br/",
  },
  {
    logo: logoFecomercio,
    name: "Fecomércio PE",
    description: "Federação do Comércio de Bens, Serviços e Turismo do Estado de Pernambuco. Órgão de representação superior.",
    url: "http://fecomercio-pe.com.br/site/",
  },
  {
    logo: logoCnc,
    name: "CNC",
    description: "Confederação Nacional do Comércio – órgão máximo do sistema confederativo da representação sindical do comércio.",
    url: "https://www.portaldocomercio.org.br/",
  },
];

const Convenios = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl"
            >
              Convênios e Parcerias
            </motion.h1>
            <p className="mt-3 max-w-2xl text-base text-primary-foreground/80">
              Conheça nossos parceiros e os benefícios exclusivos para empresas associadas.
            </p>
          </div>
        </section>

        <section className="bg-background py-14 md:py-20">
          <div className="container max-w-5xl">
            <div className="grid gap-4 md:grid-cols-2">
              {partners.map((partner, index) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex flex-col border border-border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center bg-white p-2">
                      <img src={partner.logo} alt={partner.name} className="h-full w-full object-contain" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-card-foreground">{partner.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Convenios;
