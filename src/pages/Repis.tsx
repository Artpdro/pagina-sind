import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, ExternalLink, FileText, Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Repis = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-primary-foreground/10">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  REPIS
                </h1>
                <p className="mt-1 text-base text-primary-foreground/80">
                  Regime Especial de Piso Salarial
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-4xl">
            <div className="grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h2 className="font-display text-xl font-bold text-foreground">O que é o REPIS?</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  O Regime Especial de Piso Salarial (REPIS) está previsto na Convenção Coletiva de Trabalho para dar tratamento diferenciado e favorecido às Microempresas (ME's) e Empresas de Pequeno Porte (EPP's), definidas pela Lei Complementar nº 123/06, que instituiu o Simples Nacional.
                </p>

                <h3 className="mt-6 font-display text-base font-bold text-foreground">Como Funciona?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Na prática, as empresas que aderirem ao REPIS poderão praticar valores de pisos salariais diferenciados daqueles praticados pelas demais empresas, não enquadradas na Lei do Simples, bem como a desobrigação do pagamento da ajuda alimentação.
                </p>

                <ul className="mt-4 space-y-2">
                  {["Exclusivo para ME e EPP", "Pisos salariais diferenciados", "Desobrigação de ajuda alimentação", "Previsto na Convenção Coletiva", "Respaldo pela Lei Complementar nº 123/06"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3 md:col-span-2"
              >
                <div className="border border-border bg-card p-5 shadow-card">
                  <h3 className="font-display text-base font-bold text-card-foreground">Ações Rápidas</h3>
                  <div className="mt-3 space-y-2">
                    <Button className="w-full" asChild>
                      <a href="https://repis.bubbleapps.io/version-test" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Solicitar REPIS
                        <ExternalLink className="ml-auto h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://repisconsulta.bubbleapps.io/version-test" target="_blank" rel="noopener noreferrer">
                        <Search className="mr-2 h-4 w-4" />
                        Consultar Certificado
                        <ExternalLink className="ml-auto h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://www.sindnorte.com.br/_files/ugd/6d1098_a2b275a837cf415b817392ca9f306b9d.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Baixar Formulário
                        <ExternalLink className="ml-auto h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
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

export default Repis;
