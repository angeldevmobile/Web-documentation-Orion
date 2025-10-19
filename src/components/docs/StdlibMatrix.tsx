import { Card } from "@/components/ui/card";
import {
	Calculator,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Globe,
	Zap,
	RotateCw,
} from "lucide-react";

const StdlibMatrix = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Calculator className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">
							Orion Matrix+ — Smart Math & Tensor Engine
						</h2>
						<p className="text-muted-foreground text-lg">
							Motor Inteligente de Matemáticas y Tensores
						</p>
						<p className="text-foreground/70 mt-2">
							Extiende la base de Orion Matrix con un motor inteligente para el
							manejo de tensores, operaciones composables, autodetección de
							forma y soporte para álgebra cuántica básica.
						</p>
					</div>
				</div>
			</div>

			{/* Description */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">▪</span> Visión General
				</h3>
				<p className="text-foreground/80 mb-4">
					Orion Matrix+ redefine la manipulación matricial al integrar
					inteligencia contextual dentro de cada operación. La clase central,{" "}
					<span className="font-mono text-accent">SmartMatrix</span>, analiza el
					tipo de datos y decide automáticamente la forma, los tamaños y la
					semántica de las operaciones.
				</p>
				<p className="text-foreground/70 mb-4">
					Diseñado para razonamiento matemático adaptativo, simulaciones
					cuánticas ligeras, y procesamiento matricial simbiótico dentro del
					ecosistema Orion.
				</p>
				<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
					<p className="text-foreground/80 italic">
						Hace que el código sea más expresivo, limpio y predecible.
					</p>
				</div>
			</Card>

			{/* Main Features */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">⚙️</span> Características Principales
				</h3>

				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-primary/20">
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Capacidad
								</th>
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Descripción
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									Autodetección de forma
								</td>
								<td className="py-2 px-3 text-sm">
									Interpreta listas, escalares o vectores y los adapta
									dinámicamente.
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									Álgebra matricial extendida
								</td>
								<td className="py-2 px-3 text-sm">
									Soporta suma, resta, multiplicación, transposición,
									determinante e inversa.
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									Rotaciones multidimensionales
								</td>
								<td className="py-2 px-3 text-sm">
									Genera matrices de rotación en 2D y 3D.
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									Procesamiento cuántico básico
								</td>
								<td className="py-2 px-3 text-sm">
									Simulación de operadores de transformación mediante rotaciones
									y colapsos.
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									Funciones neuronales integradas
								</td>
								<td className="py-2 px-3 text-sm">
									Aplicación directa de activaciones como relu, sigmoid o tanh.
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									Auto-composición funcional
								</td>
								<td className="py-2 px-3 text-sm">
									Permite encadenar transformaciones y evaluarlas en cascada.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* SmartMatrix Class */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Zap className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Clase Principal: SmartMatrix
				</h3>

				<div className="space-y-4">
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">class</span>{" "}
								<span className="text-accent">SmartMatrix</span>
								<span className="text-foreground">:</span>
								<br />
								<span className="text-muted-foreground">
									{" "}
									"""Contenedor inteligente que se adapta según contexto."""
								</span>
							</code>
						</pre>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							Métodos clave:
						</h4>
						<div className="space-y-2 text-sm">
							<div className="flex gap-2">
								<span className="font-mono text-accent">__init__(data)</span>
								<span className="text-foreground/70">
									→ Crea una matriz inteligente y calcula automáticamente su
									forma.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">__matmul__(other)</span>
								<span className="text-foreground/70">
									→ Multiplicación matricial (@).
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									__add__(other) / __sub__(other)
								</span>
								<span className="text-foreground/70">
									→ Operaciones elementales con autodetección de forma.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">__mul__(factor)</span>
								<span className="text-foreground/70">
									→ Multiplicación escalar o matricial.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">T()</span>
								<span className="text-foreground/70">
									→ Retorna la transpuesta.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">det() / inv()</span>
								<span className="text-foreground/70">
									→ Calcula el determinante o la inversa.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">apply(fn)</span>
								<span className="text-foreground/70">
									→ Aplica una función escalar a cada elemento.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">energy()</span>
								<span className="text-foreground/70">
									→ Retorna el "colapso" energético del tensor (basado en
									tangente hiperbólica).
								</span>
							</div>
						</div>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">Ejemplo:</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">A = SmartMatrix([[</span>
									<span className="text-accent">1</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">2</span>
									<span className="text-foreground">], [</span>
									<span className="text-accent">3</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">4</span>
									<span className="text-foreground">]])</span>
									<br />
									<span className="text-foreground">B = SmartMatrix([[</span>
									<span className="text-accent">2</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">0</span>
									<span className="text-foreground">], [</span>
									<span className="text-accent">1</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">2</span>
									<span className="text-foreground">]])</span>
									<br />
									<br />
									<span className="text-foreground">R = (A @ B).apply(</span>
									<span className="text-foreground">x </span>
									<span className="text-primary">{"=>"}</span>
									<span className="text-foreground"> x * </span>
									<span className="text-accent">0.5</span>
									<span className="text-foreground">).T()</span>
									<br />
									<span className="text-foreground">show(R)</span>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</Card>

			{/* Fundamental Operations */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Settings className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Operaciones Fundamentales
				</h3>

				<div className="space-y-4">
					<div className="space-y-2">
						<h4 className="text-lg font-semibold text-accent">add(A, B)</h4>
						<p className="text-foreground/80 text-sm">
							Suma dos matrices o escalares con igual dimensión.
						</p>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold text-accent">sub(A, B)</h4>
						<p className="text-foreground/80 text-sm">
							Resta elemento a elemento.
						</p>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold text-accent">mul(A, B)</h4>
						<p className="text-foreground/80 text-sm">
							Multiplicación escalar o matricial estándar. Detecta
							automáticamente si uno de los operandos es escalar.
						</p>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold text-accent">transpose(A)</h4>
						<p className="text-foreground/80 text-sm">
							Intercambia filas y columnas.
						</p>
					</div>

					<div className="space-y-2">
						<h4 className="text-lg font-semibold text-accent">
							det(A) / inverse(A) / trace(A)
						</h4>
						<p className="text-foreground/80 text-sm mb-2">
							Operaciones clásicas de álgebra lineal:
						</p>
						<ul className="text-foreground/70 text-sm space-y-1 ml-4">
							<li>• Determinante</li>
							<li>• Inversa</li>
							<li>• Traza (suma diagonal)</li>
						</ul>
					</div>
				</div>
			</Card>

			{/* Spatial Rotations */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<RotateCw className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Rotaciones Espaciales
				</h3>

				<div className="space-y-4">
					<div className="space-y-2">
						<p className="font-mono text-accent">rot2D(angle_deg)</p>
						<p className="text-foreground/80 text-sm">
							Matriz de rotación bidimensional.
						</p>
					</div>

					<div className="space-y-2">
						<p className="font-mono text-accent">rot3D(x_deg, y_deg, z_deg)</p>
						<p className="text-foreground/80 text-sm">
							Composición de rotaciones tridimensionales (X, Y, Z).
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">Ejemplo:</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">R = rot3D(</span>
									<span className="text-accent">30</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">45</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">60</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">v = [[</span>
									<span className="text-accent">1</span>
									<span className="text-foreground">], [</span>
									<span className="text-accent">0</span>
									<span className="text-foreground">], [</span>
									<span className="text-accent">0</span>
									<span className="text-foreground">]]</span>
									<br />
									<span className="text-foreground">rotated = mul(R, v)</span>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</Card>

			{/* Advanced Functions */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Funciones Avanzadas Orion
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
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									morph(A, fn)
								</td>
								<td className="py-2 px-3 text-sm">
									Aplica cualquier función fn(x) sobre todos los elementos.
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									amplify(A, factor=2)
								</td>
								<td className="py-2 px-3 text-sm">
									Escala cada elemento según un factor de amplificación.
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									collapse(A)
								</td>
								<td className="py-2 px-3 text-sm">
									Colapsa la matriz en un valor escalar entre -1 y 1 (tanh).
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									neuralify(A, activation="relu")
								</td>
								<td className="py-2 px-3 text-sm">
									Aplica una función neuronal: relu, sigmoid o tanh.
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="space-y-3 mt-4">
					<h4 className="text-lg font-semibold text-accent">Ejemplo:</h4>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">X = SmartMatrix([[</span>
								<span className="text-accent">0.1</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">-0.5</span>
								<span className="text-foreground">], [</span>
								<span className="text-accent">0.7</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">0.9</span>
								<span className="text-foreground">]])</span>
								<br />
								<span className="text-foreground">
									Y = X.apply(math.sin).energy()
								</span>
								<br />
								<span className="text-foreground">Z = neuralify(X, </span>
								<span className="text-accent">"sigmoid"</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Entry Point */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Punto de Entrada Orion
				</h3>

				<div className="space-y-4">
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">fn</span>{" "}
								<span className="text-accent">matrix</span>
								<span className="text-foreground">(action=</span>
								<span className="text-accent">"identity"</span>
								<span className="text-foreground">, *args)</span>
							</code>
						</pre>
					</div>

					<p className="text-foreground/80 text-sm">
						Interfaz dinámica de ejecución. Permite invocar funciones
						matriciales sin importar su tipo o aridad.
					</p>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">Ejemplo:</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-primary">use</span>{" "}
									<span className="text-foreground">matrix_plus</span>
									<br />
									<span className="text-foreground">R = matrix(</span>
									<span className="text-accent">"rot2D"</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">90</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">I = matrix(</span>
									<span className="text-accent">"identity"</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">3</span>
									<span className="text-foreground">)</span>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</Card>

			{/* Complete Example */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">▪</span> Ejemplo Completo
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
								<span className="text-foreground">matrix</span>
								<br />
								<br />
								<span className="text-foreground">A = matrix.add([[</span>
								<span className="text-accent">1</span>
								<span className="text-foreground">,</span>
								<span className="text-accent">2</span>
								<span className="text-foreground">]], [[</span>
								<span className="text-accent">3</span>
								<span className="text-foreground">,</span>
								<span className="text-accent">4</span>
								<span className="text-foreground">]])</span>
								<br />
								<span className="text-foreground">show(A)</span>
							</code>
						</pre>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Terminal className="w-4 h-4" />
						<span>Salida:</span>
					</div>
					<div className="bg-background/50 rounded-lg p-4 border border-primary/30">
						<pre className="text-sm">
							<code className="font-mono text-primary">[[4, 6]]</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Orion Runtime Export */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Exportación Orion Runtime
				</h3>

				<p className="text-foreground/80 mb-4">
					El módulo registra automáticamente sus funciones dentro del entorno de
					ejecución Orion:
				</p>

				<div className="glass-effect rounded-lg p-4 border border-primary/10 mb-4">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-primary">fn</span>{" "}
							<span className="text-accent">orion_export</span>
							<span className="text-foreground">():</span>
							<br />
							<span className="text-foreground"> exports = {"{"}</span>
							<span className="text-accent">"matrix"</span>
							<span className="text-foreground">: matrix{"}"}</span>
							<br />
							<span className="text-foreground"> exports.update(ALIASES)</span>
							<br />
							<span className="text-primary"> return</span>{" "}
							<span className="text-foreground">exports</span>
						</code>
					</pre>
				</div>

				<p className="text-foreground/80">
					Esto permite que cualquier script Orion invoque las funciones
					matriciales de forma natural.
				</p>
			</Card>

			{/* Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary">▪</span> Filosofía
				</h3>
				<div className="space-y-4">
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg">
							"Matrix+ no solo multiplica números, sino que entiende el
							propósito detrás de cada operación."
						</p>
						<p className="text-muted-foreground text-sm mt-2">
							Orion transforma las operaciones matriciales en un lenguaje
							simbólico capaz de expresar energía, simetría y transformación.
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default StdlibMatrix;
