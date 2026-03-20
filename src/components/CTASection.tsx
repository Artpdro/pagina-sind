import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-2xl font-bold text-accent-foreground md:text-3xl">
          Precisa de suporte para sua empresa?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-accent-foreground/80">
          Entre em contato com o SINDNORTE e descubra como podemos ajudar o seu negócio a crescer com segurança jurídica e representatividade.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="default" asChild>
            <Link to="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" className="border border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground" asChild>
            <a href="tel:8133718119">
              <Phone className="mr-2 h-4 w-4" />
              (81) 3371-8119
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
