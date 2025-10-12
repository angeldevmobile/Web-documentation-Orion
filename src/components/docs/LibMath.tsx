import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Calculator,
	Code2,
	Terminal,
	Infinity as InfinityIcon,
	Zap,
} from "lucide-react";

const MathModule = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Calculator className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: math.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion Math — Matemáticas Cósmicas
						</p>
						<p className="text-foreground/70 mt-2">
							Operaciones matemáticas avanzadas, trigonometría, álgebra,
							combinatoria y utilidades futuristas adaptadas a la visión del
							lenguaje Orion.
						</p>
					</div>
				</div>
			</div>

			{/* Description */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🌌</span> Descripción General
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo math de Orion expande las capacidades matemáticas
					tradicionales con un enfoque cósmico y expresivo, orientado a
					desarrolladores que buscan precisión científica y expresividad
					simbólica.
				</p>
				<ul className="space-y-2 text-foreground/70 list-disc list-inside">
					<li>
						Integra funciones estándar de Python (math, random) y añade
						extensiones propias
					</li>
					<li>
						Incluye funciones como lerp, norm, map_range y futuristic_power
					</li>
					<li>
						Permite manipular valores, ángulos, probabilidades y
						transformaciones numéricas
					</li>
				</ul>
			</Card>

			{/* Universal Constants */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<InfinityIcon className="w-5 h-5 text-primary" />
					<span className="text-primary">🚀</span> Constantes Universales
				</h3>

				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-primary/20">
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Constante
								</th>
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Descripción
								</th>
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Valor aproximado
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">PI</td>
								<td className="py-2 px-3 text-sm">Número pi</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									3.1415926535
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">E</td>
								<td className="py-2 px-3 text-sm">
									Base de los logaritmos naturales
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									2.7182818284
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">TAU</td>
								<td className="py-2 px-3 text-sm">
									2π, una vuelta completa en radianes
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									6.2831853071
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">PHI</td>
								<td className="py-2 px-3 text-sm">
									Número áureo (proporción divina)
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									1.6180339887
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">INF</td>
								<td className="py-2 px-3 text-sm">Infinito positivo</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									∞
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">NAN</td>
								<td className="py-2 px-3 text-sm">
									Valor indefinido ("Not a Number")
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									—
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Function Categories */}
			<div>
				<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
					<span className="text-primary">📚</span> Categorías de Funciones
				</h3>

				<Tabs defaultValue="arithmetic" className="w-full">
					<TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-6">
						<TabsTrigger value="arithmetic">Aritmética</TabsTrigger>
						<TabsTrigger value="trigonometry">Trigonometría</TabsTrigger>
						<TabsTrigger value="hyperbolic">Hiperbólicas</TabsTrigger>
						<TabsTrigger value="logarithms">Logaritmos</TabsTrigger>
						<TabsTrigger value="combinatorics">Combinatoria</TabsTrigger>
						<TabsTrigger value="geometry">Geometría</TabsTrigger>
						<TabsTrigger value="random">Aleatoriedad</TabsTrigger>
					</TabsList>

					{/* Arithmetic */}
					<TabsContent value="arithmetic" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">➕</span> Aritmética Básica
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
												add(a, b)
											</td>
											<td className="py-2 px-3 text-sm">Suma dos valores.</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												sub(a, b)
											</td>
											<td className="py-2 px-3 text-sm">Resta b de a.</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												mul(a, b)
											</td>
											<td className="py-2 px-3 text-sm">
												Multiplica dos valores.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												div(a, b)
											</td>
											<td className="py-2 px-3 text-sm">
												Divide a entre b (retorna INF si b = 0).
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												mod(a, b)
											</td>
											<td className="py-2 px-3 text-sm">
												Calcula el residuo de a / b.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												pow(a, b)
											</td>
											<td className="py-2 px-3 text-sm">
												Eleva a a la potencia b.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												sqrt(x)
											</td>
											<td className="py-2 px-3 text-sm">
												Devuelve la raíz cuadrada de x.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Trigonometry */}
					<TabsContent value="trigonometry" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">📐</span> Trigonometría
							</h4>
							<p className="text-foreground/70 mb-4">Funciones en radianes:</p>

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
												sin(x)
											</td>
											<td className="py-2 px-3 text-sm">Seno</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												cos(x)
											</td>
											<td className="py-2 px-3 text-sm">Coseno</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												tan(x)
											</td>
											<td className="py-2 px-3 text-sm">Tangente</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												asin(x)
											</td>
											<td className="py-2 px-3 text-sm">Arcoseno</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												acos(x)
											</td>
											<td className="py-2 px-3 text-sm">Arcocoseno</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												atan(x)
											</td>
											<td className="py-2 px-3 text-sm">Arcotangente</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												atan2(y, x)
											</td>
											<td className="py-2 px-3 text-sm">
												Arcotangente de y/x, con cuadrante correcto.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Hyperbolic */}
					<TabsContent value="hyperbolic" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🌀</span> Hiperbólicas
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
												sinh(x)
											</td>
											<td className="py-2 px-3 text-sm">Seno hiperbólico</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												cosh(x)
											</td>
											<td className="py-2 px-3 text-sm">Coseno hiperbólico</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												tanh(x)
											</td>
											<td className="py-2 px-3 text-sm">
												Tangente hiperbólica
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Logarithms */}
					<TabsContent value="logarithms" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">📈</span> Logaritmos y
								Exponenciales
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
												log(x, base=e)
											</td>
											<td className="py-2 px-3 text-sm">
												Logaritmo en base base (por defecto natural).
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												exp(x)
											</td>
											<td className="py-2 px-3 text-sm">Exponencial de x.</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												log10(x)
											</td>
											<td className="py-2 px-3 text-sm">Logaritmo base 10.</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												log2(x)
											</td>
											<td className="py-2 px-3 text-sm">Logaritmo base 2.</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Combinatorics */}
					<TabsContent value="combinatorics" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🔢</span> Combinatoria
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
												factorial(n)
											</td>
											<td className="py-2 px-3 text-sm">Calcula n!.</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												comb(n, k)
											</td>
											<td className="py-2 px-3 text-sm">
												Combinaciones de n elementos tomados de k en k.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												perm(n, k)
											</td>
											<td className="py-2 px-3 text-sm">
												Permutaciones de n elementos tomados de k en k.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Geometry */}
					<TabsContent value="geometry" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">📏</span> Geometría y Distancias
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
												dist(a, b)
											</td>
											<td className="py-2 px-3 text-sm">
												Distancia euclidiana entre a y b.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												hypot(*coords)
											</td>
											<td className="py-2 px-3 text-sm">
												Hipotenusa multidimensional (norma euclidiana).
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												degrees(rad)
											</td>
											<td className="py-2 px-3 text-sm">
												Convierte radianes a grados.
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												radians(deg)
											</td>
											<td className="py-2 px-3 text-sm">
												Convierte grados a radianes.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>

					{/* Random */}
					<TabsContent value="random" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
								<span className="text-primary">🎲</span> Aleatoriedad Cósmica
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
												rand()
											</td>
											<td className="py-2 px-3 text-sm">
												Valor aleatorio entre 0 y 1.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												randint(a, b)
											</td>
											<td className="py-2 px-3 text-sm">
												Entero aleatorio entre a y b (inclusive).
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												randrange(a, b, step)
											</td>
											<td className="py-2 px-3 text-sm">
												Valor aleatorio en rango con paso.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												choice(seq)
											</td>
											<td className="py-2 px-3 text-sm">
												Elige un elemento aleatorio de una secuencia.
											</td>
										</tr>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												shuffle(seq)
											</td>
											<td className="py-2 px-3 text-sm">
												Desordena una secuencia (in place).
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												sample(seq, k)
											</td>
											<td className="py-2 px-3 text-sm">
												Extrae una muestra aleatoria de tamaño k.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</TabsContent>
				</Tabs>
			</div>

			{/* Futuristic Utilities */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🧠</span> Utilidades Futuristas
				</h3>

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
									clamp(x, lo, hi)
								</td>
								<td className="py-2 px-3 text-sm">
									Limita x al rango [lo, hi].
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									lerp(a, b, t)
								</td>
								<td className="py-2 px-3 text-sm">
									Interpolación lineal entre a y b con factor t (0–1).
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									norm(x, lo, hi)
								</td>
								<td className="py-2 px-3 text-sm">
									Normaliza x a un rango [0,1].
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									map_range(x, in_min, in_max, out_min, out_max)
								</td>
								<td className="py-2 px-3 text-sm">
									Mapea un valor de un rango a otro (transformación "warp").
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Futuristic Power */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Zap className="w-5 h-5 text-primary" />
					<span className="text-primary">⚡</span> Potencia Futurista
				</h3>

				<p className="text-foreground/80 mb-4">
					La función <code className="text-accent">futuristic_power</code>{" "}
					combina pow con warp cósmico, incorporando constantes universales para
					crear armonías numéricas.
				</p>

				<div className="glass-effect rounded-lg p-4 border border-primary/10 mb-4">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-primary">def</span>{" "}
							<span className="text-foreground">
								futuristic_power(base, exp):
							</span>
							<br />
							<span className="text-muted-foreground"> """</span>
							<br />
							<span className="text-muted-foreground">
								Potencia futurista: combina pow con warp cósmico.
							</span>
							<br />
							<span className="text-muted-foreground">
								Si exp es par =&gt; pow normal,
							</span>
							<br />
							<span className="text-muted-foreground">
								Si exp es impar =&gt; pow y se suma PHI.
							</span>
							<br />
							<span className="text-muted-foreground"> """</span>
						</code>
					</pre>
				</div>

				<div className="space-y-3">
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Code2 className="w-4 h-4" />
						<span>Ejemplos:</span>
					</div>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">
									&gt;&gt;&gt; futuristic_power(2, 3)
								</span>
								<br />
								<span className="text-accent">9.6180339887 # (2³ + PHI)</span>
								<br />
								<span className="text-foreground">
									&gt;&gt;&gt; futuristic_power(2, 4)
								</span>
								<br />
								<span className="text-accent">16.0 # Potencia normal</span>
							</code>
						</pre>
					</div>
				</div>

				<p className="text-foreground/70 mt-4 text-sm">
					Esta función ilustra el concepto de "matemática simbólica avanzada" de
					Orion: las operaciones no solo producen resultados, sino que también
					pueden incorporar constantes cósmicas que reflejan armonías numéricas.
				</p>
			</Card>

			{/* Example Usage */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🧩</span> Ejemplo General
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
								<span className="text-foreground">math</span>
								<br />
								<br />
								<span className="text-foreground">a = 3</span>
								<br />
								<span className="text-foreground">b = 4</span>
								<br />
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Distancia:"</span>
								<span className="text-foreground">, math.hypot(a, b))</span>
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Aleatorio:"</span>
								<span className="text-foreground">, math.rand())</span>
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Lerp(0,10,0.5):"</span>
								<span className="text-foreground">
									, math.lerp(0, 10, 0.5))
								</span>
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Futuristic Power:"</span>
								<span className="text-foreground">
									, math.futuristic_power(2, 5))
								</span>
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
								Distancia: 5.0
								<br />
								Aleatorio: 0.7394821
								<br />
								Lerp(0,10,0.5): 5.0
								<br />
								Futuristic Power: 33.6180339887
							</code>
						</pre>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default MathModule;
