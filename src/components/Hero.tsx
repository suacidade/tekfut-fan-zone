import { MessageCircle, ChevronDown } from 'lucide-react';
import { getWhatsAppContactLink } from '@/data/products';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#brasileiros');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative
      flex
      items-center
      justify-center
      overflow-x-hidden
      min-h-[calc(100vh-var(--header-height))]
      pt-[var(--header-height)]"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff87' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container top-4 mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">
              Novidades toda semana
            </span>
          </div> */}

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight mb-6 animate-fade-in">
            Do clássico ao lançamento:
            <br />
            <span className="gradient-text">seu time está na TekFut</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Times nacionais, europeus e seleções com qualidade e os melhores preços
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
            <a
              href={getWhatsAppContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Comprar pelo WhatsApp
            </a>
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 border border-muted-foreground/30 rounded-lg text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Ver Produtos
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-2 pt-16 border-t border-muted/20 animate-fade-in animation-delay-600">
            <div>
              <p className="text-3xl md:text-4xl font-display gradient-text">500+</p>
              <p className="text-muted-foreground text-sm md:text-base">Produtos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display gradient-text">50+</p>
              <p className="text-muted-foreground text-sm md:text-base">Times</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display gradient-text">1000+</p>
              <p className="text-muted-foreground text-sm md:text-base">Clientes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <button
        onClick={scrollToProducts}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ChevronDown size={32} />
      </button> */}
    </section>
  );
};

export default Hero;
