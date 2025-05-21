
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-restaurant-500 text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">ComandaGo</h3>
            <p className="text-sm text-gray-300">
              Simplifique a gestão do seu bar ou restaurante com nossa solução completa de pedidos e pagamentos via QR code.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-orange-400 transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-medium">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>contato@comandago.com.br</li>
              <li>(00) 0000-0000</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-sm text-center text-gray-300 border-t border-gray-700">
          © {new Date().getFullYear()} ComandaGo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
