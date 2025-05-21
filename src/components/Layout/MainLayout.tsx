
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const MainLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  const handleOpenMobileMenu = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenMobileMenu={handleOpenMobileMenu} />
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <div className="flex flex-col gap-4 pt-8">
            <SheetClose asChild>
              <Link to="/">
                <Button variant="ghost" className="w-full justify-start">Home</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/about">
                <Button variant="ghost" className="w-full justify-start">Como Funciona</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/pricing">
                <Button variant="ghost" className="w-full justify-start">Preços</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/login">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
