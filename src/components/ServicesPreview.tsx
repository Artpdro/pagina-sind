import { Link } from "react-router-dom";
import { FileText, CalendarCheck, Building2, Scale, Flame, Handshake, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: CalendarCheck,
    title: "Abertura em Feriados",
    description: "Solicite a autorização para funcionamento do seu estabelecimento nos feriados.",
    link: "/abertura-feriados",
  },
  {
    icon: FileText,
    title: "Convenção Coletiva",
    description: "Acesse a Convenção Coletiva de Trabalho atualizada para o comércio.",
    link: "/convencao-coletiva",
  },
  {
    icon: Building2,
    title: "REPIS",
    description: "Registro de empresas de pequeno porte e microempresas com benefícios exclusivos.",
    link: "/repis",
  },
  {
    icon: Scale,
    title: "Assessoria Jurídica",
    description: "Suporte jurídico especializado em questões trabalhistas e comerciais.",
    link: "/assessoria-juridica",
  },
  {
    icon: Flame,
    title: "Alvará de Bombeiros",
    description: "Orientação e suporte para obtenção do alvará junto ao Corpo de Bombeiros.",
    link: "/alvara-bombeiros",
  },
  {
    icon: Handshake,
    title: "Mediação Digital",
    description: "Resolução de conflitos de forma rápida e prática por meio digital.",
    link: "/mediacao-digital",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Oferecemos uma ampla gama de serviços para apoiar o comércio e os serviços do Eixo Norte.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to={service.link}
                className="group flex h-full flex-col border border-border bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
