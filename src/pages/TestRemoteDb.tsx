import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle2, XCircle, Database } from "lucide-react";
import { useTestRemoteConnection, useRemoteData } from "@/hooks/useRemoteData";

export default function TestRemoteDb() {
  const [showConnection, setShowConnection] = useState(false);
  const [testTable, setTestTable] = useState("");
  const [showTableData, setShowTableData] = useState(false);

  // Test connection
  const {
    data: connectionTest,
    isLoading: isTestingConnection,
    refetch: testConnection,
  } = useTestRemoteConnection();

  // Fetch table data
  const {
    data: tableData,
    isLoading: isLoadingTable,
    error: tableError,
  } = useRemoteData(testTable, undefined, {
    enabled: showTableData && testTable.length > 0,
  });

  const handleTestConnection = () => {
    setShowConnection(true);
    testConnection();
  };

  const handleTestTable = (tableName: string) => {
    setTestTable(tableName);
    setShowTableData(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Teste de Conexão PostgreSQL Remoto
            </h1>
            <p className="text-muted-foreground text-lg">
              Teste a conexão com o banco de dados remoto e consulte tabelas
            </p>
          </div>

          {/* Connection Test Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Testar Conexão
              </CardTitle>
              <CardDescription>
                Verificar se a conexão com o PostgreSQL remoto está funcionando
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleTestConnection}
                disabled={isTestingConnection}
                className="w-full md:w-auto"
              >
                {isTestingConnection ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testando...
                  </>
                ) : (
                  <>
                    <Database className="mr-2 h-4 w-4" />
                    Testar Conexão
                  </>
                )}
              </Button>

              {showConnection && connectionTest && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    {connectionTest.success ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-green-500">
                          Conexão Estabelecida com Sucesso!
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span className="font-semibold text-red-500">
                          Falha na Conexão
                        </span>
                      </>
                    )}
                  </div>

                  {connectionTest.success && connectionTest.version && (
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold mb-2">Informações do Servidor:</h3>
                      <pre className="text-sm overflow-x-auto">
                        {JSON.stringify(connectionTest.version, null, 2)}
                      </pre>
                    </div>
                  )}

                  {connectionTest.connectionInfo && (
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="font-semibold mb-2">Detalhes da Conexão:</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>Host:</strong> {connectionTest.connectionInfo.host}
                        </p>
                        <p>
                          <strong>Porta:</strong> {connectionTest.connectionInfo.port}
                        </p>
                        <p>
                          <strong>Database:</strong> {connectionTest.connectionInfo.database}
                        </p>
                        <p>
                          <strong>Usuário:</strong> {connectionTest.connectionInfo.user}
                        </p>
                        <p>
                          <strong>SSL:</strong> {connectionTest.connectionInfo.sslMode}
                        </p>
                      </div>
                    </div>
                  )}

                  {!connectionTest.success && connectionTest.error && (
                    <div className="p-4 bg-destructive/10 rounded-lg">
                      <h3 className="font-semibold mb-2 text-destructive">Erro:</h3>
                      <p className="text-sm">{connectionTest.error}</p>
                      {connectionTest.details && (
                        <pre className="text-xs mt-2 overflow-x-auto">
                          {connectionTest.details}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Table Query Card */}
          <Card>
            <CardHeader>
              <CardTitle>Consultar Tabela</CardTitle>
              <CardDescription>
                Escolha uma tabela para consultar os dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {['services', 'packages', 'testimonials', 'portfolio', 'blog_posts', 'categories', 'contacts'].map(
                  (table) => (
                    <Button
                      key={table}
                      variant={testTable === table ? "default" : "outline"}
                      onClick={() => handleTestTable(table)}
                    >
                      {table}
                    </Button>
                  )
                )}
              </div>

              {isLoadingTable && (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              )}

              {tableError && (
                <div className="p-4 bg-destructive/10 rounded-lg">
                  <p className="text-destructive">
                    Erro ao carregar dados: {String(tableError)}
                  </p>
                </div>
              )}

              {showTableData && tableData && !isLoadingTable && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">
                      Resultados da tabela: <Badge>{testTable}</Badge>
                    </h3>
                    <Badge variant="outline">
                      {tableData.length} {tableData.length === 1 ? 'registro' : 'registros'}
                    </Badge>
                  </div>

                  {tableData.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Nenhum registro encontrado nesta tabela.
                    </p>
                  ) : (
                    <div className="border rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <pre className="p-4 text-xs">
                          {JSON.stringify(tableData, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
