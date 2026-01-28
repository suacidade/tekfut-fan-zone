// Product images imports
import flamengoJogadorImg from '@/assets/products/flamengo_jogador.jpeg';
import flamengoPoloImg from '@/assets/products/flamengo_polo.jpeg';
import flamengoTorcedorImg from '@/assets/products/flamengo_torcedor.jpeg';
import brasilJogadorImg from '@/assets/products/brasil_jogador.jpeg';
import brasilReservaImg from '@/assets/products/brasil_reserva.jpeg';
import vascoTorcedorImg from '@/assets/products/vasco_torcedor.jpeg';
import palmeirasTorcedorImg from '@/assets/products/palmeiras_torcedor.jpeg';
import palmeirasReservaImg from '@/assets/products/palmeiras_reserva.jpeg';
import fluminenseTorcedorImg from '@/assets/products/fluminense_torcedor.jpeg';
import fluminenseReservaImg from '@/assets/products/fluminense_reserva.jpeg';
import atleticoMineiroTitularImg from '@/assets/products/atletico_mineiro_titular.jpeg';
import atleticoMineiroReservaImg from '@/assets/products/atletico_mineiro_reserva.jpeg';
import flamengoTreinoImg from '@/assets/products/flamengo_treino.jpeg';
import cruzeiroPoloImg from '@/assets/products/cruzeiro_polo.jpeg';
import corinthians3Img from '@/assets/products/corinthians_3.jpg';
import vascoReservaImg from '@/assets/products/vasco_reserva.jpeg';
import flamengo3Img from '@/assets/products/flamengo_3.jpeg';
import saoPaulo3Img from '@/assets/products/sao_paulo_3.jpeg';
import corinthiansTitularImg from '@/assets/products/corinthians_titular.jpeg';
import santosTitularImg from '@/assets/products/santos_titular.jpeg';
import saoPauloTitularImg from '@/assets/products/sao_paulo_titular.jpeg';
import corinthiansReservaImg from '@/assets/products/corinthians_reserva.jpeg';

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
    id: "palmeiras-25",
    team: "Palmeiras | Reserva",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: palmeirasReservaImg,
    category: "brasileiros"
  },
  {
    id: "fluminense-24",
    team: "Fluminense | TORCEDOR",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: fluminenseTorcedorImg,
    category: "brasileiros"
  },
  {
    id: "fluminense-25",
    team: "Fluminense | RESERVA",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: fluminenseReservaImg,
    category: "brasileiros"
  },
  {
    id: "atletico-mineiro-24",
    team: "Atletico Mineiro | TITULAR",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: atleticoMineiroTitularImg,
    category: "brasileiros"
  },
  {
    id: "atletico-mineiro-25",
    team: "Atletico Mineiro | RESERVA",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: atleticoMineiroReservaImg,
    category: "brasileiros"
  },
  {
    id: "flamengo-27",
    team: "Flamengo | TREINO",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: flamengoTreinoImg,
    category: "brasileiros"
  },
  {
    id: "cruzeiro-24",
    team: "Cruzeiro | POLO",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: cruzeiroPoloImg,
    category: "brasileiros"
  },
  {
    id: "corinthians-24",
    team: "Corinthians | 3º Uniforme",
    season: "2025/2026",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: corinthians3Img,
    category: "brasileiros"
  },
  {
    id: "vasco-25",
    team: "Vasco | RESERVA",
    season: "2026/2027",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: vascoReservaImg,
    category: "brasileiros"
  },
  {
    id: "flamengo-28",
    team: "Flamengo | 3º Uniforme",
    season: "2025/2025",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: flamengo3Img,
    category: "brasileiros"
  },
  {
    id: "sao-paulo-24",
    team: "São Paulo | 3º Uniforme",
    season: "2025/2026",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: saoPaulo3Img,
    category: "brasileiros"
  },
  {
    id: "corinthians-25",
    team: "Corinthians | Titular",
    season: "2025/2026",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: corinthiansTitularImg,
    category: "brasileiros"
  },
  {
    id: "santos-24",
    team: "Santos | Titular",
    season: "2025/2026",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: santosTitularImg,
    category: "brasileiros"
  },
  {
    id: "sao-paulo-25",
    team: "São Paulo | Titular",
    season: "2025/2026",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: saoPauloTitularImg,
    category: "brasileiros"
  },
  {
    id: "corinthians-26",
    team: "Corinthians | Reserva",
    season: "2025/2026",
    sizes: ["P", "M", "G", "GG", "XG"],
    price: 149.99,
    image: corinthiansReservaImg,
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
  // {
  //   id: "argentina-24",
  //   team: "Argentina",
  //   country: "Argentina",
  //   model: "Titular",
  //   season: "2024/2025",
  //   sizes: ["P", "M", "G", "GG"],
  //   price: 179.90,
  //   image: argentinaImg,
  //   category: "selecoes"
  // },
  // {
  //   id: "franca-24",
  //   team: "França",
  //   country: "França",
  //   model: "Titular",
  //   season: "2024/2025",
  //   sizes: ["M", "G", "GG"],
  //   price: 189.90,
  //   image: francaImg,
  //   category: "selecoes"
  // },
  // {
  //   id: "alemanha-24",
  //   team: "Alemanha",
  //   country: "Alemanha",
  //   model: "Reserva",
  //   season: "2024/2025",
  //   sizes: ["P", "M", "G"],
  //   price: 179.90,
  //   image: alemanhaImg,
  //   category: "selecoes"
  // },
  // {
  //   id: "portugal-24",
  //   team: "Portugal",
  //   country: "Portugal",
  //   model: "Titular",
  //   season: "2024/2025",
  //   sizes: ["P", "M", "G", "GG"],
  //   price: 179.90,
  //   image: portugalImg,
  //   category: "selecoes"
  // },
  // {
  //   id: "espanha-24",
  //   team: "Espanha",
  //   country: "Espanha",
  //   model: "Titular",
  //   season: "2024/2025",
  //   sizes: ["M", "G"],
  //   price: 179.90,
  //   image: espanhaImg,
  //   category: "selecoes"
  // }
];

export const getWhatsAppLink = (teamName: string): string => {
  const message = encodeURIComponent(`Olá! Tenho interesse na blusa do ${teamName} da TekFut.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const getWhatsAppContactLink = (): string => {
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da TekFut.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
