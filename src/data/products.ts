// Product images imports
import flamengoJogadorImg from '@/assets/products/flamengo_jogador.jpeg';
import flamengoPoloImg from '@/assets/products/flamengo_polo.jpeg';
import flamengoTorcedorImg from '@/assets/products/flamengo_torcedor.jpeg';
import brasilJogadorImg from '@/assets/products/brasil_jogador.jpeg';
import brasilReservaImg from '@/assets/products/brasil_reserva.jpeg';
import vascoTorcedorImg from '@/assets/products/vasco_torcedor.jpeg';
import palmeirasTorcedorImg from '@/assets/products/palmeiras_torcedor.jpeg';
import palmeirasReservaImg from '@/assets/products/palmeiras_reserva.jpeg';
import corinthiansImg from '@/assets/products/corinthians.jpg';
import palmeirasImg from '@/assets/products/palmeiras.jpg';
import saopauloImg from '@/assets/products/saopaulo.jpg';
import santosImg from '@/assets/products/santos.jpg';
import gremioImg from '@/assets/products/gremio.jpg';
import realmadridImg from '@/assets/products/realmadrid.jpg';
import barcelonaImg from '@/assets/products/barcelona.jpg';
import manchesterImg from '@/assets/products/manchester.jpg';
import liverpoolImg from '@/assets/products/liverpool.jpg';
import psgImg from '@/assets/products/psg.jpg';
import juventusImg from '@/assets/products/juventus.jpg';
import milanImg from '@/assets/products/milan.jpg';
import chelseaImg from '@/assets/products/chelsea.jpg';
import brasilImg from '@/assets/products/brasil.jpg';
import argentinaImg from '@/assets/products/argentina.jpg';
import francaImg from '@/assets/products/franca.jpg';
import alemanhaImg from '@/assets/products/alemanha.jpg';
import portugalImg from '@/assets/products/portugal.jpg';
import espanhaImg from '@/assets/products/espanha.jpg';

export interface Product {
  id: string;
  team: string;
  country?: string;
  league?: string;
  season: string;
  model?: string;
  sizes: string[];
  price: number;
  image: string;
  category: 'brasileiros' | 'europeus' | 'selecoes';
  subcategory?: string;
}

export const WHATSAPP_NUMBER = "5577991834403"; // Configure seu número aqui

export const brazilianTeams: Product[] = [
  {
    id: "flamengo-24",
    team: "Flamengo | JOGADOR",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 189.99,
    image: flamengoJogadorImg,
    category: "brasileiros"
  },
  {
    id: "flamengo-25",
    team: "Flamengo | POLO",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: flamengoPoloImg,
    category: "brasileiros"
  },
  {
    id: "flamengo-26",
    team: "Flamengo | TORCEDOR",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: flamengoTorcedorImg,
    category: "brasileiros"
  },
  {
    id: "vasco-24",
    team: "Vasco | TORCEDOR",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: vascoTorcedorImg,
    category: "brasileiros"
  },
  {
    id: "palmeiras-24",
    team: "Palmeiras | TORCEDOR",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: palmeirasTorcedorImg,
    category: "brasileiros"
  },
  {
    id: "palmeiras-24",
    team: "Palmeiras | Reserva",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: palmeirasReservaImg,
    category: "brasileiros"
  },
  {
    id: "corinthians-24",
    team: "Corinthians",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 149.90,
    image: corinthiansImg,
    category: "brasileiros"
  },
  {
    id: "palmeiras-24",
    team: "Palmeiras",
    season: "2024/2025",
    sizes: ["P", "M", "G"],
    price: 159.90,
    image: palmeirasImg,
    category: "brasileiros"
  },
  {
    id: "saopaulo-24",
    team: "São Paulo",
    season: "2024/2025",
    sizes: ["M", "G", "GG"],
    price: 149.90,
    image: saopauloImg,
    category: "brasileiros"
  },
  {
    id: "santos-24",
    team: "Santos",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 139.90,
    image: santosImg,
    category: "brasileiros"
  },
  {
    id: "gremio-24",
    team: "Grêmio",
    season: "2024/2025",
    sizes: ["P", "M", "G"],
    price: 149.90,
    image: gremioImg,
    category: "brasileiros"
  }
];

export const europeanTeams: Product[] = [
  {
    id: "realmadrid-24",
    team: "Real Madrid",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 189.90,
    image: realmadridImg,
    category: "europeus",
    subcategory: "Espanhóis"
  },
  {
    id: "barcelona-24",
    team: "Barcelona",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 189.90,
    image: barcelonaImg,
    category: "europeus",
    subcategory: "Espanhóis"
  },
  {
    id: "manchester-24",
    team: "Manchester United",
    season: "2024/2025",
    sizes: ["M", "G", "GG"],
    price: 199.90,
    image: manchesterImg,
    category: "europeus",
    subcategory: "Ingleses"
  },
  {
    id: "liverpool-24",
    team: "Liverpool",
    season: "2024/2025",
    sizes: ["P", "M", "G"],
    price: 199.90,
    image: liverpoolImg,
    category: "europeus",
    subcategory: "Ingleses"
  },
  {
    id: "psg-24",
    team: "Paris Saint-Germain",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 189.90,
    image: psgImg,
    category: "europeus",
    subcategory: "Franceses"
  },
  {
    id: "juventus-24",
    team: "Juventus",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 179.90,
    image: juventusImg,
    category: "europeus",
    subcategory: "Italianos"
  },
  {
    id: "milan-24",
    team: "AC Milan",
    season: "2024/2025",
    sizes: ["M", "G", "GG"],
    price: 179.90,
    image: milanImg,
    category: "europeus",
    subcategory: "Italianos"
  },
  {
    id: "chelsea-24",
    team: "Chelsea",
    season: "2024/2025",
    sizes: ["P", "M", "G"],
    price: 199.90,
    image: chelseaImg,
    category: "europeus",
    subcategory: "Ingleses"
  }
];

export const nationalTeams: Product[] = [
  {
    id: "brasil-24",
    team: "Brasil | JOGADOR",
    country: "Brasil",
    model: "Titular",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 189.99,
    image: brasilJogadorImg,
    category: "selecoes"
  },
  {
    id: "brasil-24",
    team: "Brasil | Reserva",
    country: "Brasil",
    model: "Reserva",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: brasilReservaImg,
    category: "selecoes"
  },
  {
    id: "argentina-24",
    team: "Argentina",
    country: "Argentina",
    model: "Titular",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 179.90,
    image: argentinaImg,
    category: "selecoes"
  },
  {
    id: "franca-24",
    team: "França",
    country: "França",
    model: "Titular",
    season: "2024/2025",
    sizes: ["M", "G", "GG"],
    price: 189.90,
    image: francaImg,
    category: "selecoes"
  },
  {
    id: "alemanha-24",
    team: "Alemanha",
    country: "Alemanha",
    model: "Reserva",
    season: "2024/2025",
    sizes: ["P", "M", "G"],
    price: 179.90,
    image: alemanhaImg,
    category: "selecoes"
  },
  {
    id: "portugal-24",
    team: "Portugal",
    country: "Portugal",
    model: "Titular",
    season: "2024/2025",
    sizes: ["P", "M", "G", "GG"],
    price: 179.90,
    image: portugalImg,
    category: "selecoes"
  },
  {
    id: "espanha-24",
    team: "Espanha",
    country: "Espanha",
    model: "Titular",
    season: "2024/2025",
    sizes: ["M", "G"],
    price: 179.90,
    image: espanhaImg,
    category: "selecoes"
  }
];

export const getWhatsAppLink = (teamName: string): string => {
  const message = encodeURIComponent(`Olá! Tenho interesse na blusa do ${teamName} da TekFut.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getWhatsAppContactLink = (): string => {
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da TekFut.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
