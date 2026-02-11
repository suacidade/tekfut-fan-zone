// src/components/ProductSection.tsx
import { useMemo, useState } from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import TeamSearch from './TeamSearch'; // ← novo import

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  products: Product[];
  categories?: string[];
  showSearch?: boolean; // novo prop opcional
}

export default function ProductSection({
  id,
  title,
  subtitle,
  products: initialProducts,
  categories,
  showSearch = false, // por padrão desativado
}: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [filteredBySearch, setFilteredBySearch] = useState<Product[]>(initialProducts);

  // Combina filtro de categoria + busca
  const displayedProducts = useMemo(() => {
    let result = filteredBySearch;

    if (activeCategory !== 'Todos') {
      result = result.filter(p => p.subcategory === activeCategory);
    }

    return result;
  }, [filteredBySearch, activeCategory]);

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Campo de busca – só aparece na seção de brasileiros */}
        {showSearch && (
          <TeamSearch onResultsChange={setFilteredBySearch} />
        )}

        {/* Filtros de categoria (mantém o que já tinha) */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('Todos')}
              className={`badge-category ${activeCategory === 'Todos' ? 'bg-primary text-primary-foreground' : ''}`}
            >
              Todos
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`badge-category ${activeCategory === category ? 'bg-primary text-primary-foreground' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grade de produtos */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-xl">Nenhum produto encontrado</p>
            <p className="mt-2">Tente outro time ou limpe a busca</p>
          </div>
        )}
      </div>
    </section>
  );
}