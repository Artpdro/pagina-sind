import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
          Precisa de suporte para sua empresa?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/70 md:text-base">
          Entre em contato com o SINDNORTE e descubra como podemos ajudar o seu negócio a crescer com segurança jurídica e representatividade.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contato">
              Fale Conosco
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" className="border border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
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
