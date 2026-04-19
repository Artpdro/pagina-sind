import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Scale, Mail, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Consultoria em questões trabalhistas",
  "Orientação preventiva para empresas",
  "Suporte em negociações coletivas",
  "Análise de contratos e obrigações",
  "Atendimento personalizado para associados",
  "Acompanhamento de processos judiciais",
];

const AssessoriaJuridica = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-primary-foreground/10">
                <Scale className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Assessoria Jurídica
                </h1>
                <p className="mt-1 text-base text-primary-foreground/80">
                  Consultoria jurídica de qualidade para associados
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Consultoria Jurídica</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  O SINDNORTE oferece consultoria jurídica de qualidade a todos os seus associados, contando com uma ampla variedade de serviços para atender de forma rápida, eficiente e segura.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Se você já é associado e precisa de uma consultoria, faça o agendamento para ser atendido.
                </p>
                <ul className="mt-4 space-y-2">
                  {services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-border bg-card p-6 shadow-card"
              >
                <h3 className="font-display text-base font-bold text-card-foreground">Entre em Contato</h3>
                <p className="mt-1 text-sm text-muted-foreground">Agende sua consultoria jurídica:</p>
                <div className="mt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <a href="mailto:juridico@sindnorte.com.br">
                      <Mail className="mr-2 h-4 w-4" />
                      juridico@sindnorte.com.br
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/558192488540" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp: (81) 9248-8540
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AssessoriaJuridica;
