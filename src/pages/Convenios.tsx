import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Heart, ShoppingBag, Briefcase, ExternalLink } from "lucide-react";

const partners = [
  {
    icon: GraduationCap,
    name: "SENAC PE",
    description: "Cursos profissionalizantes e de qualificação para o comércio. Empresas associadas ao SINDNORTE têm acesso a condições especiais.",
    url: "http://www.pe.senac.br/",
  },
  {
    icon: Heart,
    name: "SESC PE",
    description: "Saúde, cultura, lazer e assistência social para trabalhadores do comércio e seus dependentes.",
    url: "https://www.sescpe.org.br/",
  },
  {
    icon: Briefcase,
    name: "Fecomércio PE",
    description: "Federação do Comércio de Bens, Serviços e Turismo do Estado de Pernambuco. Órgão de representação superior.",
    url: "http://fecomercio-pe.com.br/site/",
  },
  {
    icon: ShoppingBag,
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
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl"
            >
              Convênios e Parcerias
            </motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Conheça nossos parceiros e os benefícios exclusivos para empresas associadas.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
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
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <partner.icon className="h-6 w-6" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-card-foreground">{partner.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
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
