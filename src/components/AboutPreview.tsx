import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { value: "1999", label: "Ano de Fundação" },
  { value: "6", label: "Municípios Atendidos" },
  { value: "25+", label: "Anos de Atuação" },
];

const AboutPreview = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Quem Somos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            O SINDNORTE – Sindicato das Empresas no Comércio e Serviços do Eixo Norte é uma Entidade Sindical fundada em 1999, com sede em Paulista – PE.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Filiado à Fecomércio – PE, responsável pela administração regional do SENAC e SESC, o sindicato atua na defesa dos direitos e interesses do comércio na região metropolitana norte do Recife.
          </p>
          <Button variant="default" className="mt-6" asChild>
            <Link to="/quem-somos">
              Conheça nossa história
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center border border-border bg-card p-6 text-center shadow-card"
            >
              <span className="font-display text-3xl font-extrabold text-primary">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
