
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { QrCode, Calendar, Table, Percent, Users } from "lucide-react";

const features = [
  {
    title: "Pagamento via QR Code",
    description: "Simplifique o processo de pagamento com QR Codes seguros e rápidos.",
    icon: <QrCode className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Promoção de Eventos",
    description: "Divulgue seus eventos e atraia mais clientes para o seu estabelecimento.",
    icon: <Calendar className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Reserva de Mesas",
    description: "Sistema fácil para seus clientes reservarem mesas com antecedência.",
    icon: <Table className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Descontos para Clientes",
    description: "Crie categorias de clientes e ofereça benefícios personalizados.",
    icon: <Percent className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Múltiplos Perfis",
    description: "Sistema completo para restaurantes, garçons, clientes e fornecedores.",
    icon: <Users className="w-8 h-8 text-orange-500" />,
  },
];

const Index: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern text-white">
        <div className="container px-4 py-32 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Simplifique a Gestão do seu Restaurante
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              Sistema completo de comanda eletrônica com pagamentos via QR Code,
              benefícios para clientes fiéis e muito mais.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Comece Agora
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-restaurant-500">
              Tudo o que você precisa para o seu estabelecimento
            </h2>
            <p className="text-gray-600">
              Nosso sistema oferece todas as ferramentas necessárias para modernizar
              e otimizar a operação do seu restaurante ou bar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition-shadow duration-300 bg-white border rounded-lg border-gray-100 hover:shadow-md"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-restaurant-500">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white bg-restaurant-500">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Pronto para transformar seu estabelecimento?
            </h2>
            <p className="mb-8 text-gray-300">
              Junte-se a centenas de restaurantes e bares que já estão usando nossa solução.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Experimente Grátis por 14 dias
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
