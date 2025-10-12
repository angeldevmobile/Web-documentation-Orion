import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Code2, Terminal, Calendar } from "lucide-react";

const DateTimeModule = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Clock className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: lib/datetime</h2>
						<p className="text-muted-foreground text-lg">
							"El tiempo en Orion no se mide… se moldea."
						</p>
						<p className="text-foreground/70 mt-2">
							Manipulación temporal directa, elegante y expresiva diseñada para
							humanos, no para máquinas.
						</p>
					</div>
				</div>
			</div>

			{/* Purpose */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Filosofía
				</h3>
				<p className="text-foreground/80 mb-4">
					El tiempo no debería sentirse como una estructura rígida, sino como un
					flujo manipulable. Orion DateTime convierte operaciones temporales en
					algo natural y poético mediante:
				</p>
				<ul className="space-y-2 text-foreground/70 list-disc list-inside">
					<li>Operaciones directas (add_days, parse, format)</li>
					<li>Resultados legibles</li>
					<li>Integración natural con el ecosistema de tipos de Orion</li>
					<li>Sintaxis expresiva y atemporal</li>
				</ul>
				<div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
					<p className="text-primary font-medium italic">
						"En Orion, el tiempo se lee como poesía y se transforma como
						código."
					</p>
				</div>
			</Card>

			{/* Main Functions */}
			<div>
				<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
					<span className="text-primary"></span> Funciones principales
				</h3>

				<Tabs defaultValue="now" className="w-full">
					<TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6">
						<TabsTrigger value="now">now()</TabsTrigger>
						<TabsTrigger value="today">today()</TabsTrigger>
						<TabsTrigger value="format">format()</TabsTrigger>
						<TabsTrigger value="parse">parse()</TabsTrigger>
						<TabsTrigger value="add_days">add_days()</TabsTrigger>
					</TabsList>

					{/* now() */}
					<TabsContent value="now" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> now()
							</h4>
							<p className="text-foreground/80 mb-4">
								Devuelve la fecha y hora actual en formato ISO futurista.
							</p>

							{/* Return Type */}
							<div className="mb-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
								<p className="text-sm font-semibold text-accent mb-1">
									Retorna:
								</p>
								<p className="font-mono text-sm">OrionString</p>
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
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">now</span>
											<span className="text-foreground">())</span>
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
											"2025-10-11T21:32:14.512301"
										</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									✨ Ideal para registros de eventos, logs o trazabilidad en
									tiempo real.
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* today() */}
					<TabsContent value="today" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> today()
							</h4>
							<p className="text-foreground/80 mb-4">
								Obtiene solo la fecha actual, sin información de hora.
							</p>

							{/* Return Type */}
							<div className="mb-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
								<p className="text-sm font-semibold text-accent mb-1">
									Retorna:
								</p>
								<p className="font-mono text-sm">OrionString</p>
							</div>

							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">today</span>
											<span className="text-foreground">())</span>
										</code>
									</pre>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Terminal className="w-4 h-4" />
									<span>Salida:</span>
								</div>
								<div className="bg-background/50 rounded-lg p-4 border border-accent/30">
									<pre className="text-sm">
										<code className="font-mono text-accent">"2025-10-11"</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									Perfecto para reportes o tareas diarias automáticas.
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* format() */}
					<TabsContent value="format" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> format(dt, fmt)
							</h4>
							<p className="text-foreground/80 mb-4">
								Formatea un objeto de fecha u hora según el patrón especificado.
							</p>

							{/* Parameters Table */}
							<div className="overflow-x-auto mb-6">
								<p className="text-sm font-semibold mb-2">Parámetros:</p>
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Nombre
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Tipo
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												dt
											</td>
											<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
												OrionDate
											</td>
											<td className="py-2 px-3 text-sm">
												Objeto de fecha/hora a formatear
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												fmt
											</td>
											<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
												OrionString
											</td>
											<td className="py-2 px-3 text-sm">
												Patrón de formato (%Y, %m, %d, %H, %M, etc.)
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
											<span className="text-foreground">d = </span>
											<span className="text-accent">parse</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">
												"2025-10-11 21:45:00"
											</span>
											<span className="text-foreground">)</span>
											<br />
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">format</span>
											<span className="text-foreground">(d, </span>
											<span className="text-primary">"%d-%m-%Y %H:%M"</span>
											<span className="text-foreground">))</span>
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
											"11-10-2025 21:45"
										</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									Compatible con patrones estándar, simplificado para uso
									fluido.
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* parse() */}
					<TabsContent value="parse" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg">🌌</span> parse(s, fmt)
							</h4>
							<p className="text-foreground/80 mb-4">
								Convierte una cadena en un objeto de fecha según el formato
								dado.
							</p>

							{/* Parameters Table */}
							<div className="overflow-x-auto mb-6">
								<p className="text-sm font-semibold mb-2">Parámetros:</p>
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Nombre
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Tipo
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												s
											</td>
											<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
												OrionString
											</td>
											<td className="py-2 px-3 text-sm">
												Cadena de fecha a parsear
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												fmt
											</td>
											<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
												OrionString
											</td>
											<td className="py-2 px-3 text-sm">
												Formato esperado (opcional)
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
											<span className="text-foreground">d = </span>
											<span className="text-accent">parse</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">
												"2025-10-11 22:00:00"
											</span>
											<span className="text-foreground">)</span>
											<br />
											<span className="text-primary">show</span>
											<span className="text-foreground">(d)</span>
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
											2025-10-11 22:00:00
										</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									Permite leer fechas de archivos, APIs o entradas de usuario
									sin esfuerzo.
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* add_days() */}
					<TabsContent value="add_days" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<span className="text-lg"></span> add_days(dt, days)
							</h4>
							<p className="text-foreground/80 mb-4">
								Desplaza una fecha hacia el futuro o el pasado.
							</p>

							{/* Parameters Table */}
							<div className="overflow-x-auto mb-6">
								<p className="text-sm font-semibold mb-2">Parámetros:</p>
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Nombre
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Tipo
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-primary/10">
											<td className="py-2 px-3 font-mono text-sm text-accent">
												dt
											</td>
											<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
												OrionDate
											</td>
											<td className="py-2 px-3 text-sm">Fecha base</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												days
											</td>
											<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
												OrionInt
											</td>
											<td className="py-2 px-3 text-sm">
												Días a sumar (positivo) o restar (negativo)
											</td>
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
											<span className="text-foreground">d = </span>
											<span className="text-accent">parse</span>
											<span className="text-foreground">(</span>
											<span className="text-primary">
												"2025-10-11 00:00:00"
											</span>
											<span className="text-foreground">)</span>
											<br />
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">add_days</span>
											<span className="text-foreground">(d, 5))</span>
											<br />
											<span className="text-primary">show</span>
											<span className="text-foreground">(</span>
											<span className="text-accent">add_days</span>
											<span className="text-foreground">(d, -10))</span>
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
											2025-10-16 00:00:00
											<br />
											2025-10-01 00:00:00
										</code>
									</pre>
								</div>
							</div>

							<div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
								<p className="text-sm text-primary">
									Para cálculos temporales sin librerías externas. Soporta
									días positivos y negativos.
								</p>
							</div>
						</Card>
					</TabsContent>
				</Tabs>
			</div>

			{/* Summary Table */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Resumen del módulo
				</h3>

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
								<th className="text-left py-3 px-4 text-sm font-semibold">
									Ejemplo
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									now()
								</td>
								<td className="py-3 px-4 text-sm">Fecha y hora actual (ISO)</td>
								<td className="py-3 px-4 font-mono text-sm text-muted-foreground">
									"2025-10-11T21:32:14"
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									today()
								</td>
								<td className="py-3 px-4 text-sm">Solo la fecha actual</td>
								<td className="py-3 px-4 font-mono text-sm text-muted-foreground">
									"2025-10-11"
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									format(dt, fmt)
								</td>
								<td className="py-3 px-4 text-sm">Da forma a una fecha/hora</td>
								<td className="py-3 px-4 font-mono text-sm text-muted-foreground">
									format(dt, "%d-%m-%Y")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-3 px-4 font-mono text-sm text-accent">
									parse(s, fmt)
								</td>
								<td className="py-3 px-4 text-sm">Convierte texto en fecha</td>
								<td className="py-3 px-4 font-mono text-sm text-muted-foreground">
									parse("2025-10-11 22:00:00")
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-accent">
									add_days(dt, days)
								</td>
								<td className="py-3 px-4 text-sm">Suma o resta días</td>
								<td className="py-3 px-4 font-mono text-sm text-muted-foreground">
									add_days(dt, 7)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>
		</div>
	);
};

export default DateTimeModule;
