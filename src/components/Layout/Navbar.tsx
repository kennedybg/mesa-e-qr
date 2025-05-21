
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-restaurant-500">
            ComandaGo
          </span>
        </Link>
        
        <div className="hidden gap-4 md:flex">
          <Link to="/about">
            <Button variant="ghost">Como Funciona</Button>
          </Link>
          <Link to="/pricing">
            <Button variant="ghost">Preços</Button>
          </Link>
          <Link to="/login">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
            </Button>
          </Link>
        </div>

        <Button variant="ghost" className="md:hidden" onClick={onOpenMobileMenu}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
