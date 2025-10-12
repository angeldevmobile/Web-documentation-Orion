import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Sparkles,
	Code2,
	Terminal,
	Zap,
	Lightbulb,
	Globe,
	Brain,
	Dna,
	Shield,
} from "lucide-react";

const OrionCoreTypes = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Sparkles className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: core/types.py</h2>
						<p className="text-muted-foreground text-lg">
							Tipos primitivos redefinidos para Orion Language
						</p>
						<p className="text-foreground/70 mt-2">
							Más expresivos, vivos e inteligentes. Fusionan la simplicidad de
							Python con el dinamismo de lenguajes modernos.
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
					Orion Core Types es la base sobre la cual el lenguaje construye su
					filosofía:
					<br />
					<span className="italic text-primary">
						"Elegancia sintáctica, poder funcional, y belleza expresiva."
					</span>
				</p>
				<ul className="space-y-2 text-foreground/70 list-disc list-inside">
					<li>Tipos con métodos extendidos y transformaciones únicas</li>
					<li>Operadores y conversiones inteligentes</li>
					<li>
						Inspirados en Python, Swift y Kotlin, pero con un toque futurista
					</li>
					<li>
						Entidades inteligentes diseñadas para expresar intención, estilo y
						propósito
					</li>
				</ul>
			</Card>

			{/* Main Types */}
			<div>
				<h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
					<span className="text-primary"></span> Tipos principales
				</h3>

				<Tabs defaultValue="string" className="w-full">
					<TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-6">
						<TabsTrigger value="string">OrionString</TabsTrigger>
						<TabsTrigger value="number">OrionNumber</TabsTrigger>
						<TabsTrigger value="bool">OrionBool</TabsTrigger>
						<TabsTrigger value="date">OrionDate</TabsTrigger>
						<TabsTrigger value="list">OrionList</TabsTrigger>
						<TabsTrigger value="dict">OrionDict</TabsTrigger>
						<TabsTrigger value="nullsafe">Null-Safe</TabsTrigger>
					</TabsList>

					{/* OrionString */}
					<TabsContent value="string" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Sparkles className="w-5 h-5" />
								class OrionString(text)
							</h4>
							<p className="text-foreground/80 mb-4">
								Cadena con interpolación dinámica y efectos visuales.
							</p>
							<p className="text-foreground/70 mb-4">
								Permite reemplazar variables dentro de un texto con{" "}
								<span className="font-mono bg-background/50 px-1 rounded">
									${"{variable}"}
								</span>{" "}
								o acceder a propiedades de objetos{" "}
								<span className="font-mono bg-background/50 px-1 rounded">
									${"{obj.prop}"}
								</span>
								.
							</p>

							{/* Methods Table */}
							<div className="overflow-x-auto mb-6">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Método
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												interpolate(vars)
											</td>
											<td className="py-2 px-3 text-sm">
												Interpolación tipo{" "}
												<span className="font-mono">${"{var}"}</span>
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												futuristic_upper()
											</td>
											<td className="py-2 px-3 text-sm">
												Convierte a mayúsculas futuristas
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												reverse()
											</td>
											<td className="py-2 px-3 text-sm">Invierte la cadena</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												wave()
											</td>
											<td className="py-2 px-3 text-sm">
												Transforma en patrón de onda
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												glitch()
											</td>
											<td className="py-2 px-3 text-sm">
												Agrega efecto glitch
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Basic Example */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo básico:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											name = "Orion"{"\n"}
											msg = OrionString("Bienvenido al lenguaje ${"{name}"}")
											{"\n"}
											show(msg.interpolate({"{"}name: name{"}"})) # → Bienvenido
											al lenguaje Orion
										</code>
									</pre>
								</div>
							</div>

							{/* Transformations Example */}
							<div className="space-y-3 mt-6">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Transformaciones únicas:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											s = OrionString("orion"){"\n"}
											s.futuristic_upper() # → "ORION"{"\n"}
											s.reverse() # → "noiro"{"\n"}
											s.wave() # → "OrIoN"{"\n"}
											s.glitch() # → "orion ???"
										</code>
									</pre>
								</div>
							</div>

							{/* Special Features */}
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<h5 className="font-semibold text-primary mb-2">
									Lo que la hace especial:
								</h5>
								<ul className="space-y-1 text-sm text-foreground/80">
									<li>
										• Interpolación nativa tipo{" "}
										<span className="font-mono">${"{var}"}</span> y{" "}
										<span className="font-mono">${"{obj.prop}"}</span>
									</li>
									<li>• Transformaciones estilísticas integradas</li>
									<li>• Compatible con objetos y diccionarios</li>
								</ul>
							</div>
						</Card>
					</TabsContent>

					{/* OrionNumber */}
					<TabsContent value="number" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Zap className="w-5 h-5" />
								class OrionNumber(value)
							</h4>
							<p className="text-foreground/80 mb-4">
								Números con conciencia y propósito.
							</p>
							<p className="text-foreground/70 mb-4">
								Ampliación de los enteros y flotantes clásicos con operaciones
								simbióticas.
							</p>

							{/* Methods Table */}
							<div className="overflow-x-auto mb-6">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Método
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												unwrap()
											</td>
											<td className="py-2 px-3 text-sm">
												Devuelve el valor nativo
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												futuristic_power(n)
											</td>
											<td className="py-2 px-3 text-sm">Potencia futurista</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												is_prime()
											</td>
											<td className="py-2 px-3 text-sm">¿Es primo?</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												factorial()
											</td>
											<td className="py-2 px-3 text-sm">Factorial</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												to_binary()
											</td>
											<td className="py-2 px-3 text-sm">Convierte a binario</td>
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
											x = OrionNumber(5){"\n"}y = OrionNumber(3){"\n"}
											{"\n"}
											show((x + y).unwrap()) # → 8{"\n"}
											show(x.futuristic_power(3)) # → 125{"\n"}
											show(x.is_prime()) # → yes{"\n"}
											show(x.factorial()) # → 120{"\n"}
											show(x.to_binary()) # → "101"
										</code>
									</pre>
								</div>
							</div>

							{/* Special Features */}
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<h5 className="font-semibold text-primary mb-2">Destacados:</h5>
								<ul className="space-y-1 text-sm text-foreground/80">
									<li>
										• <span className="font-mono">.is_prime()</span>,{" "}
										<span className="font-mono">.factorial()</span>,{" "}
										<span className="font-mono">.to_binary()</span>
									</li>
									<li>
										• Devuelve objetos tipados (OrionNumber, OrionBool,
										OrionString)
									</li>
									<li>• Operadores extendidos y comparaciones inteligentes</li>
								</ul>
							</div>
						</Card>
					</TabsContent>

					{/* OrionBool */}
					<TabsContent value="bool" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Lightbulb className="w-5 h-5" />
								class OrionBool(value)
							</h4>
							<p className="text-foreground/80 mb-4">
								Booleanos expresivos con forma y voz.
							</p>

							{/* Methods Table */}
							<div className="overflow-x-auto mb-6">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Método
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												toggle()
											</td>
											<td className="py-2 px-3 text-sm">Invierte el valor</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												to_icon()
											</td>
											<td className="py-2 px-3 text-sm">
												Devuelve [yes] o [no]
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												as_number()
											</td>
											<td className="py-2 px-3 text-sm">Convierte a número</td>
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
											flag = OrionBool(True){"\n"}
											show(flag) # → yes{"\n"}
											show(flag.toggle()) # → no{"\n"}
											show(flag.to_icon()) # → [yes]{"\n"}
											show(flag.as_number()) # → 1
										</code>
									</pre>
								</div>
							</div>

							{/* Special Features */}
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<h5 className="font-semibold text-primary mb-2">
									Lo que aporta:
								</h5>
								<ul className="space-y-1 text-sm text-foreground/80">
									<li>• Salida humanizada (yes / no)</li>
									<li>• Conversión natural a número o texto</li>
									<li>• Operaciones lógicas con elegancia</li>
								</ul>
							</div>
						</Card>
					</TabsContent>

					{/* OrionDate */}
					<TabsContent value="date" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Globe className="w-5 h-5" />
								class OrionDate(year, month, day)
							</h4>
							<p className="text-foreground/80 mb-4">
								Fechas conscientes del tiempo.
							</p>

							{/* Methods Table */}
							<div className="overflow-x-auto mb-6">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Método
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												futuristic_format()
											</td>
											<td className="py-2 px-3 text-sm">Formato futurista</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												to_future(n)
											</td>
											<td className="py-2 px-3 text-sm">Avanza n años</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												to_past(n)
											</td>
											<td className="py-2 px-3 text-sm">Retrocede n años</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												day_name()
											</td>
											<td className="py-2 px-3 text-sm">Nombre del día</td>
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
											d = OrionDate(2025, 10, 11){"\n"}
											show(d.futuristic_format()) # → "11-10-2025"{"\n"}
											show(d.to_future(3)) # → OrionDate(2028, 10, 11){"\n"}
											show(d.day_name()) # → "Saturday"
										</code>
									</pre>
								</div>
							</div>

							{/* Special Features */}
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<h5 className="font-semibold text-primary mb-2">
									Atributos únicos:
								</h5>
								<ul className="space-y-1 text-sm text-foreground/80">
									<li>
										• <span className="font-mono">.to_future()</span> y{" "}
										<span className="font-mono">.to_past()</span> para viajar en
										el tiempo
									</li>
									<li>
										• <span className="font-mono">.day_name()</span> devuelve el
										nombre del día
									</li>
									<li>• Formato futurista y legible por humanos</li>
								</ul>
							</div>
						</Card>
					</TabsContent>

					{/* OrionList */}
					<TabsContent value="list" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Brain className="w-5 h-5" />
								class OrionList(items)
							</h4>
							<p className="text-foreground/80 mb-4">
								Listas nativas con poder funcional y control total.
							</p>

							{/* Methods Table */}
							<div className="overflow-x-auto mb-6">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Método
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												map(fn)
											</td>
											<td className="py-2 px-3 text-sm">
												Aplica función a cada elemento
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												filter(fn)
											</td>
											<td className="py-2 px-3 text-sm">Filtra elementos</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												reduce(fn)
											</td>
											<td className="py-2 px-3 text-sm">Reduce la lista</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												unique()
											</td>
											<td className="py-2 px-3 text-sm">Elimina duplicados</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												shuffle()
											</td>
											<td className="py-2 px-3 text-sm">
												Mezcla aleatoriamente
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												chunk(n)
											</td>
											<td className="py-2 px-3 text-sm">Divide en sublistas</td>
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
											nums = OrionList([1, 2, 3, 4, 5]){"\n"}
											{"\n"}
											show(nums.map(x =&gt; x * 2)) # → [2, 4, 6, 8, 10]{"\n"}
											show(nums.filter(x =&gt; x &gt; 3)) # → [4, 5]{"\n"}
											show(nums.reduce((x, y) =&gt; x + y)) # → 15{"\n"}
											show(nums.unique()) # → Elimina duplicados{"\n"}
											show(nums.shuffle()) # → Mezcla aleatoriamente{"\n"}
											show(nums.chunk(2)) # → [[1,2],[3,4],[5]]
										</code>
									</pre>
								</div>
							</div>

							{/* Comparison Table */}
							<div className="mt-6">
								<h5 className="font-semibold text-primary mb-3">
									Diferencias clave con Python:
								</h5>
								<div className="overflow-x-auto">
									<table className="w-full border-collapse">
										<thead>
											<tr className="border-b border-primary/20">
												<th className="text-left py-2 px-3 text-sm font-semibold">
													En Python
												</th>
												<th className="text-left py-2 px-3 text-sm font-semibold">
													En Orion
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="py-2 px-3 font-mono text-sm">
													map(lambda x: x * 2, nums)
												</td>
												<td className="py-2 px-3 font-mono text-sm text-primary">
													nums.map(x =&gt; x * 2)
												</td>
											</tr>
											<tr>
												<td className="py-2 px-3 font-mono text-sm">
													filter(lambda x: x &gt; 3, nums)
												</td>
												<td className="py-2 px-3 font-mono text-sm text-primary">
													nums.filter(x =&gt; x &gt; 3)
												</td>
											</tr>
											<tr>
												<td className="py-2 px-3 font-mono text-sm">
													reduce(lambda x, y: x + y, nums)
												</td>
												<td className="py-2 px-3 font-mono text-sm text-primary">
													nums.reduce((x, y) =&gt; x + y)
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							{/* Note */}
							<div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
								<p className="text-sm text-foreground/80">
									En Orion, <span className="font-mono">=&gt;</span> reemplaza a{" "}
									<span className="font-mono">lambda</span> para expresar
									funciones anónimas de forma más natural y limpia.
								</p>
							</div>
						</Card>
					</TabsContent>

					{/* OrionDict */}
					<TabsContent value="dict" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Dna className="w-5 h-5" />
								class OrionDict(data)
							</h4>
							<p className="text-foreground/80 mb-4">
								Diccionario con semántica futurista.
							</p>

							{/* Methods Table */}
							<div className="overflow-x-auto mb-6">
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b border-primary/20">
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Método
											</th>
											<th className="text-left py-2 px-3 text-sm font-semibold">
												Descripción
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												has(key)
											</td>
											<td className="py-2 px-3 text-sm">¿Existe la clave?</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												merge(dict)
											</td>
											<td className="py-2 px-3 text-sm">Fusiona sin mutar</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												map(fn)
											</td>
											<td className="py-2 px-3 text-sm">
												Aplica función a cada par
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												clone()
											</td>
											<td className="py-2 px-3 text-sm">
												Copia el diccionario
											</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												remove(key)
											</td>
											<td className="py-2 px-3 text-sm">Elimina una clave</td>
										</tr>
										<tr>
											<td className="py-2 px-3 font-mono text-sm text-accent">
												clear()
											</td>
											<td className="py-2 px-3 text-sm">
												Vacía el diccionario
											</td>
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
											config = OrionDict({"{"}mode: "dark", lang: "es"{"}"})
											{"\n"}
											{"\n"}
											show(config.has("mode")) # → yes{"\n"}
											show(config.merge({"{"}theme: "galaxy"{"}"})) # → {"{"}
											mode: dark, lang: es, theme: galaxy{"}"}
											{"\n"}
											show(config.map((k, v) =&gt; `${"{k}"}=${"{v}"}`)) # →
											["mode=dark", "lang=es", "theme=galaxy"]
										</code>
									</pre>
								</div>
							</div>

							{/* Special Features */}
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<h5 className="font-semibold text-primary mb-2">
									Características:
								</h5>
								<ul className="space-y-1 text-sm text-foreground/80">
									<li>
										• <span className="font-mono">.merge()</span> para fusionar
										sin mutar el original
									</li>
									<li>
										• <span className="font-mono">.clone()</span>,{" "}
										<span className="font-mono">.remove()</span>,{" "}
										<span className="font-mono">.clear()</span>,{" "}
										<span className="font-mono">.map()</span> integrados
									</li>
									<li>• Devuelve tipos Orion, no datos planos</li>
								</ul>
							</div>
						</Card>
					</TabsContent>

					{/* Null-Safe Operator */}
					<TabsContent value="nullsafe" className="space-y-4">
						<Card className="glass-effect border-primary/20 p-6">
							<h4 className="text-xl font-semibold mb-3 font-mono text-primary flex items-center gap-2">
								<Shield className="w-5 h-5" />
								null_safe(obj, attr)
							</h4>
							<p className="text-foreground/80 mb-4">
								Evita errores sin romper el flujo.
							</p>
							<p className="text-foreground/70 mb-4">
								Operador para evitar errores nulos. Inspirado en Kotlin y Swift.
							</p>

							{/* Example */}
							<div className="space-y-3">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Code2 className="w-4 h-4" />
									<span>Ejemplo:</span>
								</div>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											user = None{"\n"}
											show(null_safe(user, "name")) # → None
										</code>
									</pre>
								</div>
							</div>

							{/* Special Features */}
							<div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
								<h5 className="font-semibold text-primary mb-2">
									Qué lo hace poderoso:
								</h5>
								<ul className="space-y-1 text-sm text-foreground/80">
									<li>• Elimina el clásico AttributeError</li>
									<li>
										• Inspirado en el operador{" "}
										<span className="font-mono">?.</span> de Kotlin y Swift
									</li>
									<li>• Seguridad sin condicionales</li>
								</ul>
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
									Tipo
								</th>
								<th className="text-left py-3 px-4 text-sm font-semibold">
									Propósito
								</th>
								<th className="text-left py-3 px-4 text-sm font-semibold">
									Destacado
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-primary/10">
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									OrionString
								</td>
								<td className="py-3 px-4 text-sm">
									Cadenas con interpolación y efectos visuales
								</td>
								<td className="py-3 px-4 text-sm font-mono">
									${"{var}"}, .wave(), .glitch()
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									OrionNumber
								</td>
								<td className="py-3 px-4 text-sm">
									Números extendidos y matemáticas avanzadas
								</td>
								<td className="py-3 px-4 text-sm font-mono">
									.factorial(), .is_prime()
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									OrionBool
								</td>
								<td className="py-3 px-4 text-sm">Booleanos humanizados</td>
								<td className="py-3 px-4 text-sm font-mono">
									yes/no, .to_icon()
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									OrionDate
								</td>
								<td className="py-3 px-4 text-sm">Fechas con viaje temporal</td>
								<td className="py-3 px-4 text-sm font-mono">
									.to_future(), .day_name()
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									OrionList
								</td>
								<td className="py-3 px-4 text-sm">
									Listas funcionales modernas
								</td>
								<td className="py-3 px-4 text-sm font-mono">
									.map(), .reduce(), .shuffle()
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									OrionDict
								</td>
								<td className="py-3 px-4 text-sm">
									Diccionarios con merge inteligente
								</td>
								<td className="py-3 px-4 text-sm font-mono">
									.merge(), .map()
								</td>
							</tr>
							<tr>
								<td className="py-3 px-4 font-mono text-sm text-primary">
									null_safe
								</td>
								<td className="py-3 px-4 text-sm">
									Operador para evitar errores nulos
								</td>
								<td className="py-3 px-4 text-sm font-mono">
									Seguridad sin condicionales
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Conclusion */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Conclusión
				</h3>
				<div className="space-y-3 text-foreground/80">
					<p>
						En Orion, los tipos primitivos no son simples estructuras.
						<br />
						Son entidades inteligentes diseñadas para expresar intención, estilo
						y propósito.
					</p>
					<p className="text-primary italic">
						Orion Core Types es la base sobre la cual el lenguaje construye su
						filosofía: "Elegancia sintáctica, poder funcional, y belleza
						expresiva."
					</p>
				</div>
			</Card>
		</div>
	);
};

export default OrionCoreTypes;
