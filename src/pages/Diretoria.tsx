import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const diretoriaExecutiva = [
  { role: "Presidente", name: "Milton Tavares de Melo Júnior" },
  { role: "Vice-Presidente", name: "Evandro Alves de Lima" },
  { role: "2º Vice-Presidente", name: "Armando Seabra de Albuquerque" },
  { role: "1ª Secretária", name: "Angelica Andrade de Santana Martins" },
  { role: "2º Secretário", name: "Gilvan Teodoro de Macedo" },
  { role: "1º Tesoureiro", name: "Elzo Freire Ferraz" },
  { role: "2ª Tesoureira", name: "Maria Fernanda Barros de Lima" },
];

const suplentesConselhoFiscal = [
  { role: "1º Suplente", name: "Pedro Antonio dos Santos" },
  { role: "2º Suplente", name: "Celso José das Neves" },
  { role: "3º Suplente", name: "Gilvan Severino de Lorena" },
];

const delegados = [
  { role: "Delegado", name: "Milton Tavares de Melo Júnior" },
  { role: "Delegado", name: "Evandro Alves de Lima" },
];

const MemberCard = ({ name, role, index }: { name: string; role: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center gap-4 border border-border bg-card p-4 shadow-card"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10 text-primary">
      <Users className="h-5 w-5" />
    </div>
    <div>
      <p className="font-display text-sm font-semibold text-card-foreground">{name}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </motion.div>
);

const Diretoria = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-14 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                A Diretoria
              </h1>
              <p className="mt-3 max-w-2xl text-base text-primary-foreground/80">
                Conheça os membros que compõem a diretoria do SINDNORTE.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-14 md:py-20">
          <div className="container max-w-4xl">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Diretoria Executiva</h2>
              <div className="mt-4 flex flex-col gap-3">
                {diretoriaExecutiva.map((member, i) => (
                  <MemberCard key={i} name={member.name} role={member.role} index={i} />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-foreground">Suplentes do Conselho Fiscal</h2>
              <div className="mt-4 flex flex-col gap-3">
                {suplentesConselhoFiscal.map((member, i) => (
                  <MemberCard key={i} name={member.name} role={member.role} index={i} />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-foreground">Delegados Representantes</h2>
              <div className="mt-4 flex flex-col gap-3">
                {delegados.map((member, i) => (
                  <MemberCard key={i} name={member.name} role={member.role} index={i} />
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button variant="secondary" asChild>
                <Link to="/quem-somos">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Quem Somos
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Diretoria;
