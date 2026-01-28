import { ShoppingBag, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { getWhatsAppContactLink } from '@/data/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <span className="text-2xl font-display tracking-wider text-foreground">
              Tek<span className="text-primary">Fut</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-whatsapp hover:text-whatsapp-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://www.instagram.com/tekfut2?igsh=dmY3N244cWZ3YTAz&utm_source=qr"
              target="_blank"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            {/* <a
              href="#"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p>TekFut © {currentYear} Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
