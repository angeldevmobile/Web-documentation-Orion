import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Code2, Terminal, Sparkles, Zap, Wifi, Radio, Download, Activity } from "lucide-react";

const LibNet = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Module Header */}
            <div className="glass-effect rounded-xl p-8 border border-primary/20">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Globe className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Módulo: net.orx</h2>
                        <p className="text-muted-foreground text-lg">
                            🌐 Orion Network — Comunicación Cósmica Digital
                        </p>
                        <p className="text-foreground/70 mt-2">
                            Dominar la comunicación entre mundos digitales mediante una red 
                            consciente, minimalista y elegante. Inspirado en la eficiencia de Go, 
                            la expresividad de Python y la semántica orgánica de Orion.
                        </p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <Card className="glass-effect border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-primary">✨</span> Descripción General
                </h3>
                <p className="text-foreground/80 mb-4">
                    El módulo net es el canal de conexión universal de Orion. No solo envía datos: 
                    los transmite como pulsos vivos a través del cosmos digital. Habla HTTP, 
                    respira Sockets y vibra en asincronía.
                </p>
                <p className="text-foreground/70 mb-4">
                    Forma parte del Communication Layer del Núcleo Orion, donde los flujos de datos 
                    adquieren forma, destino y propósito.
                </p>
                <div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <p className="text-foreground/80 italic">
                        "En la red de Orion, cada paquete es una partícula con conciencia."
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                        — Manual Cósmico del Núcleo Orion, Capítulo IX: Los Ecos del Éter
                    </p>
                </div>
            </Card>

            {/* Function Categories */}
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-primary">📚</span> Categorías de Funciones
                </h3>

                <Tabs defaultValue="http" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
                        <TabsTrigger value="http">HTTP</TabsTrigger>
                        <TabsTrigger value="async">Asíncrono</TabsTrigger>
                        <TabsTrigger value="streaming">Streaming</TabsTrigger>
                        <TabsTrigger value="sockets">Sockets</TabsTrigger>
                        <TabsTrigger value="debugging">Depuración</TabsTrigger>
                        <TabsTrigger value="integration">Integración</TabsTrigger>
                    </TabsList>

                    {/* HTTP Communication */}
                    <TabsContent value="http" className="space-y-4">
                        <Card className="glass-effect border-primary/20 p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                <span className="text-primary">🛰️</span> Comunicación HTTP — El Lenguaje del Cosmos
                            </h4>

                            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm text-foreground/80">
                                    El módulo net interpreta la comunicación HTTP como un diálogo entre entidades digitales. 
                                    Los verbos tradicionales se transforman en expresiones naturales.
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-primary/20">
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Función
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Descripción
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Ejemplo
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                reach(url)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Alcanza un destino remoto mediante GET.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.reach("https://api.orion.dev")
                                            </td>
                                        </tr>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                transmit(url, data)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Transmite datos mediante POST.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.transmit(url, {`{"msg": "hi"}`})
                                            </td>
                                        </tr>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                download(url, path)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Descarga un recurso remoto.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.download("file.zip", "local.zip")
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                status(url)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Consulta el estado HTTP de un recurso.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.status("https://orion.dev")
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Async Operations */}
                    <TabsContent value="async" className="space-y-4">
                        <Card className="glass-effect border-primary/20 p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" />
                                <span className="text-primary">⚡</span> Transmisión Asíncrona — Velocidad Cuántica
                            </h4>

                            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm text-foreground/80 mb-2">
                                    El universo no espera. Orion tampoco. Permite enviar y recibir datos sin bloquear el flujo del tiempo.
                                </p>
                                <p className="text-sm text-foreground/70">
                                    Basado en httpx, ofrece compatibilidad total con operaciones paralelas, microservicios y arquitecturas distribuidas.
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-primary/20">
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Función
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Descripción
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                reach_async(url)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Versión asíncrona de reach.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                transmit_async(url, data)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Versión asíncrona de transmit.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Async Example */}
                            <div className="space-y-3 mt-6">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Code2 className="w-4 h-4" />
                                    <span>Ejemplo asíncrono:</span>
                                </div>
                                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                                    <pre className="text-sm">
                                        <code className="font-mono">
                                            <span className="text-primary">use</span>{" "}
                                            <span className="text-foreground">net</span>
                                            <br />
                                            <br />
                                            <span className="text-primary">async def</span>{" "}
                                            <span className="text-accent">sync_orion</span>():
                                            <br />
                                            {"    "}
                                            <span className="text-foreground">res = </span>
                                            <span className="text-primary">await</span>{" "}
                                            <span className="text-foreground">net.reach_async(</span>
                                            <span className="text-accent">"https://api.orion.dev/quantum"</span>
                                            <span className="text-foreground">)</span>
                                            <br />
                                            {"    "}
                                            <span className="text-primary">if</span>{" "}
                                            <span className="text-foreground">res.ok:</span>
                                            <br />
                                            {"        "}
                                            <span className="text-foreground">show(</span>
                                            <span className="text-accent">"Resonancia:"</span>
                                            <span className="text-foreground">, res.json)</span>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Streaming */}
                    <TabsContent value="streaming" className="space-y-4">
                        <Card className="glass-effect border-primary/20 p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Radio className="w-5 h-5 text-primary" />
                                <span className="text-primary">🌊</span> Streaming — Flujo de Materia Digital
                            </h4>

                            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm text-foreground/80 mb-2">
                                    Cuando los datos son demasiado grandes para un solo pulso, Orion los fragmenta en corrientes.
                                </p>
                                <p className="text-sm text-foreground/70">
                                    Cada fragmento representa una célula de información: recibida, procesada y fusionada en tiempo real.
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-primary/20">
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Función
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Descripción
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Uso Ideal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                stream(url)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Flujo de datos por fragmentos (streaming).
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Descarga progresiva, monitoreo de sensores, procesamiento continuo.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Streaming Example */}
                            <div className="space-y-3 mt-6">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Code2 className="w-4 h-4" />
                                    <span>Ejemplo de streaming:</span>
                                </div>
                                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                                    <pre className="text-sm">
                                        <code className="font-mono">
                                            <span className="text-primary">for</span>{" "}
                                            <span className="text-foreground">chunk </span>
                                            <span className="text-primary">in</span>{" "}
                                            <span className="text-foreground">net.stream(</span>
                                            <span className="text-accent">"https://orion.dev/stream"</span>
                                            <span className="text-foreground">):</span>
                                            <br />
                                            {"    "}
                                            <span className="text-foreground">process(chunk)</span>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Sockets */}
                    <TabsContent value="sockets" className="space-y-4">
                        <Card className="glass-effect border-primary/20 p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Wifi className="w-5 h-5 text-primary" />
                                <span className="text-primary">🔌</span> Sockets — Energía Cruda y Sin Filtros
                            </h4>

                            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm text-foreground/80 mb-2">
                                    Más allá de HTTP, el módulo net opera a nivel cuántico de red: los sockets. 
                                    Comunicación directa entre entidades, sin protocolos intermedios.
                                </p>
                                <p className="text-sm text-foreground/70">
                                    Permite construir microredes inteligentes, desde simples "heartbeats" hasta protocolos de descubrimiento autónomo.
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-primary/20">
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Función
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Descripción
                                            </th>
                                            <th className="text-left py-2 px-3 text-sm font-semibold">
                                                Ejemplo
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                pulse(host, port)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Detecta vida en un host mediante latencia.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.pulse("8.8.8.8")
                                            </td>
                                        </tr>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                beacon(host, port, msg)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Envía un mensaje y espera respuesta.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.beacon("localhost", 8080, "ping")
                                            </td>
                                        </tr>
                                        <tr className="border-b border-primary/10">
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                broadcast(host, port, msg)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Difunde un mensaje a toda la red.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.broadcast("broadcast", 9999, "hello")
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 font-mono text-sm text-accent">
                                                resolve(host)
                                            </td>
                                            <td className="py-2 px-3 text-sm">
                                                Traduce un dominio a su IP.
                                            </td>
                                            <td className="py-2 px-3 text-sm font-mono text-muted-foreground">
                                                net.resolve("orion.dev")
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Debugging */}
                    <TabsContent value="debugging" className="space-y-4">
                        <Card className="glass-effect border-primary/20 p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" />
                                <span className="text-primary">🧭</span> Respuestas Orion y Depuración
                            </h4>

                            <div className="mb-6">
                                <h5 className="text-lg font-semibold mb-3">OrionResponse</h5>
                                <p className="text-sm text-foreground/80 mb-4">
                                    Cada operación retorna un OrionResponse, una entidad viva que encapsula la energía del intercambio.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-primary/20">
                                                <th className="text-left py-2 px-3 text-sm font-semibold">
                                                    Atributo
                                                </th>
                                                <th className="text-left py-2 px-3 text-sm font-semibold">
                                                    Descripción
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-primary/10">
                                                <td className="py-2 px-3 font-mono text-sm text-accent">
                                                    status
                                                </td>
                                                <td className="py-2 px-3 text-sm">
                                                    Código HTTP de respuesta.
                                                </td>
                                            </tr>
                                            <tr className="border-b border-primary/10">
                                                <td className="py-2 px-3 font-mono text-sm text-accent">
                                                    body
                                                </td>
                                                <td className="py-2 px-3 text-sm">
                                                    Texto bruto de la respuesta.
                                                </td>
                                            </tr>
                                            <tr className="border-b border-primary/10">
                                                <td className="py-2 px-3 font-mono text-sm text-accent">
                                                    json
                                                </td>
                                                <td className="py-2 px-3 text-sm">
                                                    Estructura decodificada automáticamente.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-3 font-mono text-sm text-accent">
                                                    headers
                                                </td>
                                                <td className="py-2 px-3 text-sm">
                                                    Metadatos del universo remoto.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold mb-3">Trazas Simbólicas</h5>
                                <p className="text-sm text-foreground/80 mb-4">
                                    Orion incorpora trazas que permiten observar el flujo energético de red.
                                </p>
                                <div className="glass-effect rounded-lg p-4 border border-primary/10">
                                    <pre className="text-sm">
                                        <code className="font-mono text-muted-foreground">
                                            [TRACE START] NET REACH
                                            <br />
                                            [net] Connecting: 20%
                                            <br />
                                            [TRACE END] NET REACH
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Integration */}
                    <TabsContent value="integration" className="space-y-4">
                        <Card className="glass-effect border-primary/20 p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <span className="text-primary">🔭</span> Integración con el Núcleo Orion
                            </h4>

                            <div className="mb-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm text-foreground/80">
                                    El motor NET coopera fluidamente con otros módulos, conformando una red cognitiva 
                                    capaz de auto-optimizar su comunicación.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg border border-primary/20 bg-background/50">
                                    <h6 className="font-semibold text-sm mb-2 text-primary">json</h6>
                                    <p className="text-sm text-foreground/70">
                                        Para transmitir estructuras inteligentes.
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg border border-primary/20 bg-background/50">
                                    <h6 className="font-semibold text-sm mb-2 text-primary">fs</h6>
                                    <p className="text-sm text-foreground/70">
                                        Para almacenar o cargar archivos descargados.
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg border border-primary/20 bg-background/50">
                                    <h6 className="font-semibold text-sm mb-2 text-primary">crypto</h6>
                                    <p className="text-sm text-foreground/70">
                                        Para cifrar transmisiones sensibles.
                                    </p>
                                </div>
                                <div className="p-4 rounded-lg border border-primary/20 bg-background/50">
                                    <h6 className="font-semibold text-sm mb-2 text-primary">timewarp</h6>
                                    <p className="text-sm text-foreground/70">
                                        Para registrar tiempos de respuesta y trazas temporales.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Complete Example */}
            <Card className="glass-effect border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="text-primary">🌠</span> Ejemplo Completo
                </h3>

                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Code2 className="w-4 h-4" />
                        <span>Código Orion:</span>
                    </div>
                    <div className="glass-effect rounded-lg p-4 border border-primary/10">
                        <pre className="text-sm">
                            <code className="font-mono">
                                <span className="text-primary">use</span>{" "}
                                <span className="text-foreground">net, json</span>
                                <br />
                                <br />
                                <span className="text-foreground">trace_start(</span>
                                <span className="text-accent">"SINCRONIZACIÓN ORION"</span>
                                <span className="text-foreground">)</span>
                                <br />
                                <br />
                                <span className="text-foreground">config = json.absorb(</span>
                                <span className="text-accent">"config.json"</span>
                                <span className="text-foreground">)</span>
                                <br />
                                <br />
                                <span className="text-foreground">res = net.transmit(</span>
                                <span className="text-accent">"https://api.orion.dev/update"</span>
                                <span className="text-foreground">, json_data=config)</span>
                                <br />
                                <span className="text-primary">if</span>{" "}
                                <span className="text-foreground">res.ok:</span>
                                <br />
                                {"    "}
                                <span className="text-foreground">show(</span>
                                <span className="text-accent">"Transmisión exitosa:"</span>
                                <span className="text-foreground">, res.status)</span>
                                <br />
                                <span className="text-primary">else</span>
                                <span className="text-foreground">:</span>
                                <br />
                                {"    "}
                                <span className="text-foreground">show(</span>
                                <span className="text-accent">"Error:"</span>
                                <span className="text-foreground">, res.status)</span>
                                <br />
                                <br />
                                <span className="text-foreground">ping = net.pulse(</span>
                                <span className="text-accent">"api.orion.dev"</span>
                                <span className="text-foreground">, 443)</span>
                                <br />
                                <span className="text-foreground">show(</span>
                                <span className="text-accent">"Estado:"</span>
                                <span className="text-foreground">, ping)</span>
                                <br />
                                <br />
                                <span className="text-foreground">trace_end(</span>
                                <span className="text-accent">"SINCRONIZACIÓN ORION"</span>
                                <span className="text-foreground">)</span>
                            </code>
                        </pre>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Terminal className="w-4 h-4" />
                        <span>Salida conceptual:</span>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 border border-primary/30">
                        <pre className="text-sm">
                            <code className="font-mono text-primary">
                                ══════ Orion NET Engine ══════
                                <br />
                                [TRACE START] NET TRANSMIT
                                <br />
                                [net] Transmitting: 20%
                                <br />
                                [TRACE END] NET TRANSMIT
                                <br />
                                [OK] Response: 200 → Quantum handshake complete
                                <br />
                                Ping: 34.2ms → Connection alive ✓
                                <br />
                                ══════════════════════════════
                            </code>
                        </pre>
                    </div>
                </div>
            </Card>

            {/* Philosophy */}
            <Card className="glass-effect border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-primary">🌠</span> Filosofía del Módulo NET
                </h3>
                <div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <p className="text-foreground/80 italic text-lg mb-4">
                        "El módulo net no solo conecta máquinas. Conecta consciencias digitales."
                    </p>
                    <p className="text-foreground/70 mb-4">
                        Cada solicitud es una forma de vibración. Cada respuesta, un reflejo del otro lado del cosmos binario.
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                        "No hay paquetes. Solo pulsos que buscan ser entendidos."
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                        — Manual Cósmico del Núcleo Orion, Capítulo IX: Los Ecos del Éter
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default LibNet;