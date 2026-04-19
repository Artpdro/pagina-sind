import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import Servicos from "./pages/Servicos.tsx";
import Convenios from "./pages/Convenios.tsx";
import Noticias from "./pages/Noticias.tsx";
import Contato from "./pages/Contato.tsx";
import AlvaraBombeiros from "./pages/AlvaraBombeiros.tsx";
import AssociarSe from "./pages/AssociarSe.tsx";
import AssessoriaJuridica from "./pages/AssessoriaJuridica.tsx";
import MediacaoDigital from "./pages/MediacaoDigital.tsx";
import Repis from "./pages/Repis.tsx";
import ConvencaoColetiva from "./pages/ConvencaoColetiva.tsx";
import AberturaFeriados from "./pages/AberturaFeriados.tsx";
import Feriados from "./pages/Feriados.tsx";
import Diretoria from "./pages/Diretoria.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/convenios" element={<Convenios />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/alvara-bombeiros" element={<AlvaraBombeiros />} />
          <Route path="/associar-se" element={<AssociarSe />} />
          <Route path="/assessoria-juridica" element={<AssessoriaJuridica />} />
          <Route path="/mediacao-digital" element={<MediacaoDigital />} />
          <Route path="/repis" element={<Repis />} />
          <Route path="/convencao-coletiva" element={<ConvencaoColetiva />} />
          <Route path="/abertura-feriados" element={<AberturaFeriados />} />
          <Route path="/feriados" element={<Feriados />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
