
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About: React.FC = () => {
  return (
    <div>
      <section className="bg-restaurant-500 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Como Funciona o ComandaGo</h1>
            <p className="text-xl text-gray-300">
              Descubra como nossa plataforma está revolucionando a experiência em bares e restaurantes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-restaurant-500 text-center">
              Um sistema completo para todos
            </h2>

            <div className="space-y-16">
              {/* Restaurant/Bar */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-restaurant-500 text-white rounded-full text-sm font-semibold mb-4">
                    Bar / Restaurante
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-restaurant-500">
                    Gerencie seu estabelecimento
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Crie QR codes para pagamentos e pedidos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Gerencie reservas e mesas em tempo real</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Configure categorias de clientes e benefícios</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Promova eventos e atraia mais clientes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-gray-500 italic">Ilustração do dashboard do estabelecimento</p>
                </div>
              </div>

              {/* Waiters */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-gray-500 italic">Ilustração do aplicativo do garçom</p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block px-4 py-2 bg-restaurant-500 text-white rounded-full text-sm font-semibold mb-4">
                    Garçons
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-restaurant-500">
                    Eficiência no atendimento
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Receba pedidos diretamente no dispositivo</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>QR code pessoal para receber gorjetas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Confirmação de entrega de pedidos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Visão completa das mesas e status</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Customers */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-restaurant-500 text-white rounded-full text-sm font-semibold mb-4">
                    Clientes
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-restaurant-500">
                    Experiência simplificada
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Escaneie QR codes para fazer pedidos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Pague a conta sem esperar</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Acumule benefícios por fidelidade</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Reserve mesas com antecedência</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-gray-500 italic">Ilustração da experiência do cliente</p>
                </div>
              </div>

              {/* Suppliers */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-gray-500 italic">Ilustração do portal de fornecedores</p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block px-4 py-2 bg-restaurant-500 text-white rounded-full text-sm font-semibold mb-4">
                    Fornecedores
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-restaurant-500">
                    Integração de fornecimento
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Receba pedidos automatizados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Confirmação de entrega via QR code</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Histórico completo de transações</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Integração com catálogo de produtos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-restaurant-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-gray-300 mb-8">
              Experimente o ComandaGo e transforme a experiência do seu estabelecimento.
            </p>
            <Link to="/register">
              <Button className="bg-orange-500 hover:bg-orange-600" size="lg">
                Criar Conta Grátis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
