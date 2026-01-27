import { MessageCircle } from 'lucide-react';
import { Product, getWhatsAppLink } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="card-product group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`Camisa ${product.team}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Buy Button */}
        <a
          href={getWhatsAppLink(product.team)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 right-4 btn-whatsapp flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
        >
          <MessageCircle size={18} />
          Comprar Agora
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Team Name & Season */}
        <div className="mb-3">
          <h3 className="text-xl font-display tracking-wide text-foreground">
            {product.team}
          </h3>
          <p className="text-sm text-muted-foreground">
            {product.model && `${product.model} • `}
            {product.season}
          </p>
        </div>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.sizes.map((size) => (
            <span key={size} className="badge-size">
              {size}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-muted-foreground">à vista</p>
          </div>
          <a
            href={getWhatsAppLink(product.team)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-whatsapp/10 text-whatsapp rounded-lg hover:bg-whatsapp hover:text-whatsapp-foreground transition-all duration-300"
            aria-label={`Comprar ${product.team} no WhatsApp`}
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
