
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, User, Users, ShoppingBag } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("customer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt", { email, password, accountType });
    // Here we would handle the authentication logic
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-gray-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-restaurant-500">Bem-vindo ao ComandaGo</CardTitle>
              <CardDescription>
                Entre na sua conta para acessar a plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="customer" onValueChange={setAccountType}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="customer" className="text-xs md:text-sm">
                    <User className="w-4 h-4 mr-1 md:mr-2" />
                    <span className="hidden md:inline">Cliente</span>
                  </TabsTrigger>
                  <TabsTrigger value="restaurant" className="text-xs md:text-sm">
                    <ShoppingBag className="w-4 h-4 mr-1 md:mr-2" />
                    <span className="hidden md:inline">Restaurante</span>
                  </TabsTrigger>
                  <TabsTrigger value="waiter" className="text-xs md:text-sm">
                    <User className="w-4 h-4 mr-1 md:mr-2" />
                    <span className="hidden md:inline">Garçom</span>
                  </TabsTrigger>
                  <TabsTrigger value="supplier" className="text-xs md:text-sm">
                    <Users className="w-4 h-4 mr-1 md:mr-2" />
                    <span className="hidden md:inline">Fornecedor</span>
                  </TabsTrigger>
                </TabsList>

                {["customer", "restaurant", "waiter", "supplier"].map((type) => (
                  <TabsContent key={type} value={type}>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Senha</Label>
                          <Link
                            to="/forgot-password"
                            className="text-xs text-orange-500 hover:underline"
                          >
                            Esqueceu a senha?
                          </Link>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                        <LogIn className="w-4 h-4 mr-2" />
                        Entrar
                      </Button>
                    </form>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-4">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link to="/register" className="text-orange-500 hover:underline">
                  Registre-se
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
