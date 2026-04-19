import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickAccessBar from "@/components/QuickAccessBar";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import NewsPreview from "@/components/NewsPreview";
import CTASection from "@/components/CTASection";
import AssociadoBanner from "@/components/AssociadoBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AssociadoBanner />
        <QuickAccessBar />
        <ServicesPreview />
        <AboutPreview />
        <NewsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
