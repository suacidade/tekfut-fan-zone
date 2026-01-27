import { MessageCircle } from 'lucide-react';
import { getWhatsAppContactLink } from '@/data/products';

const WhatsAppFloat = () => {
  return (
    <a
      href={getWhatsAppContactLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-whatsapp text-whatsapp-foreground rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
