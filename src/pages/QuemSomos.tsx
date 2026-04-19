import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const municipalities = ["Olinda", "Paulista", "Abreu e Lima", "Igarassu", "Itapissuma", "Ilha de Itamaracá"];

const QuemSomos = () => {
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
              Quem Somos
            </motion.h1>
            <p className="mt-3 max-w-2xl text-base text-primary-foreground/80">
              Conheça a história, missão e valores do SINDNORTE.
            </p>
          </div>
        </section>

        <section className="bg-background py-14 md:py-20">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-base leading-relaxed text-foreground">
                O <strong>SINDNORTE – Sindicato das Empresas do Comércio e Serviços do Eixo Norte</strong> – é uma entidade sindical patronal, fundada em outubro de 1999 e devidamente registrada no Ministério do Trabalho sob o nº 46000.000569/00, em 03 de abril de 2001.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Presidido por Milton Tavares de Melo Junior, o SINDNORTE possui sede no município de Paulista e unidades em Olinda e Igarassu, com atuação abrangente nos municípios de Olinda, Paulista, Abreu e Lima, Igarassu, Itapissuma e Ilha de Itamaracá.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A entidade tem como objetivo representar, defender e fortalecer as empresas do comércio e serviços da região, promovendo segurança jurídica, apoio institucional e o desenvolvimento sustentável do setor.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                O SINDNORTE é filiado à Fecomércio-PE, integrante do Sistema Comércio, que reúne sindicatos patronais em todo o estado e é responsável pela administração regional do SESC PE e do SENAC PE. Em âmbito nacional, integra o sistema confederativo representado pela Confederação Nacional do Comércio de Bens, Serviços e Turismo (CNC), fortalecendo sua atuação em defesa dos interesses empresariais.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  text: "Atuar na defesa dos interesses das empresas do comércio e serviços, oferecendo suporte, orientação e soluções que contribuam para a competitividade e o crescimento econômico da região.",
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
                  className="border border-border bg-card p-6 shadow-card"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-foreground">Área de Abrangência</h2>
              <p className="mt-2 text-sm text-muted-foreground">O SINDNORTE atua nos seguintes municípios:</p>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                {municipalities.map((m) => (
                  <div key={m} className="flex items-center gap-2 border border-border bg-card px-4 py-3 shadow-card">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-card-foreground">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
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
