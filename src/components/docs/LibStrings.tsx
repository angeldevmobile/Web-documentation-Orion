import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Type, Code2, Terminal, Sparkles, Zap } from "lucide-react";

const LibStrings = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Type className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: strings.orx</h2>
						<p className="text-muted-foreground text-lg">
							🧬 Orion Strings — Manipulación de Texto Futurista
						</p>
						<p className="text-foreground/70 mt-2">
							Proveer funciones avanzadas y expresivas para procesar texto de
							forma moderna, elegante y simbólicamente poderosa.
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
					El módulo strings encapsula operaciones comunes de manipulación de
					texto, además de extensiones futuristas inspiradas en conceptos como
					simetría, caos controlado y energía visual (efectos "glow" y
					"glitch").
				</p>
				<p className="text-foreground/70">
					Permite desde simples transformaciones hasta efectos dinámicos sobre
					cadenas.
				</p>
			</Card>

			{/* Function Categories */}
			<div>
				<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
					<span className="text-primary">📚</span> Categorías de Funciones
				</h3>

				<Tabs defaultValue="basic" className="w-full">
					<TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
						<TabsTrigger value="basic">Básicas</TabsTrigger>
						<TabsTrigger value="split">División</TabsTrigger>
						<TabsTrigger value="search">Búsqueda</TabsTrigger>
						<TabsTrigger value="regex">Regex</TabsTrigger>
						<TabsTrigger value="futuristic">Futuristas</TabsTrigger>
						<TabsTrigger value="encoding">Codificación</TabsTrigger>
					</TabsList>

					{/* Basic Operations */}
					<TabsContent value="basic" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🔤</span> Operaciones Básicas
							</h4>

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
												length(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Retorna la longitud de s.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												upper(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Convierte a mayúsculas.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												lower(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Convierte a minúsculas.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												title(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Capitaliza cada palabra.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												reverse(s)
											</td>
											<td className="py-2 px-3 text-sm">Invierte el texto.</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												strip(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Elimina espacios al inicio y final.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Split & Join */}
					<TabsContent value="split" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🔗</span> División y Unión
							</h4>

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
												split(s, sep=None)
											</td>
											<td className="py-2 px-3 text-sm">
												Divide s en una lista usando sep.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												join(lst, sep=" ")
											</td>
											<td className="py-2 px-3 text-sm">
												Une una lista de textos con el separador sep.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Search & Replace */}
					<TabsContent value="search" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🔍</span> Búsqueda y Reemplazo
							</h4>

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
												replace(s, old, new)
											</td>
											<td className="py-2 px-3 text-sm">
												Sustituye old por new en s.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												contains(s, sub)
											</td>
											<td className="py-2 px-3 text-sm">
												Verifica si sub está dentro de s.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												starts_with(s, sub)
											</td>
											<td className="py-2 px-3 text-sm">
												Retorna True si s comienza con sub.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												ends_with(s, sub)
											</td>
											<td className="py-2 px-3 text-sm">
												Retorna True si s termina con sub.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Regex */}
					<TabsContent value="regex" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🔣</span> Expresiones Regulares
							</h4>

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
												match(pattern, s)
											</td>
											<td className="py-2 px-3 text-sm">
												Comprueba si s coincide con el patrón.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												find(pattern, s)
											</td>
											<td className="py-2 px-3 text-sm">
												Devuelve todas las coincidencias.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												replace_regex(pattern, repl, s)
											</td>
											<td className="py-2 px-3 text-sm">
												Sustituye texto basado en una regex.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Futuristic Extensions */}
					<TabsContent value="futuristic" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<Zap className="w-5 h-5 text-primary" />
								<span className="text-primary">🪐</span> Extensiones Futuristas
								Orion
							</h4>

							<div className="overflow-x-auto mb-6">
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
												pad(s, width, char=" ")
											</td>
											<td className="py-2 px-3 text-sm">
												Rellena s a la derecha hasta width.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												center(s, width, char=" ")
											</td>
											<td className="py-2 px-3 text-sm">
												Centra el texto con relleno.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												orbit(s, times=2)
											</td>
											<td className="py-2 px-3 text-sm">
												Rota los caracteres circularmente. Ej: "orion" →
												"ionor".
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												mirror(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Refleja el texto, creando simetría. Ej: "orion" →
												"orionnoiro".
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												glitch(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Desordena los caracteres aleatoriamente. Ej: "orion" →
												"ionro".
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												glow(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Devuelve el texto en modo brillante, ideal para
												interfaces visuales. Ej: "✨ORION✨".
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Futuristic Example */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo de funciones futuristas:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-foreground">msg = </span>
											<span className="text-accent">"orion"</span>
											<br />
											<span className="text-foreground">
												strings.orbit(msg, 2)
											</span>
											<span className="text-muted-foreground"> # "ionor"</span>
											<br />
											<span className="text-foreground">
												strings.mirror(msg)
											</span>
											<span className="text-muted-foreground">
												{" "}
												# "orionnoiro"
											</span>
											<br />
											<span className="text-foreground">strings.glow(msg)</span>
											<span className="text-muted-foreground">
												{" "}
												# "✨ORION✨"
											</span>
										</code>
									</pre>
								</div>
							</div>
						</Card>
					</TabsContent>

					{/* Encoding */}
					<TabsContent value="encoding" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🔐</span> Codificación y
								Decodificación
							</h4>

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
												encode_base64(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Codifica el texto en Base64.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												decode_base64(s)
											</td>
											<td className="py-2 px-3 text-sm">
												Decodifica texto desde Base64.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>
				</Tabs>
			</div>

			{/* Complete Example */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">💫</span> Ejemplo de Uso
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
								<span className="text-foreground">strings</span>
								<br />
								<br />
								<span className="text-foreground">msg = </span>
								<span className="text-accent">"orion"</span>
								<br />
								<span className="text-foreground">show(strings.glow(msg))</span>
								<span className="text-muted-foreground"> # ✨ORION✨</span>
								<br />
								<span className="text-foreground">
									show(strings.mirror(msg))
								</span>
								<span className="text-muted-foreground"> # orionnoiro</span>
								<br />
								<span className="text-foreground">
									show(strings.orbit(msg, 2))
								</span>
								<span className="text-muted-foreground"># ionor</span>
								<br />
								<span className="text-foreground">
									show(strings.glitch(msg))
								</span>
								<span className="text-muted-foreground">
									# rioon (aleatorio)
								</span>
								<br />
								<span className="text-foreground">
									show(strings.encode_base64(msg))
								</span>
								<span className="text-muted-foreground"># b3Jpb24=</span>
							</code>
						</pre>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Terminal className="w-4 h-4" />
						<span>Salida:</span>
					</div>
					<div className="bg-background/50 rounded-lg p-4 border border-primary/30">
						<pre className="text-sm">
							<code className="font-mono text-primary">
								✨ORION✨
								<br />
								orionnoiro
								<br />
								ionor
								<br />
								rioon
								<br />
								b3Jpb24=
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary">🌠</span> Filosofía del Módulo
				</h3>
				<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
					<p className="text-foreground/80 italic text-lg mb-2">
						"Cada cadena es una onda; manipular texto en Orion es reordenar la
						vibración del mensaje."
					</p>
					<p className="text-muted-foreground text-sm">
						— Manifiesto del Núcleo de Orion
					</p>
				</div>
			</Card>
		</div>
	);
};

export default LibStrings;
