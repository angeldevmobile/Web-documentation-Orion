import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Code2, Terminal } from "lucide-react";

const ErrorsModule = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Module Header */}
      <div className="glass-effect rounded-xl p-8 border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Módulo: errors.orx</h2>
            <p className="text-muted-foreground text-lg">
              Sistema de errores para Orion Language
            </p>
            <p className="text-foreground/70 mt-2">
              Define excepciones personalizadas y un mecanismo uniforme de reporte.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose */}
      <Card className="glass-effect border-primary/20 p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-primary"></span> Propósito
        </h3>
        <p className="text-foreground/80 mb-4">
          Orion utiliza un sistema unificado de errores basado en clases, lo que permite:
        </p>
        <ul className="space-y-2 text-foreground/70 list-disc list-inside">
          <li>Identificar el tipo exacto de error ocurrido (sintaxis, ejecución, tipo, etc.)</li>
          <li>Mostrar mensajes detallados con ubicación (línea, columna)</li>
          <li>Capturar y manejar errores de forma consistente dentro del intérprete</li>
        </ul>
      </Card>

      {/* Main Classes */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="text-primary"></span> Clases principales
        </h3>

        <Tabs defaultValue="base" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
            <TabsTrigger value="base">Base</TabsTrigger>
            <TabsTrigger value="syntax">Syntax</TabsTrigger>
            <TabsTrigger value="runtime">Runtime</TabsTrigger>
            <TabsTrigger value="type">Type</TabsTrigger>
            <TabsTrigger value="name">Name</TabsTrigger>
            <TabsTrigger value="function">Function</TabsTrigger>
          </TabsList>

          {/* OrionError Base */}
          <TabsContent value="base" className="space-y-4">
            <Card className="glass-effect border-primary/20 p-6">
              <h4 className="text-xl font-semibold mb-3 font-mono text-primary">
                class OrionError(message, line=None, column=None)
              </h4>
              <p className="text-foreground/80 mb-4">
                Clase base de todos los errores de Orion.
              </p>

              {/* Attributes Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 px-3 text-sm font-semibold">Nombre</th>
                      <th className="text-left py-2 px-3 text-sm font-semibold">Tipo</th>
                      <th className="text-left py-2 px-3 text-sm font-semibold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 px-3 font-mono text-sm text-accent">message</td>
                      <td className="py-2 px-3 font-mono text-sm text-muted-foreground">str</td>
                      <td className="py-2 px-3 text-sm">Mensaje descriptivo del error</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 px-3 font-mono text-sm text-accent">line</td>
                      <td className="py-2 px-3 font-mono text-sm text-muted-foreground">int</td>
                      <td className="py-2 px-3 text-sm">Línea del error (opcional)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-sm text-accent">column</td>
                      <td className="py-2 px-3 font-mono text-sm text-muted-foreground">int</td>
                      <td className="py-2 px-3 text-sm">Columna del error (opcional)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Code Example */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Code2 className="w-4 h-4" />
                  <span>Ejemplo:</span>
                </div>
                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                  <pre className="text-sm">
                    <code className="font-mono">
                      <span className="text-primary">raise</span>{" "}
                      <span className="text-foreground">OrionError(</span>
                      <span className="text-accent">"Variable no definida"</span>
                      <span className="text-foreground">, 5, 12)</span>
                    </code>
                  </pre>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Terminal className="w-4 h-4" />
                  <span>Salida:</span>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                  <pre className="text-sm">
                    <code className="font-mono text-destructive">
                      [OrionError] (line 5, col 12) Variable no definida
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* OrionSyntaxError */}
          <TabsContent value="syntax" className="space-y-4">
            <Card className="glass-effect border-primary/20 p-6">
              <h4 className="text-xl font-semibold mb-3 font-mono text-primary">
                class OrionSyntaxError(OrionError)
              </h4>
              <p className="text-foreground/80 mb-6">
                Errores de parsing o sintaxis.
              </p>

              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                  <pre className="text-sm">
                    <code className="font-mono">
                      <span className="text-primary">raise</span>{" "}
                      <span className="text-foreground">OrionSyntaxError(</span>
                      <span className="text-accent">{"\"Unexpected token '}'\"" }</span>
                      <span className="text-foreground">, 3, 15)</span>
                    </code>
                  </pre>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                  <pre className="text-sm">
                    <code className="font-mono text-destructive">
                      {"[OrionError] (line 3, col 15) Syntax disruption: Unexpected token '}'"}
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* OrionRuntimeError */}
          <TabsContent value="runtime" className="space-y-4">
            <Card className="glass-effect border-primary/20 p-6">
              <h4 className="text-xl font-semibold mb-3 font-mono text-primary">
                class OrionRuntimeError(OrionError)
              </h4>
              <p className="text-foreground/80 mb-6">
                Errores durante la ejecución del programa.
              </p>

              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                  <pre className="text-sm">
                    <code className="font-mono">
                      <span className="text-primary">raise</span>{" "}
                      <span className="text-foreground">OrionRuntimeError(</span>
                      <span className="text-accent">"Division by zero"</span>
                      <span className="text-foreground">, 10, 5)</span>
                    </code>
                  </pre>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                  <pre className="text-sm">
                    <code className="font-mono text-destructive">
                      [OrionError] (line 10, col 5) Runtime fault: Division by zero
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* OrionTypeError */}
          <TabsContent value="type" className="space-y-4">
            <Card className="glass-effect border-primary/20 p-6">
              <h4 className="text-xl font-semibold mb-3 font-mono text-primary">
                class OrionTypeError(OrionError)
              </h4>
              <p className="text-foreground/80 mb-6">
                Errores de incompatibilidad de tipos.
              </p>

              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                  <pre className="text-sm">
                    <code className="font-mono">
                      <span className="text-primary">raise</span>{" "}
                      <span className="text-foreground">OrionTypeError(</span>
                      <span className="text-accent">"Cannot add string to integer"</span>
                      <span className="text-foreground">, 8, 22)</span>
                    </code>
                  </pre>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                  <pre className="text-sm">
                    <code className="font-mono text-destructive">
                      [OrionError] (line 8, col 22) Type mismatch: Cannot add string to integer
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* OrionNameError */}
          <TabsContent value="name" className="space-y-4">
            <Card className="glass-effect border-primary/20 p-6">
              <h4 className="text-xl font-semibold mb-3 font-mono text-primary">
                class OrionNameError(OrionError)
              </h4>
              <p className="text-foreground/80 mb-6">
                Errores de nombres no definidos.
              </p>

              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                  <pre className="text-sm">
                    <code className="font-mono">
                      <span className="text-primary">raise</span>{" "}
                      <span className="text-foreground">OrionNameError(</span>
                      <span className="text-accent">"foo"</span>
                      <span className="text-foreground">, 2, 10)</span>
                    </code>
                  </pre>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                  <pre className="text-sm">
                    <code className="font-mono text-destructive">
                      [OrionError] (line 2, col 10) Unknown identifier 'foo'
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* OrionFunctionError */}
          <TabsContent value="function" className="space-y-4">
            <Card className="glass-effect border-primary/20 p-6">
              <h4 className="text-xl font-semibold mb-3 font-mono text-primary">
                class OrionFunctionError(OrionError)
              </h4>
              <p className="text-foreground/80 mb-6">
                Errores relacionados con funciones.
              </p>

              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                  <pre className="text-sm">
                    <code className="font-mono">
                      <span className="text-primary">raise</span>{" "}
                      <span className="text-foreground">OrionFunctionError(</span>
                      <span className="text-accent">"Too many arguments in call to 'print'"</span>
                      <span className="text-foreground">, 4, 8)</span>
                    </code>
                  </pre>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
                  <pre className="text-sm">
                    <code className="font-mono text-destructive">
                      [OrionError] (line 4, col 8) Function failure: Too many arguments in call to 'print'
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Utility Function */}
      <Card className="glass-effect border-primary/20 p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-primary"></span> Utilidad global: raise_orion_error()
        </h3>
        <p className="text-foreground/80 mb-4">
          Función de conveniencia para lanzar errores sin crear instancias manualmente.
        </p>

        <div className="glass-effect rounded-lg p-4 border border-primary/10 mb-4">
          <pre className="text-sm">
            <code className="font-mono text-primary">
              def raise_orion_error(error_type, message, line=None, column=None)
            </code>
          </pre>
        </div>

        {/* Parameters Table */}
        <div className="overflow-x-auto mb-6">
          <p className="text-sm font-semibold mb-2">Parámetros:</p>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-primary/20">
                <th className="text-left py-2 px-3 text-sm font-semibold">Nombre</th>
                <th className="text-left py-2 px-3 text-sm font-semibold">Tipo</th>
                <th className="text-left py-2 px-3 text-sm font-semibold">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-primary/10">
                <td className="py-2 px-3 font-mono text-sm text-accent">error_type</td>
                <td className="py-2 px-3 font-mono text-sm text-muted-foreground">str</td>
                <td className="py-2 px-3 text-sm">Tipo de error (syntax, runtime, type, name, function)</td>
              </tr>
              <tr className="border-b border-primary/10">
                <td className="py-2 px-3 font-mono text-sm text-accent">message</td>
                <td className="py-2 px-3 font-mono text-sm text-muted-foreground">str</td>
                <td className="py-2 px-3 text-sm">Descripción del error</td>
              </tr>
              <tr className="border-b border-primary/10">
                <td className="py-2 px-3 font-mono text-sm text-accent">line</td>
                <td className="py-2 px-3 font-mono text-sm text-muted-foreground">int</td>
                <td className="py-2 px-3 text-sm">Línea del error (opcional)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono text-sm text-accent">column</td>
                <td className="py-2 px-3 font-mono text-sm text-muted-foreground">int</td>
                <td className="py-2 px-3 text-sm">Columna del error (opcional)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Example */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code2 className="w-4 h-4" />
            <span>Ejemplo:</span>
          </div>
          <div className="glass-effect rounded-lg p-4 border border-primary/10">
            <pre className="text-sm">
              <code className="font-mono">
                <span className="text-foreground">raise_orion_error(</span>
                <span className="text-accent">"syntax"</span>
                <span className="text-foreground">, </span>
                <span className="text-accent">{"\"Unexpected token '}'\"" }</span>
                <span className="text-foreground">, 3, 15)</span>
              </code>
            </pre>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span>Salida:</span>
          </div>
          <div className="bg-background/50 rounded-lg p-4 border border-destructive/30">
            <pre className="text-sm">
              <code className="font-mono text-destructive">
                {"[OrionError] (line 3, col 15) Syntax disruption: Unexpected token '}'"}
              </code>
            </pre>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ErrorsModule;
