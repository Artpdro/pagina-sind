import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Flame, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  "Acesse a Home Page do Corpo de Bombeiros: bombeiros.pe.gov.br",
  'Acesse o ícone do "Portal de Atendimento ao Contribuinte", Acesso aos Serviços Online',
  'Caso não possua Atestado de Regularidade, acesse o serviço: "AVCB Solicitação de Atestado de Vistoria do Corpo de Bombeiros"',
  "Realize o cadastro prévio e acesse novamente o serviço de AVCB",
  'No serviço escolha o menu "Nova solicitação de Vistoria" e preencha todos os campos do processo online',
  "Na cidade que é cobrada Taxa de Bombeiros, o imóvel deve estar com as taxas em dia",
  "Encerre a solicitação e gere a Guia DAE para pagamento da Taxa de Vistoria. A compensação e as atualizações do processo serão informadas por email",
  "Quando processar o pagamento da Taxa de Vistoria será enviado um email informando que o Processo de Fiscalização foi suspenso até encerrar o Processo de Regularidade",
];

const AlvaraBombeiros = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-primary-foreground/10">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Alvará do Corpo de Bombeiros
                </h1>
                <p className="mt-1 text-base text-primary-foreground/80">
                  Passo a passo para regularização e obtenção do alvará
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-4xl">
            <h2 className="font-display text-xl font-bold text-foreground">
              Passo a Passo para Requerer o Alvará
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Siga os passos abaixo para regularização em caso de fiscalização.
            </p>

            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex gap-3 border border-border bg-card p-4 shadow-card"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-card-foreground">{step}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 border-2 border-accent/30 bg-accent/5 p-5"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">Importante</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Todo processo poderá ser feito pela Internet, não havendo necessidade de comparecer em um Quartel do Corpo de Bombeiros. Toda tramitação do processo será informada por email. Ao final, quando for emitido o Atestado de Regularidade, o Processo de Fiscalização será cancelado.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-6">
              <Button size="lg" asChild>
                <a href="http://www.bombeiros.pe.gov.br/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Acessar Site dos Bombeiros
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

export default AlvaraBombeiros;
