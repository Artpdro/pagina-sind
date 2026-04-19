import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/sede-sindnorte.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container relative z-10 grid min-h-[480px] items-center gap-8 py-14 md:grid-cols-2 md:py-16 lg:min-h-[540px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <div className="mb-4 inline-flex items-center gap-2 border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
            <Shield className="h-3.5 w-3.5" />
            Desde 1999
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Defendendo os interesses do{" "}
            <span className="text-accent">comércio</span> do Eixo Norte
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 md:text-lg">
            O SINDNORTE representa e fortalece as empresas do comércio e serviços nos municípios de Olinda, Paulista, Abreu e Lima, Igarassu, Itapissuma e Ilha de Itamaracá, atuando com compromisso, responsabilidade e foco no desenvolvimento regional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/servicos">
                Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link to="/quem-somos">Quem Somos</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Comércio no Eixo Norte de Pernambuco"
              className="h-[360px] w-full object-cover lg:h-[420px]"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
    </section>
  );
};

export default HeroSection;
