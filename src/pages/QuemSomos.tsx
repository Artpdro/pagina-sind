import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const municipalities = ["Olinda", "Paulista", "Abreu e Lima", "Igarassu", "Itapissuma", "Itamaracá"];

const QuemSomos = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl"
            >
              Quem Somos
            </motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Conheça a história, missão e valores do SINDNORTE.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg leading-relaxed text-foreground">
                O <strong>SINDNORTE – Sindicato das Empresas no Comércio e Serviços do Eixo Norte</strong> é uma Entidade Sindical, não estatal, fundada em outubro de 1999. Recebeu o registro no Ministério do Trabalho nº 46000.000569/00 em 03/04/2001.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Com sede em Paulista e abrangência nos municípios de Olinda, Paulista, Abreu e Lima, Igarassu, Itapissuma e Itamaracá, o SINDNORTE é filiado à Fecomércio – PE, que reúne 18 sindicatos patronais e é responsável pela administração regional do SENAC e do SESC.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A nível nacional, a Fecomércio-PE integra o Sistema Confederativo da Representação Sindical do Comércio (SICOMÉRCIO), que tem como órgão máximo a Confederação Nacional do Comércio (CNC).
              </p>
            </motion.div>

            {/* Mission & Vision cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  text: "Ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, inclusive em questões judiciais ou administrativas. (Art. 8º C.F.)",
                },
                {
                  icon: Eye,
                  title: "Visão",
                  text: "Ser reconhecido como uma organização sindical de qualidade e vanguarda, contribuindo para o desenvolvimento do comércio e serviços na região.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-8 shadow-card"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Municipalities */}
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground">Área de Abrangência</h2>
              <p className="mt-2 text-muted-foreground">O SINDNORTE atua nos seguintes municípios:</p>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {municipalities.map((m) => (
                  <div key={m} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 shadow-card">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium text-card-foreground">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diretoria CTA */}
            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link to="/diretoria">
                  Conheça a nossa Diretoria
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomos;
