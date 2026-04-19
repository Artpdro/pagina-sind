import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  CalendarDays, ExternalLink, FileText, CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Feriado = {
  data: string;
  dia: string;
  nome: string;
  tipo: "Nacional" | "Estadual" | "Municipal" | "Convenção Coletiva";
  lei: string;
};

const feriadosItamaraca: Feriado[] = [
  { data: "01/01", dia: "Quinta-feira", nome: "Confraternização Universal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "02/02", dia: "Segunda-feira", nome: "Padroeira da Cidade de Itamaracá", tipo: "Municipal", lei: "Feriado Municipal" },
  { data: "06/03", dia: "Sexta-feira", nome: "Data Magna do Estado PE", tipo: "Estadual", lei: "Lei nº 16.059/2017" },
  { data: "03/04", dia: "Sexta-feira", nome: "Paixão de Cristo", tipo: "Nacional", lei: "Lei nº 9.093/1995" },
  { data: "21/04", dia: "Terça-feira", nome: "Tiradentes", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "01/05", dia: "Sexta-feira", nome: "Dia do Trabalhador", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/08", dia: "Sábado", nome: "Ascensão de Nossa Senhora", tipo: "Municipal", lei: "Feriado Municipal" },
  { data: "07/09", dia: "Segunda-feira", nome: "Independência do Brasil", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "12/10", dia: "Segunda-feira", nome: "Nossa Senhora Aparecida", tipo: "Nacional", lei: "Lei nº 6.802/1980" },
  { data: "19/10", dia: "Segunda-feira", nome: "Dia do Comerciário", tipo: "Convenção Coletiva", lei: "Convenção Coletiva" },
  { data: "02/11", dia: "Segunda-feira", nome: "Finados", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/11", dia: "Domingo", nome: "Proclamação da República", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "20/11", dia: "Sexta-feira", nome: "Dia da Consciência Negra", tipo: "Nacional", lei: "Lei nº 14.759/2023" },
  { data: "25/12", dia: "Sexta-feira", nome: "Natal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "31/12", dia: "Quinta-feira", nome: "Emancipação Política do Município", tipo: "Municipal", lei: "Lei nº 923/2002" },
];

const feriadosItapissuma: Feriado[] = [
  { data: "01/01", dia: "Quinta-feira", nome: "Confraternização Universal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "10/01", dia: "Sábado", nome: "Dia de São Gonçalo", tipo: "Municipal", lei: "Lei Municipal nº 70/84" },
  { data: "06/03", dia: "Sexta-feira", nome: "Data Magna do Estado PE", tipo: "Estadual", lei: "Lei nº 16.059/2017" },
  { data: "03/04", dia: "Sexta-feira", nome: "Paixão de Cristo", tipo: "Nacional", lei: "Lei nº 9.093/1995" },
  { data: "21/04", dia: "Terça-feira", nome: "Tiradentes", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "01/05", dia: "Sexta-feira", nome: "Dia do Trabalhador", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/05", dia: "Sexta-feira", nome: "Emancipação Política de Itapissuma", tipo: "Municipal", lei: "Lei Municipal nº 70/84" },
  { data: "29/06", dia: "Sexta-feira", nome: "Festa de São Pedro", tipo: "Municipal", lei: "Lei Municipal nº 70/84" },
  { data: "07/09", dia: "Segunda-feira", nome: "Independência do Brasil", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "12/10", dia: "Segunda-feira", nome: "Nossa Senhora Aparecida", tipo: "Nacional", lei: "Lei nº 6.802/1980" },
  { data: "19/10", dia: "Segunda-feira", nome: "Dia do Comerciário", tipo: "Convenção Coletiva", lei: "Convenção Coletiva" },
  { data: "02/11", dia: "Segunda-feira", nome: "Finados", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/11", dia: "Domingo", nome: "Proclamação da República", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "20/11", dia: "Sexta-feira", nome: "Dia da Consciência Negra", tipo: "Nacional", lei: "Lei nº 14.759/2023" },
  { data: "08/12", dia: "Terça-feira", nome: "Nossa Senhora da Conceição", tipo: "Municipal", lei: "Lei Municipal nº 70/84" },
  { data: "25/12", dia: "Sexta-feira", nome: "Natal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
];

const feriadosIgarassu: Feriado[] = [
  { data: "01/01", dia: "Quinta-feira", nome: "Confraternização Universal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "06/03", dia: "Sexta-feira", nome: "Data Magna do Estado PE", tipo: "Estadual", lei: "Lei nº 16.059/2017" },
  { data: "03/04", dia: "Sexta-feira", nome: "Paixão de Cristo", tipo: "Nacional", lei: "Lei nº 9.093/1995" },
  { data: "21/04", dia: "Terça-feira", nome: "Tiradentes", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "01/05", dia: "Sexta-feira", nome: "Dia do Trabalhador", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "24/06", dia: "Quarta-feira", nome: "São João Batista", tipo: "Municipal", lei: "Lei Municipal nº 1.997/91" },
  { data: "07/09", dia: "Segunda-feira", nome: "Independência do Brasil", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "27/09", dia: "Domingo", nome: "Santos Cosme e Damião", tipo: "Municipal", lei: "Lei Municipal nº 1.997/91" },
  { data: "12/10", dia: "Segunda-feira", nome: "Nossa Senhora Aparecida", tipo: "Nacional", lei: "Lei nº 6.802/1980" },
  { data: "19/10", dia: "Segunda-feira", nome: "Dia do Comerciário", tipo: "Convenção Coletiva", lei: "Convenção Coletiva" },
  { data: "02/11", dia: "Segunda-feira", nome: "Finados", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/11", dia: "Domingo", nome: "Proclamação da República", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "20/11", dia: "Sexta-feira", nome: "Dia da Consciência Negra", tipo: "Nacional", lei: "Lei nº 14.759/2023" },
  { data: "08/12", dia: "Terça-feira", nome: "Virgem Imaculada", tipo: "Municipal", lei: "Lei Municipal nº 1.997/91" },
  { data: "25/12", dia: "Sexta-feira", nome: "Natal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
];

const feriadosPaulista: Feriado[] = [
  { data: "01/01", dia: "Quinta-feira", nome: "Confraternização Universal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "18/02", dia: "Quarta-feira", nome: "Quarta de Cinzas", tipo: "Municipal", lei: "Decreto Municipal de Maio de 2014" },
  { data: "06/03", dia: "Sexta-feira", nome: "Data Magna do Estado PE", tipo: "Estadual", lei: "Lei nº 16.059/2017" },
  { data: "03/04", dia: "Sexta-feira", nome: "Paixão de Cristo", tipo: "Nacional", lei: "Lei nº 9.093/1995" },
  { data: "21/04", dia: "Terça-feira", nome: "Tiradentes", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "01/05", dia: "Sexta-feira", nome: "Dia do Trabalhador", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "24/06", dia: "Quarta-feira", nome: "São João Batista", tipo: "Municipal", lei: "Lei nº 4.410/2014" },
  { data: "04/09", dia: "Sexta-feira", nome: "Emancipação Política de Paulista", tipo: "Municipal", lei: "Decreto Municipal de Maio de 2014" },
  { data: "07/09", dia: "Segunda-feira", nome: "Independência do Brasil", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "12/10", dia: "Segunda-feira", nome: "Nossa Senhora Aparecida", tipo: "Nacional", lei: "Lei nº 6.802/1980" },
  { data: "19/10", dia: "Segunda-feira", nome: "Dia do Comerciário", tipo: "Convenção Coletiva", lei: "Convenção Coletiva" },
  { data: "02/11", dia: "Segunda-feira", nome: "Finados", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/11", dia: "Domingo", nome: "Proclamação da República", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "20/11", dia: "Sexta-feira", nome: "Dia da Consciência Negra", tipo: "Nacional", lei: "Lei nº 14.759/2023" },
  { data: "25/12", dia: "Sexta-feira", nome: "Natal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
];

const feriadosOlinda: Feriado[] = [
  { data: "01/01", dia: "Quinta-feira", nome: "Confraternização Universal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "06/03", dia: "Sexta-feira", nome: "Data Magna do Estado PE", tipo: "Estadual", lei: "Lei nº 16.059/2017" },
  { data: "12/03", dia: "Quinta-feira", nome: "Aniversário de Olinda", tipo: "Municipal", lei: "Art. 187 da Lei Orgânica" },
  { data: "03/04", dia: "Sexta-feira", nome: "Paixão de Cristo", tipo: "Nacional", lei: "Lei nº 9.093/1995" },
  { data: "21/04", dia: "Terça-feira", nome: "Tiradentes", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "01/05", dia: "Sexta-feira", nome: "Dia do Trabalhador", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "24/06", dia: "Quarta-feira", nome: "São João Batista", tipo: "Municipal", lei: "Art. 187 da Lei Orgânica" },
  { data: "06/08", dia: "Quinta-feira", nome: "São Salvador", tipo: "Municipal", lei: "Art. 187 da Lei Orgânica" },
  { data: "07/09", dia: "Segunda-feira", nome: "Independência do Brasil", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "12/10", dia: "Segunda-feira", nome: "Nossa Senhora Aparecida", tipo: "Nacional", lei: "Lei nº 6.802/1980" },
  { data: "19/10", dia: "Segunda-feira", nome: "Dia do Comerciário", tipo: "Convenção Coletiva", lei: "Convenção Coletiva" },
  { data: "02/11", dia: "Segunda-feira", nome: "Finados", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "10/11", dia: "Terça-feira", nome: "Grito pela Emancipação de Olinda", tipo: "Municipal", lei: "Art. 187 da Lei Orgânica" },
  { data: "15/11", dia: "Domingo", nome: "Proclamação da República", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "20/11", dia: "Sexta-feira", nome: "Dia da Consciência Negra", tipo: "Nacional", lei: "Lei nº 14.759/2023" },
  { data: "25/12", dia: "Sexta-feira", nome: "Natal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
];

const feriadosAbreuELima: Feriado[] = [
  { data: "01/01", dia: "Quinta-feira", nome: "Confraternização Universal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "06/03", dia: "Sexta-feira", nome: "Data Magna do Estado PE", tipo: "Estadual", lei: "Lei nº 16.059/2017" },
  { data: "19/03", dia: "Quinta-feira", nome: "Padroeiro da Cidade de Abreu e Lima", tipo: "Municipal", lei: "Lei nº 001/83" },
  { data: "03/04", dia: "Sexta-feira", nome: "Paixão de Cristo", tipo: "Nacional", lei: "Lei nº 9.093/1995" },
  { data: "21/04", dia: "Terça-feira", nome: "Tiradentes", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "01/05", dia: "Sexta-feira", nome: "Dia do Trabalhador", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "14/05", dia: "Quinta-feira", nome: "Emancipação Política de Abreu e Lima", tipo: "Municipal", lei: "Lei nº 002/83" },
  { data: "07/09", dia: "Segunda-feira", nome: "Independência do Brasil", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "12/10", dia: "Segunda-feira", nome: "Nossa Senhora Aparecida", tipo: "Nacional", lei: "Lei nº 6.802/1980" },
  { data: "19/10", dia: "Segunda-feira", nome: "Dia do Comerciário", tipo: "Convenção Coletiva", lei: "Convenção Coletiva" },
  { data: "31/10", dia: "Sábado", nome: "Consciência Evangélica", tipo: "Municipal", lei: "Lei nº 632/2008" },
  { data: "02/11", dia: "Segunda-feira", nome: "Finados", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "15/11", dia: "Domingo", nome: "Proclamação da República", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
  { data: "20/11", dia: "Sexta-feira", nome: "Dia da Consciência Negra", tipo: "Nacional", lei: "Lei nº 14.759/2023" },
  { data: "25/12", dia: "Sexta-feira", nome: "Natal", tipo: "Nacional", lei: "Lei nº 10.607/2002" },
];

const tipoBadge = (tipo: Feriado["tipo"]) => {
  const styles: Record<string, string> = {
    Nacional: "bg-primary/10 text-primary",
    Estadual: "bg-accent/10 text-accent",
    Municipal: "bg-emerald-500/10 text-emerald-700",
    "Convenção Coletiva": "bg-amber-500/10 text-amber-700",
  };
  return styles[tipo] || "";
};

const FeriadoTable = ({ feriados }: { feriados: Feriado[] }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border bg-secondary/50">
          <th className="px-4 py-3 text-left font-semibold text-card-foreground">Data</th>
          <th className="px-4 py-3 text-left font-semibold text-card-foreground">Feriado</th>
          <th className="hidden px-4 py-3 text-left font-semibold text-card-foreground md:table-cell">Tipo</th>
          <th className="hidden px-4 py-3 text-left font-semibold text-card-foreground lg:table-cell">Lei</th>
        </tr>
      </thead>
      <tbody>
        {feriados.map((f, i) => (
          <tr key={i} className="border-b border-border/50 transition-colors hover:bg-secondary/30">
            <td className="whitespace-nowrap px-4 py-3 font-medium text-card-foreground">{f.data}</td>
            <td className="px-4 py-3 text-muted-foreground">
              {f.nome}
              <span className={`ml-2 inline-block rounded-sm px-2 py-0.5 text-xs font-medium md:hidden ${tipoBadge(f.tipo)}`}>
                {f.tipo}
              </span>
            </td>
            <td className="hidden px-4 py-3 md:table-cell">
              <span className={`inline-block rounded-sm px-2 py-0.5 text-xs font-medium ${tipoBadge(f.tipo)}`}>
                {f.tipo}
              </span>
            </td>
            <td className="hidden px-4 py-3 text-xs text-muted-foreground lg:table-cell">{f.lei}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const tabs = [
  { value: "olinda", label: "Olinda", data: feriadosOlinda },
  { value: "paulista", label: "Paulista", data: feriadosPaulista },
  { value: "abreu", label: "Abreu e Lima", data: feriadosAbreuELima },
  { value: "igarassu", label: "Igarassu", data: feriadosIgarassu },
  { value: "itapissuma", label: "Itapissuma", data: feriadosItapissuma },
  { value: "itamaraca", label: "Ilha de Itamaracá", data: feriadosItamaraca },
];

const Feriados = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-10 md:py-14">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 bg-primary-foreground/10">
                <CalendarDays className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                  Feriados 2026
                </h1>
                <p className="mt-0.5 text-sm text-primary-foreground/70">
                  Consulte os feriados por município, solicite abertura ou baixe o PDF completo
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ações */}
        <section className="bg-background py-10 md:py-14">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Card — Solicitar Abertura */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="border border-primary/20 bg-card p-7 transition-shadow hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-primary/10">
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-lg font-bold text-card-foreground">
                  Solicitar Abertura em Feriado
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  De acordo com a CCT, as empresas podem requerer autorização para abertura em feriados. A solicitação pode ser feita pelo sócio ou pelo contador.
                </p>
                <Button className="mt-6 w-full" size="lg" asChild>
                  <a
                    href="https://repis.bubbleapps.io/version-test/abertfer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck className="mr-2 h-4 w-4" />
                    Solicitar Abertura
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </motion.div>

              {/* Card — PDF Completo */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border border-border bg-card p-7 transition-shadow hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center bg-accent/10">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-display text-lg font-bold text-card-foreground">
                  Relação Completa de Feriados 2026
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Baixe o documento oficial com todos os feriados nacionais, estaduais e municipais de 2026.
                </p>
                <Button variant="outline" className="mt-6 w-full" size="lg" asChild>
                  <a
                    href="https://www.sindnorte.com.br/_files/ugd/6d1098_f0a2a30bec004705ae402142ba80c065.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Baixar PDF Completo
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Lista de Feriados por Município */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                Feriados por Município
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Selecione o município para visualizar a relação completa de feriados em 2026.
              </p>

              <div className="mt-6">
                <Tabs defaultValue="olinda">
                  <TabsList className="w-full flex-wrap">
                    {tabs.map((t) => (
                      <TabsTrigger key={t.value} value={t.value} className="flex-1">
                        {t.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {tabs.map((t) => (
                    <TabsContent key={t.value} value={t.value} className="mt-4">
                      <div className="border border-border bg-card shadow-card">
                        <FeriadoTable feriados={t.data} />
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Feriados;
