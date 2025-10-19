import { Card } from "@/components/ui/card";
import {
	Clock,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Globe,
	Zap,
	RotateCcw,
	FastForward,
	Rewind,
} from "lucide-react";

const ModulesTimewarp = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Clock className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: timewarp.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion Timewarp — Manipulación Avanzada del Tiempo
						</p>
						<p className="text-foreground/70 mt-2">
							Extiende el flujo temporal del lenguaje, permitiendo pausas,
							rebobinados, aceleraciones, viajes y futuros programados dentro de
							la ejecución de código.
						</p>
					</div>
				</div>
			</div>

			{/* Description */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🌌</span> Filosofía del Módulo
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo timewarp redefine la relación entre el código y el tiempo.
					En lugar de ser un simple flujo lineal, el tiempo se convierte en un
					espacio manipulable, donde el desarrollador puede detener, acelerar o
					incluso ejecutar acciones en el pasado o el futuro.
				</p>
				<p className="text-foreground/70 mb-4">
					Orion trata el tiempo como un recurso cuántico, no como una
					limitación.
				</p>
				<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
					<p className="text-foreground/80 italic">
						"El código no espera el tiempo. El tiempo obedece al código."
					</p>
					<p className="text-muted-foreground text-sm mt-1">— Orion Core ⏰</p>
				</div>
			</Card>

			{/* Fundamental Concepts */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🧩</span> Conceptos Fundamentales
				</h3>

				<div className="space-y-6">
					{/* WarpClock */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Clock className="w-5 h-5" />⏱ WarpClock — El reloj cuántico
						</h4>
						<p className="text-foreground/80 text-sm mb-3">
							La clase WarpClock ofrece un control total del flujo temporal:
							puede pausarse, acelerarse, retroceder o avanzar según necesidad.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">clock = timewarp(</span>
									<span className="text-accent">"clock"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">clock.speed(</span>
									<span className="text-accent">2.0</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Duplica la velocidad temporal
									</span>
									<br />
									<span className="text-foreground">clock.pause()</span>
									<span className="text-muted-foreground">
										{" "}
										# Congela el tiempo
									</span>
									<br />
									<span className="text-foreground">clock.resume()</span>
									<span className="text-muted-foreground"> # Lo reanuda</span>
									<br />
									<span className="text-foreground">clock.rewind(</span>
									<span className="text-accent">5</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Rebobina 5 segundos
									</span>
									<br />
									<span className="text-foreground">clock.fastforward(</span>
									<span className="text-accent">10</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Avanza 10 segundos
									</span>
								</code>
							</pre>
						</div>
					</div>

					{/* TimeLine */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Globe className="w-5 h-5" />
							🕸 TimeLine — Líneas temporales alternativas
						</h4>
						<p className="text-foreground/80 text-sm mb-3">
							Permite crear líneas de tiempo independientes, donde cada función
							puede ejecutarse en el pasado, presente o futuro.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">tl = timewarp(</span>
									<span className="text-accent">"timeline"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">tl.future(</span>
									<span className="text-accent">3</span>
									<span className="text-foreground">, say_hello)</span>
									<span className="text-muted-foreground">
										{" "}
										# Ejecutar función en 3 segundos
									</span>
									<br />
									<span className="text-foreground">tl.now(init_state)</span>
									<span className="text-muted-foreground">
										{" "}
										# Ejecutar inmediatamente
									</span>
									<br />
									<span className="text-foreground">tl.past(</span>
									<span className="text-accent">5</span>
									<span className="text-foreground">, correct_data)</span>
									<span className="text-muted-foreground">
										{" "}
										# Reescribir un evento pasado
									</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							Cada línea temporal registra sus eventos, generando trazabilidad
							de ejecución en contextos no lineales.
						</p>
					</div>
				</div>
			</Card>

			{/* Main Functions */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">⚙️</span> Métodos Principales de
					WarpClock
				</h3>

				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-primary/20">
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Método
								</th>
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Descripción
								</th>
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Función
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									pause()
								</td>
								<td className="py-2 px-3 text-sm">Pausa el tiempo actual</td>
								<td className="py-2 px-3 text-sm text-muted-foreground">
									Congela el flujo temporal
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									resume()
								</td>
								<td className="py-2 px-3 text-sm">Reanuda el tiempo</td>
								<td className="py-2 px-3 text-sm text-muted-foreground">
									Restaura el flujo normal
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									warp(scale)
								</td>
								<td className="py-2 px-3 text-sm">Cambia la escala temporal</td>
								<td className="py-2 px-3 text-sm text-muted-foreground">
									Altera la percepción del tiempo
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									speed(factor)
								</td>
								<td className="py-2 px-3 text-sm">Ajusta la velocidad</td>
								<td className="py-2 px-3 text-sm text-muted-foreground">
									Multiplica la velocidad temporal
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									rewind(seconds)
								</td>
								<td className="py-2 px-3 text-sm">Rebobina en el tiempo</td>
								<td className="py-2 px-3 text-sm text-muted-foreground">
									Viaja al pasado
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									timeline(name)
								</td>
								<td className="py-2 px-3 text-sm">
									Crea línea temporal alternativa
								</td>
								<td className="py-2 px-3 text-sm text-muted-foreground">
									Genera nueva dimensión temporal
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Decorators and Tools */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Zap className="w-5 h-5 text-primary" />
					<span className="text-primary">🧠</span> Decoradores y Herramientas
					Temporales
				</h3>

				<div className="space-y-6">
					{/* @future decorator */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							@future(delay)
						</h4>
						<p className="text-foreground/80 text-sm">
							Ejecuta una función en el futuro, tras el número de segundos
							indicado.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-primary">@future(</span>
									<span className="text-accent">2.5</span>
									<span className="text-primary">)</span>
									<br />
									<span className="text-primary">def</span>{" "}
									<span className="text-foreground">saludo():</span>
									<br />
									<span className="text-foreground">{"    "}print(</span>
									<span className="text-accent">"Hola desde el futuro 👋"</span>
									<span className="text-foreground">)</span>
								</code>
							</pre>
						</div>
					</div>

					{/* @warp_speed decorator */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							@warp_speed(multiplier)
						</h4>
						<p className="text-foreground/80 text-sm">
							Ejecuta una función bajo un entorno de tiempo alterado (por
							ejemplo, simulaciones aceleradas).
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-primary">@warp_speed(</span>
									<span className="text-accent">3.0</span>
									<span className="text-primary">)</span>
									<br />
									<span className="text-primary">def</span>{" "}
									<span className="text-foreground">simulacion():</span>
									<br />
									<span className="text-foreground">{"    "}time.sleep(</span>
									<span className="text-accent">3</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Solo esperará 1 segundo real
									</span>
								</code>
							</pre>
						</div>
					</div>

					{/* wait function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							wait(duration)
						</h4>
						<p className="text-foreground/80 text-sm">
							Pausa el flujo según la unidad: "s", "ms", "ns", o un número
							directo.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">wait(</span>
									<span className="text-accent">"500ms"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">wait(</span>
									<span className="text-accent">2</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground"> # 2 segundos</span>
								</code>
							</pre>
						</div>
					</div>

					{/* measureMtime function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							measureMtime(fn)
						</h4>
						<p className="text-foreground/80 text-sm">
							Mide el tiempo de ejecución de una función con precisión en
							milisegundos.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										r = measureMtime(mi_funcion)
									</span>
									<br />
									<span className="text-foreground">print(r[</span>
									<span className="text-accent">"ms"</span>
									<span className="text-foreground">], </span>
									<span className="text-accent">"milisegundos"</span>
									<span className="text-foreground">)</span>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</Card>

			{/* Orion Integration */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Settings className="w-5 h-5 text-primary" />
					<span className="text-primary">🧩</span> Integración con Orion
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo soporta expresiones del lenguaje como:
				</p>
				<div className="glass-effect rounded-lg p-4 border border-primary/10 mb-4">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-primary">future</span>{" "}
							<span className="text-foreground">{"{ print("}</span>
							<span className="text-accent">"Ejecutado en el futuro"</span>
							<span className="text-foreground">
								{")"} {"}"}
							</span>
							<br />
							<span className="text-primary">past</span>{" "}
							<span className="text-foreground">
								{"{ corregir_errores() }"}
							</span>
						</code>
					</pre>
				</div>
				<p className="text-foreground/70 mb-4">
					Internamente, se manejan mediante:
				</p>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="font-mono text-accent text-sm">
							run_future_block(delay, block)
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="font-mono text-accent text-sm">
							run_past_block(delta, block)
						</span>
					</div>
				</div>
				<p className="text-foreground/70 mt-4">
					Permitiendo una semántica natural dentro del lenguaje Orion.
				</p>
			</Card>

			{/* Central Function */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Terminal className="w-5 h-5 text-primary" />
					<span className="text-primary">⚙️</span> Función Central: timewarp()
				</h3>
				<p className="text-foreground/80 mb-4">
					Punto de entrada principal para invocar funcionalidades desde Orion:
				</p>
				<div className="glass-effect rounded-lg p-4 border border-primary/10">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-foreground">timewarp(</span>
							<span className="text-accent">"clock"</span>
							<span className="text-foreground">)</span>
							<span className="text-muted-foreground">
								{" "}
								# Crea un WarpClock
							</span>
							<br />
							<span className="text-foreground">timewarp(</span>
							<span className="text-accent">"future"</span>
							<span className="text-foreground">, </span>
							<span className="text-accent">5</span>
							<span className="text-foreground">, fn)</span>
							<span className="text-muted-foreground">
								{" "}
								# Ejecuta una función en 5s
							</span>
							<br />
							<span className="text-foreground">timewarp(</span>
							<span className="text-accent">"measureMtime"</span>
							<span className="text-foreground">, fn)</span>
							<span className="text-muted-foreground">
								{" "}
								# Mide tiempo de ejecución
							</span>
							<br />
							<span className="text-foreground">timewarp(</span>
							<span className="text-accent">"block_future"</span>
							<span className="text-foreground">, </span>
							<span className="text-accent">3</span>
							<span className="text-foreground">, fn)</span>
							<span className="text-muted-foreground">
								{" "}
								# Bloque Orion 'future'
							</span>
						</code>
					</pre>
				</div>
			</Card>

			{/* Exports */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-primary">🧬</span> Exportaciones Principales
					(ALIASES)
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo expone de forma directa las siguientes referencias:
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{[
						"WarpClock",
						"TimeLine",
						"future",
						"warp_speed",
						"wait",
						"measureMtime",
						"block_future",
						"block_past",
						"now",
					].map((alias) => (
						<div
							key={alias}
							className="glass-effect rounded-lg p-3 border border-primary/10">
							<span className="font-mono text-accent text-sm">{alias}</span>
						</div>
					))}
				</div>
				<p className="text-foreground/70 mt-4">
					Todas accesibles mediante{" "}
					<span className="font-mono text-accent">orion_export()</span>, que
					asegura compatibilidad con el núcleo del lenguaje Orion.
				</p>
			</Card>

			{/* Usage Example */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🧩</span> Ejemplo Completo
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
								<span className="text-foreground">timewarp</span>
								<br />
								<br />
								<span className="text-foreground">clock = timewarp(</span>
								<span className="text-accent">"clock"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground">
									{" "}
									# Crear reloj cuántico
								</span>
								<br />
								<span className="text-foreground">clock.speed(</span>
								<span className="text-accent">2.0</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground">
									{" "}
									# Acelerar tiempo x2
								</span>
								<br />
								<br />
								<span className="text-foreground">timewarp(</span>
								<span className="text-accent">"future"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">3</span>
								<span className="text-foreground">, mi_funcion)</span>
								<span className="text-muted-foreground"> # Ejecutar en 3s</span>
								<br />
								<span className="text-foreground">wait(</span>
								<span className="text-accent">"1.5s"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground"> # Pausa temporal</span>
								<br />
								<span className="text-foreground">clock.pause()</span>
								<span className="text-muted-foreground">
									{" "}
									# Congelar tiempo
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
								[timewarp] OK: WarpClock initialized
								<br />
								[timewarp] INFO: Speed set to 2.0x
								<br />
								[timewarp] FUTURE: Function scheduled for +3s
								<br />
								[timewarp] WAIT: Pausing for 1.5s
								<br />
								[timewarp] PAUSE: Time flow frozen
								<br />
								[timewarp] EXEC: mi_funcion() executed (future)
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Futuristic Vision */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary">🚀</span> Visión del Módulo
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						Timewarp no es solo una librería de tiempo: es una extensión
						conceptual que permite crear narrativas temporales dentro del
						código. En Orion, el tiempo deja de ser una dimensión fija y se
						convierte en una herramienta expresiva.
					</p>
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg">
							"El código no espera el tiempo. El tiempo obedece al código."
						</p>
						<p className="text-muted-foreground text-sm mt-2">
							— Orion Core, Dimensión Temporal
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ModulesTimewarp;
