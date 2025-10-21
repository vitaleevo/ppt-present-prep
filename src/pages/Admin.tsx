import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Database, Users, Package, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRemoteData } from '@/hooks/useRemoteData';

export default function Admin() {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTable, setActiveTable] = useState('services');

  const { data: tableData, isLoading } = useRemoteData(activeTable, undefined, {
    enabled: isAdmin,
  });

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const tables = [
    { name: 'services', label: 'Serviços', icon: Package },
    { name: 'packages', label: 'Pacotes', icon: FileText },
    { name: 'testimonials', label: 'Depoimentos', icon: Users },
    { name: 'portfolio', label: 'Portfolio', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <p className="text-sm text-muted-foreground">
              Bem-vindo, {user?.email}
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          {tables.map((table) => {
            const Icon = table.icon;
            return (
              <Card
                key={table.name}
                className={`cursor-pointer transition-all ${
                  activeTable === table.name
                    ? 'border-primary shadow-md'
                    : 'hover:border-primary/50'
                }`}
                onClick={() => setActiveTable(table.name)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {table.label}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dados da Base de Dados Remota</CardTitle>
            <CardDescription>
              Visualize e gerencie os dados da tabela:{' '}
              <span className="font-semibold">{activeTable}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Carregando dados...</p>
              </div>
            ) : !tableData || tableData.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  Nenhum dado encontrado nesta tabela.
                </p>
              </div>
            ) : (
              <div className="border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <pre className="p-4 text-xs bg-muted">
                    {JSON.stringify(tableData, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Connection Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Informações do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Banco de Dados:</span>
                <span>PostgreSQL Remoto</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Status:</span>
                <span className="text-green-500">Conectado</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Permissão:</span>
                <span className="text-primary">Administrador</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
