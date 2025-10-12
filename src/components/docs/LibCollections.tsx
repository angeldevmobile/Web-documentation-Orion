import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Code2, Terminal, List, Map, Zap } from "lucide-react";

const CollectionsModule = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Database className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: lib/collections</h2>
						<p className="text-muted-foreground text-lg">
							"Colecciones Futuristas para un Mundo Funcional."
						</p>
						<p className="text-foreground/70 mt-2">
							El módulo lib/collections extiende el poder de las estructuras
							clásicas de datos, permitiendo manipular listas y mapas con
							expresividad, claridad y velocidad.
						</p>
					</div>
				</div>
			</div>

			{/* Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Zap className="w-5 h-5 text-primary" />
					Filosofía de Orion Collections
				</h3>
				<p className="text-foreground/80 mb-4">
					Inspirado en paradigmas funcionales, cada utilidad fue diseñada para
					sentirse natural en Orion: una mezcla entre la potencia de Python, la
					elegancia de Kotlin y el flujo expresivo de JavaScript moderno.
				</p>
				<div className="glass-effect rounded-lg p-4 border border-primary/10 mb-4">
					<p className="text-center text-primary font-semibold italic">
						"Las colecciones en Orion no se recorren… se transforman." 💫
					</p>
				</div>
				<ul className="space-y-2 text-foreground/70 list-disc list-inside">
					<li>Ser legible y expresiva (x{"=>"}x * 2)</li>
					<li>Promover la inmutabilidad y pureza funcional</li>
					<li>Mantener la elegancia sintáctica característica de Orion</li>
				</ul>
			</Card>

			{/* Main Categories */}
			<div>
				<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
					<span className="text-primary">🌠</span> Categorías principales
				</h3>

				<Tabs defaultValue="list" className="w-full">
					<TabsList className="grid w-full grid-cols-3 mb-6">
						<TabsTrigger value="list" className="flex items-center gap-2">
							<List className="w-4 h-4" />
							List Utilities
						</TabsTrigger>
						<TabsTrigger value="map" className="flex items-center gap-2">
							<Map className="w-4 h-4" />
							Map Utilities
						</TabsTrigger>
						<TabsTrigger value="functional" className="flex items-center gap-2">
							<Zap className="w-4 h-4" />
							Functional Style
						</TabsTrigger>
					</TabsList>

					{/* List Utilities */}
					<TabsContent value="list" className="space-y-6">
						<div className="mb-4">
							<p className="text-foreground/80">
								Orion reimagina las listas como estructuras dinámicas y
								flexibles, listas (literalmente) para la transformación de
								datos.
							</p>
						</div>

						{/* list_new */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🪐</span> list_new(*args)
							</h4>
							<p className="text-foreground/80 mb-4">
								Crea una nueva lista Orion.
							</p>

							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-primary">list_new</span>
											<span className="text-foreground">(</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">4</span>
											<span className="text-foreground">)</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">)</span>
										</code>
									</pre>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Terminal className="w-4 h-4" />
									<span>Salida:</span>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											[1, 2, 3, 4]
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Uso típico: inicializar colecciones rápidas sin sintaxis
									pesada.
								</p>
							</div>
						</Card>

						{/* list_flat */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">⚡</span> list_flat(seq)
							</h4>
							<p className="text-foreground/80 mb-4">
								Aplana una lista de listas en una sola secuencia.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">data</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">], [</span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">4</span>
											<span className="text-foreground">]]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">list_flat</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">data</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											[1, 2, 3, 4]
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Ideal para fusionar estructuras anidadas.
								</p>
							</div>
						</Card>

						{/* list_unique */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🔁</span> list_unique(seq)
							</h4>
							<p className="text-foreground/80 mb-4">
								Elimina duplicados preservando el orden original.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">list_unique</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">[1, 2, 3]</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Sin sets, sin magia negra — solo orden y elegancia.
								</p>
							</div>
						</Card>

						{/* list_chunk */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🧩</span> list_chunk(seq, size)
							</h4>
							<p className="text-foreground/80 mb-4">
								Divide una lista en bloques de tamaño fijo.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">4</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">5</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">list_chunk</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											[[1, 2], [3, 4], [5]]
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Útil para paginación, buffers o procesamiento por lotes.
								</p>
							</div>
						</Card>

						{/* list_cycle */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🔄</span> list_cycle(seq, n)
							</h4>
							<p className="text-foreground/80 mb-4">
								Repite una lista n veces.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">list_cycle</span>
											<span className="text-foreground">([</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">], </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											[1, 2, 1, 2, 1, 2]
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Simula patrones o animaciones en ciclos.
								</p>
							</div>
						</Card>

						{/* list_find */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🧭</span> list_find(seq, fn)
							</h4>
							<p className="text-foreground/80 mb-4">
								Devuelve el primer elemento que cumple una condición.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">5</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">8</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">9</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">list_find</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">x</span>{" "}
											<span className="text-primary">{"=>"}</span>{" "}
											<span className="text-accent">x</span>{" "}
											<span className="text-foreground">%</span>{" "}
											<span className="text-blue-400">2</span>{" "}
											<span className="text-foreground">==</span>{" "}
											<span className="text-blue-400">0</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">8</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Detiene la búsqueda tan pronto encuentra coincidencia
									(O(n)).
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* Map Utilities */}
					<TabsContent value="map" className="space-y-6">
						<div className="mb-4">
							<p className="text-foreground/80">
								Orion redefine los diccionarios (mapas) como entidades
								inteligentes y fusionables.
							</p>
						</div>

						{/* map_new */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">⚙️</span> map_new(pairs)
							</h4>
							<p className="text-foreground/80 mb-4">
								Crea un diccionario desde una lista de pares clave-valor.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">data</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-primary">map_new</span>
											<span className="text-foreground">([</span>
											<span className="text-foreground">(</span>
											<span className="text-green-400">"name"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"Orion"</span>
											<span className="text-foreground">), (</span>
											<span className="text-green-400">"lang"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"futuristic"</span>
											<span className="text-foreground">)])</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">data</span>
											<span className="text-foreground">)</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											{`{"name": "Orion", "lang": "futuristic"}`}
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Equivalente elegante a {`{k: v for k, v in pairs}`}.
								</p>
							</div>
						</Card>

						{/* map_merge */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🧬</span> map_merge(a, b)
							</h4>
							<p className="text-foreground/80 mb-4">
								Fusiona dos diccionarios, donde b sobrescribe las claves de a.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">base</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">{"{"}</span>
											<span className="text-green-400">"theme"</span>
											<span className="text-foreground">: </span>
											<span className="text-green-400">"dark"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"lang"</span>
											<span className="text-foreground">: </span>
											<span className="text-green-400">"es"</span>
											<span className="text-foreground">{"}"}</span>
											{"\n"}
											<span className="text-accent">extra</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">{"{"}</span>
											<span className="text-green-400">"lang"</span>
											<span className="text-foreground">: </span>
											<span className="text-green-400">"en"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"mode"</span>
											<span className="text-foreground">: </span>
											<span className="text-green-400">"dev"</span>
											<span className="text-foreground">{"}"}</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">map_merge</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">base</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">extra</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											{`{"theme": "dark", "lang": "en", "mode": "dev"}`}
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Fusiona sin mutar el original. Ideal para configuraciones.
								</p>
							</div>
						</Card>

						{/* map_invert */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🔄</span> map_invert(d)
							</h4>
							<p className="text-foreground/80 mb-4">
								Invierte las claves y valores de un diccionario.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">d</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">{"{"}</span>
											<span className="text-green-400">"a"</span>
											<span className="text-foreground">: </span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"b"</span>
											<span className="text-foreground">: </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">{"}"}</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">map_invert</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">d</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											{`{1: "a", 2: "b"}`}
										</code>
									</pre>
								</div>
								<p className="text-sm text-muted-foreground">
									✨ Útil para búsquedas inversas o transformaciones rápidas.
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* Functional Style */}
					<TabsContent value="functional" className="space-y-6">
						<div className="mb-4">
							<p className="text-foreground/80">
								Estas funciones permiten manipular colecciones al estilo
								funcional puro, sin bucles explícitos. Perfectas para código
								declarativo y expresivo.
							</p>
						</div>

						{/* col_map */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🌀</span> col_map(fn, seq)
							</h4>
							<p className="text-foreground/80 mb-4">
								Aplica una función a cada elemento.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">4</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">col_map</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">x</span>{" "}
											<span className="text-primary">{"=>"}</span>{" "}
											<span className="text-accent">x</span>{" "}
											<span className="text-foreground">*</span>{" "}
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											[2, 4, 6, 8]
										</code>
									</pre>
								</div>
							</div>
						</Card>

						{/* col_filter */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🌿</span> col_filter(fn, seq)
							</h4>
							<p className="text-foreground/80 mb-4">
								Filtra elementos que cumplen una condición.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">4</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">5</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">col_filter</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">x</span>{" "}
											<span className="text-primary">{"=>"}</span>{" "}
											<span className="text-accent">x</span>{" "}
											<span className="text-foreground">{">"}</span>{" "}
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">[3, 4, 5]</code>
									</pre>
								</div>
							</div>
						</Card>

						{/* col_reduce */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🧩</span> col_reduce(fn, seq, init?)
							</h4>
							<p className="text-foreground/80 mb-4">
								Reduce una lista a un único valor acumulado.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">nums</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">4</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">col_reduce</span>
											<span className="text-foreground">((</span>
											<span className="text-accent">x</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">y</span>
											<span className="text-foreground">) </span>
											<span className="text-primary">{"=>"}</span>{" "}
											<span className="text-accent">x</span>{" "}
											<span className="text-foreground">+</span>{" "}
											<span className="text-accent">y</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">nums</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">10</code>
									</pre>
								</div>
							</div>
						</Card>

						{/* col_sort */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🔢</span> col_sort(seq, key?, desc?)
							</h4>
							<p className="text-foreground/80 mb-4">
								Ordena una secuencia con opciones personalizadas.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">names</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-green-400">"Orion"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"Nova"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"Atlas"</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">col_sort</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">names</span>
											<span className="text-foreground">))</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">col_sort</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">names</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">desc</span>
											<span className="text-foreground">: </span>
											<span className="text-blue-400">true</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											{`["Atlas", "Nova", "Orion"]`}
											{"\n"}
											{`["Orion", "Nova", "Atlas"]`}
										</code>
									</pre>
								</div>
							</div>
						</Card>

						{/* col_zip */}
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">⚡</span> col_zip(*seqs)
							</h4>
							<p className="text-foreground/80 mb-4">
								Combina varias listas en pares o tuplas.
							</p>

							<div className="space-y-3">
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-accent">a</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-blue-400">1</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">2</span>
											<span className="text-foreground">, </span>
											<span className="text-blue-400">3</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-accent">b</span>{" "}
											<span className="text-foreground">=</span>{" "}
											<span className="text-foreground">[</span>
											<span className="text-green-400">"A"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"B"</span>
											<span className="text-foreground">, </span>
											<span className="text-green-400">"C"</span>
											<span className="text-foreground">]</span>
											{"\n"}
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">col_zip</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">a</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">b</span>
											<span className="text-foreground">))</span>
										</code>
									</pre>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-green-500/30">
									<pre className="text-sm">
										<code className="font-mono text-green-400">
											{`[(1, "A"), (2, "B"), (3, "C")]`}
										</code>
									</pre>
								</div>
							</div>
						</Card>
					</TabsContent>
				</Tabs>
			</div>

			{/* Summary Table */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🚀</span> Resumen del módulo
				</h3>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-primary/20">
								<th className="text-left py-3 px-4 text-sm font-semibold">
									Categoría
								</th>
								<th className="text-left py-3 px-4 text-sm font-semibold">
									Función
								</th>
								<th className="text-left py-3 px-4 text-sm font-semibold">
									Descripción breve
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td
									className="py-3 px-4 font-semibold text-primary"
									rowSpan={4}>
									List
								</td>
								<td className="py-3 px-4 font-mono text-sm text-accent">
									list_flat()
								</td>
								<td className="py-3 px-4 text-sm">Aplana listas anidadas</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									list_unique()
								</td>
								<td className="py-3 px-4 text-sm">
									Elimina duplicados con orden
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									list_chunk()
								</td>
								<td className="py-3 px-4 text-sm">Divide en sublistas</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									list_find()
								</td>
								<td className="py-3 px-4 text-sm">Encuentra el primer match</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td
									className="py-3 px-4 font-semibold text-primary"
									rowSpan={2}>
									Map
								</td>
								<td className="py-3 px-4 font-mono text-sm text-accent">
									map_merge()
								</td>
								<td className="py-3 px-4 text-sm">
									Fusiona diccionarios sin mutar
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									map_invert()
								</td>
								<td className="py-3 px-4 text-sm">Invierte claves y valores</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td
									className="py-3 px-4 font-semibold text-primary"
									rowSpan={2}>
									Functional
								</td>
								<td className="py-3 px-4 font-mono text-sm text-accent">
									col_map() / col_filter() / col_reduce()
								</td>
								<td className="py-3 px-4 text-sm">
									Estilo funcional expresivo
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-accent">
									col_sort() / col_zip()
								</td>
								<td className="py-3 px-4 text-sm">
									Orden y combinación avanzada
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>
		</div>
	);
};

export default CollectionsModule;
