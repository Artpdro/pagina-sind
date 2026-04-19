import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const news = [
  {
    id: 1,
    title: "Sindnorte Igarassu lança Núcleo Jurídico da Mulher e fortalece rede de apoio no município",
    date: "27 Mar 2026",
    excerpt: "O Sindnorte Igarassu deu um importante passo com o lançamento do Núcleo Jurídico da Mulher, ampliando o acesso à orientação jurídica e fortalecendo a rede de apoio às mulheres da região.",
    category: "Institucional",
    link: "https://www.sindnorte.com.br/post/sindnorte-igarassu-lan%C3%A7a-n%C3%BAcleo-jur%C3%ADdico-da-mulher-e-fortalece-rede-de-apoio-no-munic%C3%ADpio",
    image: "https://static.wixstatic.com/media/6d1098_ef8a829208ef43fe9b18703ee31f5bdc~mv2.jpeg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/6d1098_ef8a829208ef43fe9b18703ee31f5bdc~mv2.webp",
  },
  {
    id: 2,
    title: "Sindnorte promove I Fórum de Mulheres Empreendedoras e destaca protagonismo feminino no Litoral Norte",
    date: "12 Mar 2026",
    excerpt: "O Sindnorte realizou o I Fórum de Mulheres Empreendedoras do Litoral Norte, reunindo empresárias, gestoras e lideranças femininas da região no Senac Paulista.",
    category: "Eventos",
    link: "https://www.sindnorte.com.br/post/sindnorte-promove-i-f%C3%B3rum-de-mulheres-empreendedoras-e-destaca-protagonismo-feminino-no-litoral-nort",
    image: "https://static.wixstatic.com/media/6d1098_030ad1ecc2df4defa41b82d8dd9e02b2~mv2.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_avif,quality_auto/6d1098_030ad1ecc2df4defa41b82d8dd9e02b2~mv2.webp",
  },
  {
    id: 3,
    title: "SINDNORTE inicia diálogo institucional com a ADEMIG",
    date: "10 Fev 2026",
    excerpt: "O Núcleo Jurídico do SINDNORTE reuniu-se com a vice-presidente da ADEMIG em um encontro voltado ao fortalecimento do relacionamento institucional entre as entidades.",
    category: "Institucional",
    link: "https://www.sindnorte.com.br/post/sindnorte-inicia-di%C3%A1logo-institucional-com-a-ademig",
    image: "https://static.wixstatic.com/media/6d1098_e2ac4ffd2657444595fea41538c0e852~mv2.png/v1/fill/w_454,h_341,fp_0.50_0.50,q_95,enc_avif,quality_auto/6d1098_e2ac4ffd2657444595fea41538c0e852~mv2.webp",
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
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Fique por dentro das novidades do sindicato e do comércio.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <a href="https://www.sindnorte.com.br/eventos" target="_blank" rel="noopener noreferrer">
              Ver todas
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {news.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col border border-border bg-card overflow-hidden shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-primary/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 w-fit bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.category}
                </span>
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
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <a href="https://www.sindnorte.com.br/eventos" target="_blank" rel="noopener noreferrer">
              Ver todas as notícias
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
