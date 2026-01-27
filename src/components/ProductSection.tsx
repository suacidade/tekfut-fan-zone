import { useState } from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  products: Product[];
  categories?: string[];
}

const ProductSection = ({
  id,
  title,
  subtitle,
  products,
  categories,
}: ProductSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.subcategory === activeCategory);

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Category Filters */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('Todos')}
              className={`badge-category ${
                activeCategory === 'Todos'
                  ? 'bg-primary text-primary-foreground'
                  : ''
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`badge-category ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Nenhum produto encontrado nesta categoria.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
