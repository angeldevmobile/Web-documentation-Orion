import { Card } from "@/components/ui/card";
import {
	Braces,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Database,
	Zap,
	Shield,
	RefreshCw,
	Filter,
} from "lucide-react";

const ModulesJson = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Braces className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: json.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion JSON Engine — Manipulación Cuántica de Datos
						</p>
						<p className="text-foreground/70 mt-2">
							Dominar la estructura del universo digital mediante la
							manipulación pura y elegante de datos JSON. Inspirado en la
							simplicidad de Python, la semántica de Lisp y la expresividad
							humana de Orion.
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
					El módulo json es el canal de energía de datos de Orion. Convierte
					estructuras digitales en materia viva: absorbe, purifica y emite JSON
					con precisión cuántica y legibilidad humana.
				</p>
				<p className="text-foreground/70 mb-4">
					Forma parte del Data Layer del Núcleo Orion — un conjunto de motores
					destinados a la transformación y validación de estructuras
					inteligentes.
				</p>
				<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
					<p className="text-foreground/80 italic">
						"Donde otros ven texto, Orion percibe estructuras en movimiento."
					</p>
					<p className="text-muted-foreground text-sm mt-1">
						— Manual Cósmico del Núcleo Orion, Capítulo VII: El Lenguaje de los
						Datos
					</p>
				</div>
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
									absorb(path)
								</td>
								<td className="py-2 px-3 text-sm">
									Absorbe un archivo JSON y lo convierte en un objeto Orion.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									data = json.absorb("users.json")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									emit(path, obj, beauty=True)
								</td>
								<td className="py-2 px-3 text-sm">
									Emite un objeto Orion como JSON a disco.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									json.emit("out.json", data)
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									parse(raw)
								</td>
								<td className="py-2 px-3 text-sm">
									Transmuta una cadena JSON en un objeto Orion.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									obj = json.parse('{`{"x":1}`}')
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									forge(obj, beauty=False)
								</td>
								<td className="py-2 px-3 text-sm">
									Forja un JSON a partir de un objeto Orion.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									txt = json.forge(obj, True)
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									fuse(*objs)
								</td>
								<td className="py-2 px-3 text-sm">
									Fusiona múltiples estructuras JSON en una entidad unificada.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									merged = json.fuse(a, b)
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									trace(obj, path)
								</td>
								<td className="py-2 px-3 text-sm">
									Navega dentro de una estructura JSON mediante rutas.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									json.trace(user, "profile.name")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									shiftmap(a, b)
								</td>
								<td className="py-2 px-3 text-sm">
									Muestra diferencias entre dos estructuras.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									diff = json.shiftmap(old, new)
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									validate(obj, schema)
								</td>
								<td className="py-2 px-3 text-sm">
									Valida un objeto según un esquema de tipos.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									json.validate(user, {`{"name":"str","age":"int"}`})
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Detailed Categories */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Absorption & Emission */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Database className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> ABSORCIÓN Y EMISIÓN
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Transforma archivos JSON en entidades vivas de Orion o viceversa.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">use</span>{" "}
								<span className="text-foreground">json</span>
								<br />
								<br />
								<span className="text-foreground">data = json.absorb(</span>
								<span className="text-accent">"config.json"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">data[</span>
								<span className="text-accent">"mode"</span>
								<span className="text-foreground">] = </span>
								<span className="text-accent">"production"</span>
								<br />
								<span className="text-foreground">json.emit(</span>
								<span className="text-accent">"config.json"</span>
								<span className="text-foreground">, data, beauty=</span>
								<span className="text-primary">True</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p>
							<span className="font-mono text-accent">absorb()</span> → lectura
							simbiótica
						</p>
						<p>
							<span className="font-mono text-accent">emit()</span> → escritura
							elegante con formato UTF-8
						</p>
						<p>
							<span className="font-mono text-accent">forge()</span> y{" "}
							<span className="font-mono text-accent">parse()</span> →
							manipulación directa de cadenas
						</p>
					</div>
				</Card>

				{/* Fusion & Traceability */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<RefreshCw className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> FUSIÓN Y TRAZABILIDAD
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Fusiona, navega y compara universos de datos.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">
									merged = json.fuse(configA, configB)
								</span>
								<br />
								<span className="text-foreground">
									value = json.trace(merged,{" "}
								</span>
								<span className="text-accent">"system.version"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">
									exists = json.haspath(merged,{" "}
								</span>
								<span className="text-accent">"user.settings"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">
									diffs = json.shiftmap(old_data, new_data)
								</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p>
							<span className="font-mono text-accent">fuse()</span> → combina
							entidades con inteligencia estructural
						</p>
						<p>
							<span className="font-mono text-accent">trace()</span> → explora
							rutas como "user.profile.name"
						</p>
						<p>
							<span className="font-mono text-accent">shiftmap()</span> → revela
							mutaciones, ideal para auditorías
						</p>
					</div>
				</Card>
			</div>

			{/* More Categories */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Dynamic Manipulation */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Filter className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> MANIPULACIÓN DINÁMICA
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Manipulación funcional, limpia y expresiva de datos.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">
									filtered = json.filter_by(users, λ u: u[
								</span>
								<span className="text-accent">"active"</span>
								<span className="text-foreground">] == </span>
								<span className="text-primary">True</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">
									subset = json.extract(user, [
								</span>
								<span className="text-accent">"name"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"email"</span>
								<span className="text-foreground">])</span>
								<br />
								<span className="text-foreground">
									copy = json.replicate(user)
								</span>
								<br />
								<span className="text-foreground">
									clean = json.purify(data)
								</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p>
							<span className="font-mono text-accent">filter_by()</span> →
							filtra con funciones lambda
						</p>
						<p>
							<span className="font-mono text-accent">extract()</span> → extrae
							campos clave
						</p>
						<p>
							<span className="font-mono text-accent">purify()</span> → elimina
							valores vacíos o nulos
						</p>
					</div>
				</Card>

				{/* Advanced Operations */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Settings className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> OPERACIONES AVANZADAS
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Control total sobre estructuras complejas y determinismo
						estructural.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">
									merged = json.merge_deep(cfgA, cfgB)
								</span>
								<br />
								<span className="text-foreground">
									sorted_cfg = json.sort_keys(merged)
								</span>
								<br />
								<span className="text-foreground">
									patched = json.patch(user,{" "}
								</span>
								<span className="text-accent">{`{"age": 31}`}</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p>
							<span className="font-mono text-accent">merge_deep()</span> →
							fusión recursiva
						</p>
						<p>
							<span className="font-mono text-accent">sort_keys()</span> →
							ordena claves para reproducibilidad
						</p>
						<p>
							<span className="font-mono text-accent">patch()</span> → cambios
							rápidos en pipelines dinámicos
						</p>
					</div>
				</Card>
			</div>

			{/* Validation & Streams */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Validation */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Shield className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> VALIDACIÓN Y ESTRUCTURAS
						VIVAS
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Valida entidades según esquemas declarativos.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">schema = </span>
								<span className="text-accent">{`{"name": "str", "age": "int", "active": "bool"}`}</span>
								<br />
								<span className="text-foreground">
									json.validate(user, schema)
								</span>
								<span className="text-muted-foreground"> # → True o False</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p> Detección de tipos (str, int, bool, float)</p>
						<p> Soporte para listas y objetos anidados</p>
						<p> Reporte detallado de errores mediante trazas [DEBUG]</p>
					</div>
				</Card>

				{/* Streams & Encryption */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Zap className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> STREAMS Y ENCRIPTACIÓN
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Procesa grandes estructuras o transmite datos protegidos.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">for</span>{" "}
								<span className="text-foreground">chunk </span>
								<span className="text-primary">in</span>{" "}
								<span className="text-foreground">json.stream_absorb(</span>
								<span className="text-accent">"massive.json"</span>
								<span className="text-foreground">):</span>
								<br />
								<span className="text-foreground"> show(chunk)</span>
								<br />
								<br />
								<span className="text-foreground">
									encrypted = json.encrypt(data, key=42)
								</span>
								<br />
								<span className="text-foreground">
									original = json.decrypt(encrypted, key=42)
								</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p>
							 <span className="font-mono text-accent">stream_absorb()</span>{" "}
							→ lectura progresiva (chunk por chunk)
						</p>
						<p>
							 <span className="font-mono text-accent">encrypt()</span> /{" "}
							<span className="font-mono text-accent">decrypt()</span> → cifrado
							XOR simbólico
						</p>
					</div>
				</Card>
			</div>

			{/* Usage Example */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Ejemplo Completo
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
								<span className="text-foreground">json</span>
								<br />
								<br />
								<span className="text-foreground">config = json.absorb(</span>
								<span className="text-accent">"system.json"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">json.validate(config, </span>
								<span className="text-accent">{`{"mode":"str", "version":"str"}`}</span>
								<span className="text-foreground">)</span>
								<br />
								<br />
								<span className="text-foreground">config[</span>
								<span className="text-accent">"mode"</span>
								<span className="text-foreground">] = </span>
								<span className="text-accent">"quantum"</span>
								<br />
								<span className="text-foreground">json.emit(</span>
								<span className="text-accent">"system.json"</span>
								<span className="text-foreground">, config, beauty=</span>
								<span className="text-primary">True</span>
								<span className="text-foreground">)</span>
								<br />
								<br />
								<span className="text-foreground">
									backup = json.replicate(config)
								</span>
								<br />
								<span className="text-foreground">
									purified = json.purify(backup)
								</span>
								<br />
								<span className="text-foreground">json.emit(</span>
								<span className="text-accent">"clean.json"</span>
								<span className="text-foreground">, purified)</span>
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
								════════ Orion JSON Engine ════════
								<br />
								[json] OK: Absorb → system.json
								<br />
								[json] DEBUG: Valid schema → ✓
								<br />
								[json] OK: Forge + Emit → clean.json
								<br />
								═══════════════════════════════════
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Integration Info */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Database className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Integración con el Núcleo
					Orion
				</h3>
				<p className="text-foreground/80 mb-4">
					El motor JSON trabaja en armonía con otros módulos del ecosistema:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">fs</h4>
						<p className="text-xs text-foreground/70">
							lectura y escritura de archivos
						</p>
					</div>
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">crypto</h4>
						<p className="text-xs text-foreground/70">
							cifrado estructural avanzado
						</p>
					</div>
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">timewarp</h4>
						<p className="text-xs text-foreground/70">
							registro y reversión de estados JSON
						</p>
					</div>
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">matrix</h4>
						<p className="text-xs text-foreground/70">
							análisis y modelado multidimensional
						</p>
					</div>
				</div>
				<p className="text-foreground/70 text-sm mt-4">
					Todos los motores se comunican bajo los principios de fluidez,
					legibilidad, y precisión cósmica.
				</p>
			</Card>

			{/* Futuristic Concept */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Filosofía del Módulo JSON
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						El módulo json no se limita a leer o escribir datos. Interpreta la
						estructura del universo digital.
					</p>
					<p className="text-foreground/70">
						Cada llave es una coordenada, cada valor, una vibración dentro del
						espacio de datos.
					</p>
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg">
							"JSON no es texto. Es un tejido vivo que respira información."
						</p>
						<p className="text-muted-foreground text-sm mt-2">
							— Manual Cósmico del Núcleo Orion, Capítulo VII: El Lenguaje de
							los Datos
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ModulesJson;
