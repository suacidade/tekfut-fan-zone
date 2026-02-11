// src/components/TeamSearch.tsx
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { brazilianTeams, Product } from '@/data/products';

interface TeamSearchProps {
  onResultsChange: (filteredProducts: Product[]) => void;
}

export default function TeamSearch({ onResultsChange }: TeamSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeams = useMemo(() => {
    if (!searchTerm.trim()) {
      return brazilianTeams; // mostra todos quando não tem busca
    }

    const term = searchTerm.toLowerCase().trim();

    return brazilianTeams.filter(product => {
      // Busca no nome do time, removendo acentos e espaços extras
      const teamName = product.team
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      return teamName.includes(term);
    });
  }, [searchTerm]);

  // Atualiza o componente pai (ProductSection) com os resultados filtrados
  useMemo(() => {
    onResultsChange(filteredTeams);
  }, [filteredTeams, onResultsChange]);

  return (
    <div className="relative max-w-xl mx-auto mb-10">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o nome do seu time (Flamengo, São Paulo, Palmeiras...)"
          className="
            w-full pl-12 pr-4 py-4 rounded-xl 
            bg-card border border-border 
            text-foreground placeholder:text-muted-foreground
            focus:outline-none focus:ring-2 focus:ring-primary/50
            transition-all
          "
        />
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
          size={20} 
        />
      </div>

      {/* Feedback visual */}
      {searchTerm && (
        <p className="text-sm text-muted-foreground mt-2 text-center">
          {filteredTeams.length === 0 
            ? "Nenhum time encontrado com esse nome 😔" 
            : `${filteredTeams.length} resultado${filteredTeams.length !== 1 ? 's' : ''} encontrado${filteredTeams.length !== 1 ? 's' : ''}`}
        </p>
      )}
    </div>
  );
}