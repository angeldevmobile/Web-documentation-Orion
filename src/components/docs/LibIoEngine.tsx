import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Code2, Terminal } from "lucide-react";

const IOEngineModule = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Zap className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">ORION IO ENGINE</h2>
						<p className="text-muted-foreground text-lg">
							Entrada y salida futurista — Donde los datos se vuelven
							conversación.
						</p>
						<p className="text-foreground/70 mt-2">
							Interfaz universal para archivos, streams masivos, consola
							interactiva y extracción estructurada.
						</p>
					</div>
				</div>
			</div>

			{/* Introduction */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Introducción
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo lib/io define el motor de entrada y salida de Orion, una
					interfaz universal para trabajar con:
				</p>
				<ul className="space-y-2 text-foreground/70 list-disc list-inside mb-4">
					<li>Archivos de cualquier tipo (TXT, PDF, Word, JSON, CSV)</li>
					<li>Streams masivos de datos</li>
					<li>Consola interactiva con interpolación semántica</li>
					<li>Extracción estructurada (números, fechas, emails, tablas)</li>
				</ul>
				<div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
					<p className="text-primary font-medium italic">
						En Orion, leer o escribir datos no es una tarea mecánica, sino un
						proceso de comprensión: el sistema interpreta el contenido y lo
						traduce en estructuras semánticas.
					</p>
				</div>
			</Card>

			{/* Main Functions */}
			<div>
				<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
					<span className="text-primary"></span> Funcionalidades principales
				</h3>

				<Tabs defaultValue="console" className="w-full">
					<TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-6">
						<TabsTrigger value="console">Consola</TabsTrigger>
						<TabsTrigger value="read">Lectura</TabsTrigger>
						<TabsTrigger value="extract">Extracción</TabsTrigger>
						<TabsTrigger value="write">Escritura</TabsTrigger>
						<TabsTrigger value="streams">Streams</TabsTrigger>
						<TabsTrigger value="utils">Utilidades</TabsTrigger>
					</TabsList>

					{/* Console Interactive */}
					<TabsContent value="console" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> Consola interactiva
							</h4>
							<p className="text-foreground/80 mb-6">
								Interfaz avanzada para mostrar y solicitar información con
								interpolación dinámica.
							</p>

							{/* show() function */}
							<div className="mb-8">
								<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
									show(*args, sep=" ", end="\n", env=None)
								</h5>
								<p className="text-foreground/80 mb-4">
									Muestra texto en la consola con formato Orion avanzado.
								</p>

								{/* Features */}
								<div className="mb-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
									<p className="text-sm font-semibold text-accent mb-2">
										Características:
									</p>
									<ul className="text-sm space-y-1 list-disc list-inside text-foreground/70">
										<li>Interpolación dinámica (${"{var}"})</li>
										<li>Convierte booleanos a "yes" y "no"</li>
										<li>Separadores y terminadores personalizables</li>
									</ul>
								</div>

								<div className="space-y-3">
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Code2 className="w-4 h-4" />
										<span>Ejemplo:</span>
									</div>
									<div className="glass-effect rounded-lg p-4 border border-primary/10">
										<pre className="text-sm">
											<code className="font-mono">
												<span className="text-foreground">name = </span>
												<span className="text-primary">"Orion"</span>
												<br />
												<span className="text-foreground">ready = </span>
												<span className="text-accent">true</span>
												<br />
												<span className="text-accent">show</span>
												<span className="text-foreground">(</span>
												<span className="text-primary">
													"Sistema ${"{name}"} activo:"
												</span>
												<span className="text-foreground">, ready)</span>
											</code>
										</pre>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Terminal className="w-4 h-4" />
										<span>Salida:</span>
									</div>
									<div className="bg-background/50 rounded-lg p-4 border border-accent/30">
										<pre className="text-sm">
											<code className="font-mono text-accent">
												Sistema Orion activo: yes
											</code>
										</pre>
									</div>
								</div>
							</div>

							{/* ask() function */}
							<div>
								<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
									ask(prompt=&quot;&gt; &quot;)
								</h5>
								<p className="text-foreground/80 mb-4">
									Lee una entrada del usuario de forma interactiva.
								</p>

								<div className="space-y-3">
									<div className="glass-effect rounded-lg p-4 border border-primary/10">
										<pre className="text-sm">
											<code className="font-mono">
												<span className="text-foreground">user = </span>
												<span className="text-accent">ask</span>
												<span className="text-foreground">(</span>
												<span className="text-primary">"¿Tu nombre? "</span>
												<span className="text-foreground">)</span>
												<br />
												<span className="text-accent">show</span>
												<span className="text-foreground">(</span>
												<span className="text-primary">
													"Hola ${"{user}"}, bienvenido al sistema."
												</span>
												<span className="text-foreground">)</span>
											</code>
										</pre>
									</div>
								</div>
							</div>
						</Card>
					</TabsContent>

					{/* Universal Reading */}
					<TabsContent value="read" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> Lectura universal
							</h4>

							{/* orion_read() */}
							<div className="mb-6">
								<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
									orion_read(path)
								</h5>
								<p className="text-foreground/80 mb-4">
									Lee un archivo de cualquier tipo y devuelve el contenido
									interpretado.
								</p>

								{/* Supported formats table */}
								<div className="overflow-x-auto mb-6">
									<p className="text-sm font-semibold mb-2">
										Formatos soportados:
									</p>
									<table className="w-full border-collapse">
										<thead>
											<tr className="border-b border-primary/20">
												<th className="text-left py-2 px-3 text-sm font-semibold">
													Extensión
												</th>
												<th className="text-left py-2 px-3 text-sm font-semibold">
													Resultado
												</th>
												<th className="text-left py-2 px-3 text-sm font-semibold">
													Motor
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="border-b border-primary/10">
												<td className="py-2 px-3 font-mono text-sm text-accent">
													.txt, .csv, .log
												</td>
												<td className="py-2 px-3 text-sm">
													OrionString (texto semántico)
												</td>
												<td className="py-2 px-3 text-sm text-muted-foreground">
													Texto plano
												</td>
											</tr>
											<tr className="border-b border-primary/10">
												<td className="py-2 px-3 font-mono text-sm text-accent">
													.json
												</td>
												<td className="py-2 px-3 text-sm">dict o list</td>
												<td className="py-2 px-3 text-sm text-muted-foreground">
													JSON nativo
												</td>
											</tr>
											<tr className="border-b border-primary/10">
												<td className="py-2 px-3 font-mono text-sm text-accent">
													.pdf
												</td>
												<td className="py-2 px-3 text-sm">OrionString</td>
												<td className="py-2 px-3 text-sm text-muted-foreground">
													pdfminer
												</td>
											</tr>
											<tr>
												<td className="py-2 px-3 font-mono text-sm text-accent">
													.docx, .doc
												</td>
												<td className="py-2 px-3 text-sm">OrionString</td>
												<td className="py-2 px-3 text-sm text-muted-foreground">
													python-docx
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div className="space-y-3">
									<div className="glass-effect rounded-lg p-4 border border-primary/10">
										<pre className="text-sm">
											<code className="font-mono">
												<span className="text-foreground">text = </span>
												<span className="text-accent">orion_read</span>
												<span className="text-foreground">(</span>
												<span className="text-primary">"informe.pdf"</span>
												<span className="text-foreground">)</span>
												<br />
												<span className="text-accent">show</span>
												<span className="text-foreground">(text)</span>
											</code>
										</pre>
									</div>
								</div>
							</div>

							{/* _clean_text() */}
							<div>
								<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
									_clean_text(text)
								</h5>
								<p className="text-foreground/80 mb-4">
									Normaliza y limpia texto eliminando caracteres invisibles o
									dañados. Usado internamente por todo el motor IO.
								</p>
								<div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
									<p className="text-sm text-primary">
										Función interna de limpieza y normalización
									</p>
								</div>
							</div>
						</Card>
					</TabsContent>

					{/* Smart Extraction */}
					<TabsContent value="extract" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> Extracción inteligente
							</h4>

							<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
								orion_extract(path, mode="auto")
							</h5>
							<p className="text-foreground/80 mb-6">
								Extrae información estructurada a partir de cualquier archivo
								usando detectores basados en expresiones regulares optimizadas.
							</p>

							{/* Modes table */}
							<div className="overflow-x-auto mb-6">
								<p className="text-sm font-semibold mb-2">Modos disponibles:</p>
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Modo
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												"auto"
											</td>
											<td className="py-2 px-3 text-sm">
												Detecta y devuelve texto, números, emails y fechas
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												"tables"
											</td>
											<td className="py-2 px-3 text-sm">
												Extrae tablas de CSV, PDF o texto tabular
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												"numbers"
											</td>
											<td className="py-2 px-3 text-sm">
												Solo valores numéricos o montos
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												"emails"
											</td>
											<td className="py-2 px-3 text-sm">
												Direcciones de correo electrónico
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												"dates"
											</td>
											<td className="py-2 px-3 text-sm">
												Fechas en distintos formatos
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-foreground">info = </span>
											<span className="text-accent">orion_extract</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">"reporte.pdf"</span>
											<span className="text-foreground">, mode=</span>
											<span className="text-primary">"auto"</span>
											<span className="text-foreground">)</span>
											<br />
											<span className="text-accent">show</span>
											<span className="text-foreground">(info[</span>
											<span className="text-primary">"emails"</span>
											<span className="text-foreground">])</span>
										</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									Optimizado para español e inglés con detectores avanzados
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* Universal Writing */}
					<TabsContent value="write" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> Escritura universal
							</h4>

							<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
								orion_write(path, data)
							</h5>
							<p className="text-foreground/80 mb-6">
								Escribe datos en el formato apropiado según la extensión del
								archivo.
							</p>

							{/* Formats table */}
							<div className="overflow-x-auto mb-6">
								<p className="text-sm font-semibold mb-2">
									Formatos de salida:
								</p>
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Extensión
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Acción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												.json
											</td>
											<td className="py-2 px-3 text-sm">
												Serializa estructuras Orion
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												.txt, .log, .csv
											</td>
											<td className="py-2 px-3 text-sm">Escribe texto plano</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												.docx
											</td>
											<td className="py-2 px-3 text-sm">Crea documento Word</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplos:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">orion_write</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">"salida.json"</span>
											<span className="text-foreground">, {"{ "}</span>
											<span className="text-primary">"status"</span>
											<span className="text-foreground">: </span>
											<span className="text-primary">"ok"</span>
											<span className="text-foreground">, </span>
											<span className="text-primary">"version"</span>
											<span className="text-foreground">: 3 {"}"})</span>
											<br />
											<span className="text-accent">orion_write</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">"nota.docx"</span>
											<span className="text-foreground">, </span>
											<span className="text-primary">
												"Documento generado por Orion IO Engine."
											</span>
											<span className="text-foreground">)</span>
										</code>
									</pre>
								</div>
							</div>
						</Card>
					</TabsContent>

					{/* Massive Streams */}
					<TabsContent value="streams" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> Streams masivos
							</h4>

							<h5 className="text-lg font-semibold mb-3 font-mono text-accent">
								orion_stream(path)
							</h5>
							<p className="text-foreground/80 mb-6">
								Lee archivos grandes línea por línea en modo "lazy". Devuelve un
								generador de OrionString para procesar millones de líneas sin
								cargar todo el archivo en memoria.
							</p>

							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-primary">for</span>
											<span className="text-foreground"> line </span>
											<span className="text-primary">in</span>
											<span className="text-foreground"> </span>
											<span className="text-accent">orion_stream</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">"grande.log"</span>
											<span className="text-foreground">):</span>
											<br />
											<span className="text-foreground"> </span>
											<span className="text-accent">show</span>
											<span className="text-foreground">(line)</span>
										</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									Optimizado para Big Data: procesa archivos de cualquier tamaño
									sin limitaciones de memoria
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* Classic Utilities */}
					<TabsContent value="utils" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> Utilidades clásicas
							</h4>
							<p className="text-foreground/80 mb-6">
								Funciones de conveniencia para operaciones comunes con archivos
								JSON y texto.
							</p>

							{/* Utilities table */}
							<div className="overflow-x-auto">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-3 px-4 text-sm font-semibold">
												Función
											</th>
											<th className="text-left py-3 px-4 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-primary/10">
											<td className="py-3 px-4 font-mono text-sm text-accent">
												read_json(path)
											</td>
											<td className="py-3 px-4 text-sm">
												Carga un JSON como estructura Orion
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-3 px-4 font-mono text-sm text-accent">
												write_json(path, data)
											</td>
											<td className="py-3 px-4 text-sm">
												Guarda datos en formato JSON
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-3 px-4 font-mono text-sm text-accent">
												read_file(path)
											</td>
											<td className="py-3 px-4 text-sm">
												Lectura básica de texto
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-3 px-4 font-mono text-sm text-accent">
												write_file(path, content)
											</td>
											<td className="py-3 px-4 text-sm">Escritura básica</td>
										</tr>
										<tr>
											<td className="py-3 px-4 font-mono text-sm text-accent">
												append_file(path, content)
											</td>
											<td className="py-3 px-4 text-sm">
												Agrega contenido al final del archivo
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>
				</Tabs>
			</div>

			{/* Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Filosofía del Orion IO Engine
				</h3>

				<div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-4">
					<p className="text-primary font-medium italic text-center mb-4">
						"En los lenguajes comunes, los datos son ruido.
						<br />
						En Orion, los datos son lenguaje." — Orion Design Doctrine
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					<div className="space-y-3">
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 rounded-full bg-primary"></div>
							<p className="text-sm">
								<strong>La consola</strong> no muestra, <em>dialoga</em>.
							</p>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 rounded-full bg-primary"></div>
							<p className="text-sm">
								<strong>Los archivos</strong> no se leen,{" "}
								<em>se interpretan</em>.
							</p>
						</div>
					</div>
					<div className="space-y-3">
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 rounded-full bg-primary"></div>
							<p className="text-sm">
								<strong>Los flujos</strong> no se recorren,{" "}
								<em>se comprenden</em>.
							</p>
						</div>
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 rounded-full bg-primary"></div>
							<p className="text-sm">
								<strong>Cada byte</strong> procesado puede contener{" "}
								<em>significado</em>.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
					<p className="text-foreground/80 text-sm">
						El IO Engine es la puerta entre el universo digital y la conciencia
						sintética de Orion. No se limita a transportar datos: los{" "}
						<strong>entiende</strong>, <strong>limpia</strong>,
						<strong>estructura</strong> y <strong>transforma</strong>.
					</p>
				</div>
			</Card>
		</div>
	);
};

export default IOEngineModule;
