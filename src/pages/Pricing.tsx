
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Calendar, Table, Percent, QrCode, Users } from "lucide-react";

const Pricing: React.FC = () => {
  return (
    <div>
      <section className="bg-restaurant-500 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Planos Simples e Transparentes</h1>
            <p className="text-xl text-gray-300">
              Escolha o plano ideal para o seu estabelecimento e comece a transformar sua operação hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-restaurant-500">Básico</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">R$99</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Ideal para pequenos estabelecimentos
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Até 10 mesas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>QR Codes para pagamentos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>2 categorias de clientes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Gestão de pedidos básica</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Suporte por email</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/register?plan=basic">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Escolher Plano
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="border-2 border-orange-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white py-1 px-3 text-xs font-bold">
                  MAIS POPULAR
                </div>
                <div className="p-6 bg-orange-50 border-b border-orange-200">
                  <h3 className="text-xl font-bold text-restaurant-500">Profissional</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">R$199</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Para estabelecimentos em crescimento
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Até 30 mesas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>QR Codes para pagamentos e pedidos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>5 categorias de clientes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Promoção de eventos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Reservas de mesas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Suporte prioritário</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/register?plan=pro">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Escolher Plano
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-restaurant-500">Empresarial</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">R$399</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Para grandes estabelecimentos
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Mesas ilimitadas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Sistema completo de QR Codes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Categorias de clientes ilimitadas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Promoção de eventos premium</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Integração com fornecedores</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>API completa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Suporte 24/7 e gerente de conta</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/register?plan=enterprise">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Escolher Plano
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-restaurant-500 text-center mb-8">
                Todos os planos incluem
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <QrCode className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Sistema de QR Code</h4>
                    <p className="text-sm text-gray-600">
                      Gere QR codes para pagamentos, pedidos e interações com clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <Users className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Múltiplos tipos de contas</h4>
                    <p className="text-sm text-gray-600">
                      Acesso para restaurantes, garçons, clientes e fornecedores.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <Calendar className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Promoção de eventos</h4>
                    <p className="text-sm text-gray-600">
                      Divulgue seus eventos para atrair mais clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <Table className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Reserva de mesas</h4>
                    <p className="text-sm text-gray-600">
                      Sistema simples para clientes reservarem mesas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <Percent className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Categorias de clientes</h4>
                    <p className="text-sm text-gray-600">
                      Crie níveis de fidelidade e ofereça benefícios personalizados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <Check className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Confirmação de pedidos</h4>
                    <p className="text-sm text-gray-600">
                      Sistema seguro de confirmação via QR code para evitar fraudes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-restaurant-500 text-center mb-10">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Posso trocar de plano posteriormente?</h3>
                <p className="text-gray-600">
                  Sim, você pode atualizar ou fazer downgrade do seu plano a qualquer momento. 
                  As mudanças serão refletidas na sua próxima cobrança.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Existe um período de teste gratuito?</h3>
                <p className="text-gray-600">
                  Sim, oferecemos 14 dias de teste gratuito em todos os planos para que 
                  você possa experimentar nossa plataforma antes de se comprometer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Como funciona o suporte?</h3>
                <p className="text-gray-600">
                  Oferecemos suporte por email para todos os planos, com tempos de resposta 
                  variados conforme o plano escolhido. O plano Empresarial inclui suporte 
                  24/7 e um gerente de conta dedicado.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Preciso de algum hardware especial?</h3>
                <p className="text-gray-600">
                  Não, nossa plataforma é baseada em web e funciona em qualquer dispositivo 
                  com acesso à internet. Os QR codes podem ser impressos ou exibidos em 
                  tablets/smartphones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-restaurant-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ainda tem dúvidas?</h2>
            <p className="text-gray-300 mb-8">
              Nossa equipe está pronta para ajudar a encontrar o plano perfeito para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Fale Conosco
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-orange-500 hover:bg-orange-600" size="lg">
                  Começar Agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
