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
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <CalendarCheck className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Solicitação de Abertura em Feriados
                </h1>
                <p className="mt-2 text-lg text-primary-foreground/80">
                  Solicite a autorização para funcionamento nos domingos e feriados
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 className="font-display text-xl font-bold text-card-foreground">
                    Sobre a Solicitação
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    De acordo com a Convenção Coletiva de Trabalho (CCT), as empresas podem requerer a abertura em domingos e feriados. A solicitação pode ser feita pelo sócio ou pelo contador da empresa através do formulário online.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="font-display text-lg font-bold text-foreground">
                Acesse o formulário de solicitação
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clique no botão abaixo para acessar o sistema de solicitação.
              </p>
              <Button size="lg" className="mt-6" asChild>
                <a href="https://repis.bubbleapps.io/version-test/abertfer" target="_blank" rel="noopener noreferrer">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Solicitar Abertura em Feriados
                  <ExternalLink className="ml-2 h-4 w-4" />
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
