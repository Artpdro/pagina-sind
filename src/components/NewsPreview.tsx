import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const news = [
  {
    id: 1,
    title: "Convenção Coletiva de Trabalho 2024/2025 já está disponível",
    date: "15 Mar 2025",
    excerpt: "Confira as novas cláusulas e reajustes salariais da CCT que entrou em vigor para o comércio do Eixo Norte.",
    category: "Convenção",
  },
  {
    id: 2,
    title: "Feriados comerciais 2025: confira o calendário completo",
    date: "10 Jan 2025",
    excerpt: "Veja quais feriados permitem abertura do comércio e como solicitar a autorização pelo SINDNORTE.",
    category: "Feriados",
  },
  {
    id: 3,
    title: "REPIS: vantagens exclusivas para micro e pequenas empresas",
    date: "05 Dez 2024",
    excerpt: "Saiba como o Registro de Empresas de Pequeno Porte pode beneficiar o seu negócio com condições especiais.",
    category: "Serviços",
  },
];

const NewsPreview = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Últimas Notícias
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fique por dentro das novidades do sindicato e do comércio.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link to="/noticias">
              Ver todas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className="bg-primary/5 px-6 py-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-semibold leading-snug text-card-foreground line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/noticias">Ver todas as notícias</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
