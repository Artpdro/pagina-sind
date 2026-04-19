import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Handshake, Video, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MediacaoDigital = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-primary-foreground/10">
                <Handshake className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Mediação Digital
                </h1>
                <p className="mt-1 text-base text-primary-foreground/80">
                  Resolução de conflitos de forma ágil e prática
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-4xl">
            <h2 className="font-display text-xl font-bold text-foreground">Como Funciona?</h2>
            <div className="mt-4 border border-border bg-card p-5 shadow-card">
              <p className="text-sm leading-relaxed text-muted-foreground">
                As partes livremente convencionam que qualquer controvérsia oriunda da convenção coletiva, entre sindicatos e empresa, e entre sindicato e sindicato, poderá ser amigavelmente solucionada através de audiência de conciliação, solicitada ao SINDNORTE através do e-mail{" "}
                <a href="mailto:juridico@sindnorte.com.br" className="font-medium text-primary hover:underline">
                  juridico@sindnorte.com.br
                </a>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                O SINDNORTE informará as partes envolvidas a data e horário da audiência, através de e-mail e/ou WhatsApp. No dia e horário marcado para audiência, o SINDNORTE disponibilizará 10 (dez) minutos antes o link para acesso, com tolerância de 5 (cinco) minutos.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-base font-bold text-foreground">Etapas do Processo</h3>
              <div className="mt-4 space-y-2">
                {[
                  "Solicite a mediação pelo e-mail juridico@sindnorte.com.br",
                  "As partes serão informadas sobre data e horário da audiência",
                  "O link de acesso será enviado 10 minutos antes da audiência",
                  "A audiência é realizada por videoconferência (Google Meet ou Zoom)",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 border border-border bg-card p-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm text-card-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-base font-bold text-foreground">Plataformas Utilizadas</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-4 w-4" />
                    Google Meet
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-4 w-4" />
                    Zoom
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="mailto:juridico@sindnorte.com.br">
                  <Mail className="mr-2 h-4 w-4" />
                  Solicitar Mediação
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

export default MediacaoDigital;
