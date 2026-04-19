import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AssociadoBanner = () => {
  return (
    <section className="bg-accent py-14 md:py-16">
      <div className="container text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center bg-accent-foreground/10">
          <Users className="h-6 w-6 text-accent-foreground" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-accent-foreground md:text-3xl">
          Seja um Associado
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-accent-foreground/80 md:text-base">
          Associe-se ao SINDNORTE e tenha acesso a todos os benefícios exclusivos para empresas do comércio e serviços do Eixo Norte.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link to="/associar-se">
              Saiba mais
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssociadoBanner;
