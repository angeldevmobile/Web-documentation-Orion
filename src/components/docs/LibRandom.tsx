import { Card } from "@/components/ui/card";
import { Shuffle, Code2, Terminal, Sparkles, Dna } from "lucide-react";

const LibRandom = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Shuffle className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: random.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion Random — Aleatoriedad Futurista
						</p>
						<p className="text-foreground/70 mt-2">
							Generar números aleatorios, secuencias y UUIDs con estilo
							futurista.
						</p>
					</div>
				</div>
			</div>

			{/* Description */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Descripción General
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo random de Orion provee acceso a generadores de aleatoriedad
					controlada, secuencias pseudoaleatorias y utilidades únicas como
					identificadores universales (UUID).
				</p>
				<p className="text-foreground/70">
					Está diseñado para simulaciones, juegos, generadores de datos o
					cualquier entorno donde la incertidumbre controlada sea parte del
					flujo lógico.
				</p>
			</Card>

			{/* Main Functions */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Funciones Principales
				</h3>

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
									int(a, b)
								</td>
								<td className="py-2 px-3 text-sm">
									Retorna un entero aleatorio entre a y b (inclusive).
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									random.int(1, 6) → 4
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									float()
								</td>
								<td className="py-2 px-3 text-sm">
									Retorna un número flotante aleatorio entre 0.0 y 1.0.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									random.float() → 0.8271
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									choice(seq)
								</td>
								<td className="py-2 px-3 text-sm">
									Retorna un elemento aleatorio de la secuencia seq.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									random.choice(["rojo","azul"]) → "azul"
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									shuffle(seq)
								</td>
								<td className="py-2 px-3 text-sm">
									Desordena los elementos de la lista in place y la devuelve.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									random.shuffle([1,2,3]) → [3,1,2]
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									uuidv4()
								</td>
								<td className="py-2 px-3 text-sm">
									Genera un identificador único universal (UUID versión 4).
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									"d29a1c2e-8f93-4211-90a7-3c3b91fd52f9"
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Usage Example */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Ejemplo de Uso
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
								<span className="text-foreground">random</span>
								<br />
								<br />
								<span className="text-foreground">id = random.uuidv4()</span>
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"ID generado:"</span>
								<span className="text-foreground">, id)</span>
								<br />
								<br />
								<span className="text-foreground">nums = [1, 2, 3, 4, 5]</span>
								<br />
								<span className="text-foreground">random.shuffle(nums)</span>
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Números mezclados:"</span>
								<span className="text-foreground">, nums)</span>
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Número aleatorio:"</span>
								<span className="text-foreground">, random.int(10, 100))</span>
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
								ID generado: d29a1c2e-8f93-4211-90a7-3c3b91fd52f9
								<br />
								Números mezclados: [3, 1, 5, 2, 4]
								<br />
								Número aleatorio: 47
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Futuristic Concept */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Concepto Futurista
				</h3>
				<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
					<p className="text-foreground/80 italic text-lg">
						"Cada número aleatorio representa una vibración del cosmos en
						sincronía con el flujo lógico."
					</p>
					<p className="text-muted-foreground text-sm mt-2">
						— Filosofía de la Aleatoriedad en Orion
					</p>
				</div>
			</Card>
		</div>
	);
};

export default LibRandom;
