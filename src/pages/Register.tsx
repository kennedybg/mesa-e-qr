
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, ShoppingBag } from "lucide-react";

const Register: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") || "basic";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("customer");
  const [cnpj, setCnpj] = useState("");
  const [cnae, setCnae] = useState("");
  const [plan, setPlan] = useState(initialPlan);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt", { 
      email, password, name, accountType, 
      cnpj: accountType === "restaurant" || accountType === "supplier" ? cnpj : undefined,
      cnae: accountType === "restaurant" || accountType === "supplier" ? cnae : undefined,
      plan: accountType === "restaurant" ? plan : undefined
    });
    // Here we would handle the registration logic
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto">
          <Card className="border-2 border-gray-100">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-restaurant-500">Registre-se no ComandaGo</CardTitle>
              <CardDescription>
                Crie sua conta para começar a utilizar nossa plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="customer" onValueChange={setAccountType}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="customer">
                    <User className="w-4 h-4 mr-2" />
                    Cliente
                  </TabsTrigger>
                  <TabsTrigger value="restaurant">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Restaurante
                  </TabsTrigger>
                  <TabsTrigger value="supplier">
                    <Users className="w-4 h-4 mr-2" />
                    Fornecedor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="customer">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
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
                      <Label htmlFor="password">Senha</Label>
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
                      Criar Conta
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="restaurant">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Nome do Estabelecimento</Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Nome do seu restaurante/bar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@estabelecimento.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input
                        id="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnae">CNAE</Label>
                      <Input
                        id="cnae"
                        type="text"
                        placeholder="0000-0/00"
                        value={cnae}
                        onChange={(e) => setCnae(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan">Plano</Label>
                      <select
                        id="plan"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        required
                      >
                        <option value="basic">Básico - R$99/mês</option>
                        <option value="pro">Profissional - R$199/mês</option>
                        <option value="enterprise">Empresarial - R$399/mês</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
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
                      Criar Conta
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="supplier">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Nome da Empresa</Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Nome da sua empresa"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input
                        id="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnae">CNAE</Label>
                      <Input
                        id="cnae"
                        type="text"
                        placeholder="0000-0/00"
                        value={cnae}
                        onChange={(e) => setCnae(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
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
                      Criar Conta
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-4">
              <p className="text-sm text-gray-600">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-orange-500 hover:underline">
                  Faça login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
