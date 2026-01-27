import { MessageCircle, Phone, Clock } from 'lucide-react';
import { getWhatsAppContactLink } from '@/data/products';

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-whatsapp/10 mb-8">
            <MessageCircle className="w-10 h-10 text-whatsapp" />
          </div>

          {/* Title */}
          <h2 className="section-title mb-6">
            Fale com a <span className="gradient-text">TekFut</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Atendimento 100% via WhatsApp. Tire suas dúvidas, consulte disponibilidade
            e faça seu pedido de forma rápida e fácil.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card">
              <Phone className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="text-foreground font-medium">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card">
              <Clock className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Horário</p>
                <p className="text-foreground font-medium">9h às 20h</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={getWhatsAppContactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-3 text-xl px-10 py-5 animate-pulse-glow"
          >
            <MessageCircle className="w-7 h-7" />
            Fale com a TekFut no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
