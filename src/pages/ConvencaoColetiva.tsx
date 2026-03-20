import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DocLink = { label: string; url: string };

const olindaDocs: DocLink[] = [
  { label: "Termo Aditivo - CCT 2025-2026", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_0eb65beef0744df7bdb538a4e8d80d0d.pdf" },
  { label: "Termo Aditivo Feriado 20/10/2025", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_d20c16ec59bd4e9cbd017fd8128fb110.pdf" },
  { label: "CCT Comércio 2025/2026", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_f669f565727c474dad1b65926f1b0712.pdf" },
  { label: "CCT Comércio 2024/2025", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_cb94ee80869747bbb385a4df22bb64dc.pdf" },
  { label: "Shopping Patteo Olinda - Feriado 21.10.2024", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_950b83138df34eb58b0d8096f813ac63.pdf" },
  { label: "CCT Comércio 2023/2024", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_c612da641d284590adafdef8d4d6fab0.pdf" },
  { label: "Termo Aditivo 2023/2024", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_0bc9fd6e98b14269a2d14250dfa6b094.pdf" },
  { label: "Termo Aditivo 2024/2024", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_6e1d9625e1ea43d49e033d1ca2c2fb89.pdf" },
  { label: "Termo Aditivo Feriado 24/06/24", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_6b43b9033ed74a4b91ddbc56297ff4ee.pdf" },
  { label: "CCT Comércio 2022/2023", url: "http://www3.mte.gov.br/sistemas/mediador/Resumo/ResumoVisualizar?NrSolicitacao=MR050576/2022" },
  { label: "CCT Comércio 2021/2022", url: "http://www3.mte.gov.br/sistemas/mediador/Resumo/ResumoVisualizar?NrSolicitacao=MR060598/2021" },
  { label: "CCT Comércio 2020/2020", url: "http://www3.mte.gov.br/sistemas/mediador/Resumo/ResumoVisualizar?NrSolicitacao=MR016122/2020" },
  { label: "CCT Comércio 2019/2020", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_2b205a8e4b39405e974fe163a3d99d7c.pdf" },
  { label: "CCT Comércio 2018/2019", url: "http://www3.mte.gov.br/sistemas/mediador/Resumo/ResumoVisualizar?NrSolicitacao=MR074336/2018" },
  { label: "CCT Comércio 2017/2018", url: "http://www3.mte.gov.br/sistemas/mediador/Resumo/ResumoVisualizar?NrSolicitacao=MR070123/2017" },
];

const paulistaDocs: DocLink[] = [
  { label: "Termo Aditivo Feriado 20/10/2025", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_11d296037d104989ba7501fd3c940949.pdf" },
  { label: "Termo Aditivo 2025/2026", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_983ccefaa2544fa7979258574dd78a7a.pdf" },
  { label: "CCT Comércio 2025/2026", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_2f831e8c506542e4aa44e91155d0dcc3.pdf" },
  { label: "Termo Aditivo Feriado 24/06/25", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_ffa85e230ac444edb730701d8e87a458.pdf" },
  { label: "CCT Comércio 2024/2025", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_813b8f9ade5b4563b1636ef61dc26f46.pdf" },
  { label: "CCT Comércio 2023/2024", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_a618a7bc36ae44b2a643abfa95a3eacb.pdf" },
  { label: "Termo Aditivo 2023/2024", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_1b8a19d2eade4d94bfcb8ed2162973bf.pdf" },
  { label: "Termo Aditivo Feriado 24/06/24", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_fb24699414fd498092c0fc97fc064059.pdf" },
  { label: "Termo Aditivo Feriado 16/10/23", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_b265f78c3fb1431497741ab1636afdf2.pdf" },
  { label: "CCT Comércio 2022/2023", url: "http://www3.mte.gov.br/sistemas/mediador/Resumo/ResumoVisualizar?NrSolicitacao=MR039706/2022" },
  { label: "CCT Comércio 2021/2022", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_65a1ed791c0c4395b284127f5da967ca.pdf" },
  { label: "CCT Comércio 2020/2021", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_4f3185c8580249ba9141fb58c59912a6.pdf" },
  { label: "CCT Comércio 2019/2020", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_8954ea9656f64447ba1da3a2d425bc61.pdf" },
  { label: "CCT Comércio 2018/2019", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_9d0426fe7aef4646912938f2338ff2fc.pdf" },
];

const supermercadoDocs: DocLink[] = [
  { label: "Feriado Mercadeiro 2025", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_ee309aa885c3454abb6acdf2ad2f495c.pdf" },
  { label: "CCT Supermercado 2025/2027", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_e3b23cd58e5e4444a8f16c66c1f72e95.pdf" },
  { label: "CCT Supermercado 2024/2026", url: "https://www.sindnorte.com.br/_files/ugd/6d1098_e300ac356d1e4de49614aedf911c17ed.pdf" },
  { label: "CCT Supermercado 2023/2025", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_a1b37cf925d84f419f47264df01b6bee.pdf" },
  { label: "CCT Supermercado 2022/2023", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_a1b37cf925d84f419f47264df01b6bee.pdf" },
  { label: "CCT Supermercado 2020/2022", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_3ae96d4c344b49389868c09c4156b4a6.pdf" },
  { label: "CCT Supermercado 2019/2020", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_c73090943d634a839d822f77b94b1d1f.pdf" },
  { label: "CCT Supermercado 2018/2019", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_a4358ddeae774b80a0e33f8e44c4ebce.pdf" },
  { label: "CCT Supermercado 2017/2018", url: "https://www.sindnorte.com.br/_files/ugd/00b6aa_eb85580eeae64f48ba91dbe856c15066.pdf" },
];

const DocList = ({ docs }: { docs: DocLink[] }) => (
  <div className="space-y-2">
    {docs.map((doc) => (
      <a
        key={doc.url + doc.label}
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary"
      >
        <FileText className="h-5 w-5 shrink-0 text-primary" />
        <span className="flex-1 text-sm font-medium text-card-foreground">{doc.label}</span>
        <Download className="h-4 w-4 shrink-0 text-muted-foreground" />
      </a>
    ))}
  </div>
);

const ConvencaoColetiva = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
                  Convenção Coletiva de Trabalho
                </h1>
                <p className="mt-2 text-lg text-primary-foreground/80">
                  Acesse todas as CCTs e termos aditivos
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
              <h2 className="font-display text-xl font-bold text-card-foreground">O que é uma Convenção Coletiva?</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A convenção coletiva de trabalho (CCT) é uma importante ferramenta de gestão que garante que os sindicatos e os trabalhadores tenham voz para exigirem seus direitos trabalhistas. É um acordo feito entre os colaboradores e as contratantes da classe sindicalizada, onde são definidas condições como: ajustes e piso salarial, benefícios, normas e jornada de trabalho, regras para cada função e os deveres e direitos de cada um.
              </p>
            </div>

            <div className="mt-10">
              <Tabs defaultValue="olinda">
                <TabsList className="w-full flex-wrap">
                  <TabsTrigger value="olinda" className="flex-1">Olinda</TabsTrigger>
                  <TabsTrigger value="paulista" className="flex-1">Paulista à Itamaracá</TabsTrigger>
                  <TabsTrigger value="supermercado" className="flex-1">Supermercado</TabsTrigger>
                </TabsList>
                <TabsContent value="olinda" className="mt-6">
                  <DocList docs={olindaDocs} />
                </TabsContent>
                <TabsContent value="paulista" className="mt-6">
                  <DocList docs={paulistaDocs} />
                </TabsContent>
                <TabsContent value="supermercado" className="mt-6">
                  <DocList docs={supermercadoDocs} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConvencaoColetiva;
