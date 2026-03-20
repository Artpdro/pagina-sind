import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Handshake, FileText, Clock, Building2, Shield, GraduationCap, Scale, CreditCard, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  { icon: FileText, title: "Campanha Salarial", description: "Representação forte nas negociações coletivas, garantindo segurança jurídica e equilíbrio nas relações de trabalho." },
  { icon: CreditCard, title: "Adesão ao REPIS", description: "Acesso ao regime diferenciado para micro e pequenas empresas previsto na Convenção Coletiva." },
  { icon: Clock, title: "Banco de Horas", description: "Orientação e suporte para implementação conforme a legislação." },
  { icon: Building2, title: "Funcionamento em Domingos e Feriados", description: "Autorização e orientação para funcionamento regular conforme a Convenção Coletiva." },
  { icon: Shield, title: "Defesa dos Direitos Coletivos", description: "Atuação institucional na defesa das empresas do comércio e serviços." },
  { icon: GraduationCap, title: "Capacitação e Palestras", description: "Eventos, cursos e encontros empresariais para atualização e networking." },
  { icon: Scale, title: "Assessoria Jurídica", description: "Apoio especializado para dúvidas trabalhistas e empresariais." },
  { icon: FileText, title: "Credencial Sesc", description: "Através do Sindnorte, sua empresa emitirá as credenciais Sesc de todos os colaboradores." },
];

const AssociarSe = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <Handshake className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Associe-se ao SINDNORTE
                </h1>
                <p className="mt-2 text-lg text-primary-foreground/80">
                  Fortaleça o seu negócio com suporte, segurança e oportunidades
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-5xl">
            <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-3xl">
              Por que ser associado?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
              Ser associado ao Sindnorte significa ter suporte, segurança e oportunidades para fortalecer o seu negócio.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-card-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-16">
          <div className="container max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">Como se Associar?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Para associar-se e receber imediatamente todos os benefícios, basta a empresa estar sediada na base de abrangência: Olinda, Paulista, Abreu e Lima, Igarassu, Itapissuma e Itamaracá.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href="tel:8133718119" className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                (81) 3371-8119
              </a>
              <span className="hidden text-muted-foreground sm:block">ou</span>
              <a href="tel:5581991748025" className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                (81) 99174-8025
              </a>
            </div>
            <a href="mailto:contato@sindnorte.com.br" className="mt-2 flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              contato@sindnorte.com.br
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.sindnorte.com.br/_files/ugd/6d1098_ddf9fc5ad0664be4b704a2e21d6894b0.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Baixar Formulário
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

export default AssociarSe;
