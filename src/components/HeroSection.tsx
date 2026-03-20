import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-commerce.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container relative z-10 grid min-h-[520px] items-center gap-8 py-16 md:grid-cols-2 md:py-20 lg:min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            <Shield className="h-3.5 w-3.5" />
            Desde 1999
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Defendendo os interesses do{" "}
            <span className="text-accent">comércio</span> do Eixo Norte
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            O SINDNORTE representa e apoia as empresas do comércio e serviços nos municípios de Olinda, Paulista, Abreu e Lima, Igarassu, Itapissuma e Itamaracá.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/servicos">
                Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link to="/quem-somos">Quem Somos</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroImage}
              alt="Comércio no Eixo Norte de Pernambuco"
              className="h-[380px] w-full object-cover lg:h-[440px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
    </section>
  );
};

export default HeroSection;
