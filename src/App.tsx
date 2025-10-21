import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contactos from "./pages/Contactos";
import ApresentacoesCorporativas from "./pages/servicos/ApresentacoesCorporativas";
import PackageDetail from "./pages/servicos/PackageDetail";
import IdentidadeVisual from "./pages/servicos/IdentidadeVisual";
import ServiceDetail from "./pages/servicos/ServiceDetail";
import CategoryServices from "./pages/servicos/CategoryServices";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import TestRemoteDb from "./pages/TestRemoteDb";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/servicos/:categorySlug" element={<CategoryServices />} />
              <Route path="/servicos/apresentacoes-corporativas" element={<ApresentacoesCorporativas />} />
              <Route path="/servicos/apresentacoes-corporativas/:packageSlug" element={<PackageDetail />} />
              <Route path="/servicos/design-criativo/identidade-visual" element={<IdentidadeVisual />} />
              <Route path="/servicos/:categorySlug/:serviceSlug" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contactos" element={<Contactos />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/test-remote-db" element={<TestRemoteDb />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
