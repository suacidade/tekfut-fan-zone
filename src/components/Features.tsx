import { CheckCircle2, MessageCircle, Truck, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Produtos de Qualidade',
    description: 'Materiais com acabamento impecável',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento Rápido',
    description: 'Resposta imediata pelo WhatsApp',
  },
  {
    icon: Truck,
    title: 'Envio para Todo Brasil',
    description: 'Entrega segura em todo território nacional',
  },
  {
    icon: ShoppingBag,
    title: 'Variedade de Times',
    description: 'Brasileiros, europeus e seleções',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Por que escolher a TekFut?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade, variedade e atendimento que você merece
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card hover:bg-primary/5 transition-all duration-300"
            >
              <div className="icon-feature mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
