import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import {
  brazilianTeams,
  europeanTeams,
  nationalTeams,
} from '@/data/products';

const europeanCategories = ['Ingleses', 'Espanhóis', 'Franceses', 'Italianos'];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <ProductSection
        id="brasileiros"
        title="Times Brasileiros"
        subtitle="As camisas dos maiores clubes do futebol brasileiro"
        products={brazilianTeams}
      />

      <ProductSection
        id="europeus"
        title="Times Europeus"
        subtitle="Premier League, La Liga, Serie A e Ligue 1"
        products={europeanTeams}
        categories={europeanCategories}
      />

      <ProductSection
        id="selecoes"
        title="Seleções"
        subtitle="Vista as cores do seu país"
        products={nationalTeams}
      />

      <Features />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
