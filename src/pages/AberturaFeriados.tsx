import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CalendarCheck, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const AberturaFeriados = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-primary-foreground/10">
                <CalendarCheck className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Solicitação de Abertura em Feriados
                </h1>
                <p className="mt-1 text-base text-primary-foreground/80">
                  Solicite a autorização para funcionamento nos domingos e feriados
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-4xl">
            <div className="border border-border bg-card p-4 shadow-card md:p-5">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h2 className="font-display text-lg font-bold text-card-foreground">
                    Sobre a Solicitação
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    De acordo com a Convenção Coletiva de Trabalho (CCT), as empresas podem requerer a abertura em domingos e feriados. A solicitação pode ser feita pelo sócio ou pelo contador da empresa através do formulário online.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="font-display text-base font-bold text-foreground">
                Acesse o formulário de solicitação
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Clique no botão abaixo para acessar o sistema de solicitação.
              </p>
              <Button size="lg" className="mt-5" asChild>
                <a href="https://repis.bubbleapps.io/version-test/abertfer" target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Solicitar Abertura em Feriados
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AberturaFeriados;
