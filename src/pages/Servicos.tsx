import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, CalendarCheck, Building2, Scale, Flame, Handshake, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: CalendarCheck,
    title: "Solicitação de Abertura em Feriados",
    description: "Solicite a autorização para funcionamento do seu estabelecimento comercial nos feriados municipais e estaduais.",
    benefits: ["Processo simplificado", "Resposta rápida", "Suporte completo"],
    link: "/abertura-feriados",
  },
  {
    icon: FileText,
    title: "Convenção Coletiva de Trabalho",
    description: "Acesse a CCT atualizada que regulamenta as relações de trabalho para o comércio e serviços do Eixo Norte.",
    benefits: ["CCT sempre atualizada", "Orientação especializada", "Suporte ao empregador"],
    link: "/convencao-coletiva",
  },
  {
    icon: Building2,
    title: "REPIS – Registro de Empresas",
    description: "Vantagem exclusiva para micro e pequenas empresas com condições diferenciadas conforme a Convenção Coletiva.",
    benefits: ["Exclusivo para ME e EPP", "Condições diferenciadas", "Benefícios trabalhistas"],
    link: "/repis",
  },
  {
    icon: Scale,
    title: "Assessoria Jurídica",
    description: "Suporte do nosso núcleo jurídico para questões trabalhistas, comerciais e sindicais.",
    benefits: ["Atendimento personalizado", "Questões trabalhistas", "Orientação preventiva"],
    link: "/assessoria-juridica",
  },
  {
    icon: Flame,
    title: "Alvará do Corpo de Bombeiros",
    description: "Orientação e suporte para obtenção do alvará de funcionamento junto ao Corpo de Bombeiros.",
    benefits: ["Orientação completa", "Documentação necessária", "Acompanhamento"],
    link: "/alvara-bombeiros",
  },
  {
    icon: Handshake,
    title: "Mediação Digital",
    description: "Resolução de conflitos de forma ágil e prática por meio digital.",
    benefits: ["100% digital", "Resolução ágil", "Custos reduzidos"],
    link: "/mediacao-digital",
  },
];

const Servicos = () => {
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
              Serviços
            </motion.h1>
            <p className="mt-3 max-w-2xl text-base text-primary-foreground/80">
              Conheça todos os serviços que o SINDNORTE oferece para apoiar sua empresa.
            </p>
          </div>
        </section>

        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-5xl space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-border bg-card p-4 shadow-card md:p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-lg font-bold text-card-foreground">{service.title}</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-1.5 bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                          <CheckCircle className="h-3 w-3" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors">
                      Saiba mais
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-12">
          <div className="container text-center">
            <h2 className="font-display text-xl font-bold text-foreground">Precisa de algum serviço?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Entre em contato para mais informações.</p>
            <Button size="lg" className="mt-5" asChild>
              <Link to="/contato">
                Fale Conosco
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
