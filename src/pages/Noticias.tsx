import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const allNews = [
  {
    id: 1,
    title: "Convenção Coletiva de Trabalho 2024/2025 já está disponível",
    date: "15 Mar 2025",
    excerpt: "Confira as novas cláusulas e reajustes salariais da CCT que entrou em vigor para o comércio do Eixo Norte. A convenção traz importantes mudanças nas condições de trabalho.",
    category: "Convenção",
  },
  {
    id: 2,
    title: "Feriados comerciais 2025: confira o calendário completo",
    date: "10 Jan 2025",
    excerpt: "Veja quais feriados permitem abertura do comércio e como solicitar a autorização pelo SINDNORTE para funcionamento.",
    category: "Feriados",
  },
  {
    id: 3,
    title: "REPIS: vantagens exclusivas para micro e pequenas empresas",
    date: "05 Dez 2024",
    excerpt: "Saiba como o Registro de Empresas de Pequeno Porte pode beneficiar o seu negócio com condições especiais na relação trabalhista.",
    category: "Serviços",
  },
  {
    id: 4,
    title: "SINDNORTE participa de encontro regional da Fecomércio",
    date: "20 Nov 2024",
    excerpt: "Representantes do sindicato estiveram presentes no encontro anual da Federação do Comércio de Pernambuco, discutindo pautas importantes para o setor.",
    category: "Institucional",
  },
  {
    id: 5,
    title: "Novas parcerias com SESC e SENAC ampliam benefícios",
    date: "08 Out 2024",
    excerpt: "Empresas associadas ao SINDNORTE agora contam com condições ainda mais vantajosas para cursos e programas de qualificação profissional.",
    category: "Parceiros",
  },
  {
    id: 6,
    title: "Mediação Digital: resolva conflitos sem sair da sua empresa",
    date: "15 Set 2024",
    excerpt: "O novo serviço de mediação digital do SINDNORTE permite a resolução de conflitos trabalhistas e comerciais de forma 100% online.",
    category: "Serviços",
  },
];

const Noticias = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl"
            >
              Notícias
            </motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Acompanhe as últimas novidades do SINDNORTE e do comércio regional.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="bg-primary/5 px-6 py-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-base font-semibold leading-snug text-card-foreground line-clamp-2">
                      {item.title}
                    </h2>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;
