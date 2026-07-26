import { Card } from "@/components/ui/card";
import {
	FolderOpen,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Database,
	FileText,
	Copy,
	Shield,
	Hash,
} from "lucide-react";

const ModulesFs = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<FolderOpen className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: fs.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion FileSystem Engine — Sistema de Archivos Cuántico
						</p>
						<p className="text-foreground/70 mt-2">
							Gestionar el sistema de archivos de Orion con precisión cuántica y
							elegancia minimalista. Inspirado en la eficiencia de Rust y la
							fluidez de Node.js.
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
					El módulo fs es el motor de archivos del núcleo de Orion. Forma parte
					de la System Layer, encargada de conectar la lógica del lenguaje con
					el sistema operativo, el hardware de almacenamiento y el flujo
					temporal de los datos.
				</p>
				<p className="text-foreground/70 mb-4">
					Permite manipular rutas, archivos, directorios, backups, y streams con
					una sintaxis moderna y expresiva. Todo en una interfaz limpia, rápida
					y segura, optimizada para la nueva era de desarrollo interestelar.
				</p>
				<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
					<p className="text-foreground/80 italic">
						"Donde otros lenguajes leen y escriben, Orion interactúa con la
						materia del sistema."
					</p>
					<p className="text-muted-foreground text-sm mt-1">
						— Manual Cósmico del Núcleo Orion, Capítulo IV: Estructuras del
						Espacio de Archivos.
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
									cwd()
								</td>
								<td className="py-2 px-3 text-sm">
									Devuelve el directorio actual de ejecución.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.cwd()
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									ls(path=".")
								</td>
								<td className="py-2 px-3 text-sm">
									Lista los archivos y carpetas de un directorio.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.ls()
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									read(path)
								</td>
								<td className="py-2 px-3 text-sm">
									Lee el contenido de un archivo.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.read("data.txt")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									write(path, content)
								</td>
								<td className="py-2 px-3 text-sm">
									Escribe contenido en un archivo.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.write("log.txt", "Hello Orion")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									append(path, content)
								</td>
								<td className="py-2 px-3 text-sm">
									Agrega texto al final de un archivo.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.append("log.txt", "\nMore data")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									copy(src, dst)
								</td>
								<td className="py-2 px-3 text-sm">Copia archivos.</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.copy("a.txt", "b.txt")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									autobackup(path)
								</td>
								<td className="py-2 px-3 text-sm">
									Crea copias automáticas versionadas.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.autobackup("config.json")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									snapshot(path)
								</td>
								<td className="py-2 px-3 text-sm">
									Genera un snapshot temporal del archivo o carpeta.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.snapshot("project/")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									hash(path)
								</td>
								<td className="py-2 px-3 text-sm">
									Calcula el hash rápido de un archivo.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									fs.hash("image.png")
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									stream_read(path)
								</td>
								<td className="py-2 px-3 text-sm">
									Lee archivos como stream (chunk por chunk).
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									for chunk in fs.stream_read("video.mp4"):
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Detailed Categories */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Paths & Utilities */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Settings className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> PATHS Y UTILIDADES
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Funciones que manipulan rutas y contextos del sistema de forma
						inteligente.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">use</span>{" "}
								<span className="text-foreground">fs</span>
								<br />
								<br />
								<span className="text-foreground">fs.cwd()</span>
								<span className="text-muted-foreground">
									{" "}
									# → "/Users/developer/Orion"
								</span>
								<br />
								<span className="text-foreground">fs.home()</span>
								<span className="text-muted-foreground">
									{" "}
									# → "/home/developer"
								</span>
								<br />
								<span className="text-foreground">fs.join(</span>
								<span className="text-accent">"src"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"core"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"main.orx"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.exists(</span>
								<span className="text-accent">"data.txt"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground"> # → True</span>
							</code>
						</pre>
					</div>
					<p className="text-foreground/70 text-xs mt-2">
						 Orion usa Pathlib internamente, garantizando portabilidad
						universal.
					</p>
				</Card>

				{/* Files */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<FileText className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> ARCHIVOS
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Manipulación directa de archivos — sincronizada, eficiente y segura.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">fs.write(</span>
								<span className="text-accent">"hello.txt"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"Hola Universo"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-primary">print</span>
								<span className="text-foreground">(fs.read(</span>
								<span className="text-accent">"hello.txt"</span>
								<span className="text-foreground">))</span>
								<br />
								<br />
								<span className="text-foreground">fs.append(</span>
								<span className="text-accent">"hello.txt"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"\n Bienvenido a Orion"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.copy(</span>
								<span className="text-accent">"hello.txt"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"backup.txt"</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>
					</div>
					<div className="text-xs text-foreground/70 mt-2 space-y-1">
						<p>
							<span className="font-mono text-accent">safe_write()</span> →
							escritura atómica
						</p>
						<p>
							<span className="font-mono text-accent">ensure()</span> → crea
							archivo solo si no existe
						</p>
						<p>
							<span className="font-mono text-accent">read_async()</span> →
							lectura no bloqueante
						</p>
					</div>
				</Card>
			</div>

			{/* More Categories */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Backups & Snapshots */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Copy className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> BACKUPS Y SNAPSHOTS
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Sistema de autobackups y snapshots con timestamp cuántico.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">fs.autobackup(</span>
								<span className="text-accent">"config.json"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.snapshot(</span>
								<span className="text-accent">"src/"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.versioned_snapshot(</span>
								<span className="text-accent">"src/"</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>
					</div>
					<p className="text-foreground/70 text-xs mt-2">
						 Orion mantiene un número limitado de copias, eliminando
						automáticamente las más antiguas.
					</p>
				</Card>

				{/* Hashing & Streams */}
				<Card className="glass-effect border-primary/20 p-6">
					<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
						<Hash className="w-5 h-5 text-primary" />
						<span className="text-primary"></span> HASHING Y STREAMS
					</h3>
					<p className="text-foreground/80 text-sm mb-4">
						Hashing progresivo y lectura por flujos para archivos masivos.
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">for</span>{" "}
								<span className="text-foreground">chunk, h </span>
								<span className="text-primary">in</span>{" "}
								<span className="text-foreground">fs.stream_hash(</span>
								<span className="text-accent">"video.mp4"</span>
								<span className="text-foreground">):</span>
								<br />
								<span className="text-foreground"> show(h)</span>
								<span className="text-muted-foreground">
									{" "}
									# → Hash parcial por chunk
								</span>
							</code>
						</pre>
					</div>
					<p className="text-foreground/70 text-xs mt-2">
						 Perfecto para validar integridad de descargas o verificaciones
						distribuidas.
					</p>
				</Card>
			</div>

			{/* Advanced Features */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Shield className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Funciones Futuristas
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">
							Seguridad Avanzada
						</h4>
						<ul className="text-xs text-foreground/70 space-y-1">
							<li>
								<span className="font-mono text-accent">safe_write()</span> →
								escritura atómica (usa .tmp y reemplazo seguro)
							</li>
							<li>
								<span className="font-mono text-accent">autobackup()</span> →
								backup inteligente con hashing incremental
							</li>
						</ul>
					</div>
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">
							Verificación y Versiones
						</h4>
						<ul className="text-xs text-foreground/70 space-y-1">
							<li>
								<span className="font-mono text-accent">stream_hash()</span> →
								verificación progresiva
							</li>
							<li>
								<span className="font-mono text-accent">
									versioned_snapshot()
								</span>{" "}
								→ sistema tipo git minimalista
							</li>
						</ul>
					</div>
				</div>
			</Card>

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
								<span className="text-foreground">fs</span>
								<br />
								<br />
								<span className="text-foreground">fs.write(</span>
								<span className="text-accent">"config.json"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">'{`{"mode":"test"}`}'</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.autobackup(</span>
								<span className="text-accent">"config.json"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.snapshot(</span>
								<span className="text-accent">"src/"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.versioned_snapshot(</span>
								<span className="text-accent">"src/"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">fs.reveal()</span>
								<span className="text-muted-foreground">
									{" "}
									# Muestra estructura del FS
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
								════════ Orion FS Engine ════════
								<br />
								[fs] OK: Write → config.json
								<br />
								[fs] OK: Autobackup created →
								.autobackups/config_20251012_163412.json
								<br />
								[fs] DEBUG: Snapshot saved → .snapshots/src_20251012_163423
								<br />
								[fs] DEBUG: Versioned snapshot saved →
								.vshots/src_20251012_163435
								<br />
								══════════════════════════════════
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Integration Info */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Database className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Integración con el Núcleo de
					Orion
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo fs está diseñado para interactuar con los demás motores de
					Orion:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">env</h4>
						<p className="text-xs text-foreground/70">
							para leer configuraciones y rutas dinámicas
						</p>
					</div>
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">code</h4>
						<p className="text-xs text-foreground/70">
							para mostrar trazas del sistema
						</p>
					</div>
					<div className="space-y-2">
						<h4 className="font-semibold text-accent text-sm">timewarp</h4>
						<p className="text-xs text-foreground/70">
							para retroceder estados de archivos
						</p>
					</div>
				</div>
				<p className="text-foreground/70 text-sm mt-4">
					Su diseño es thread-safe, async-friendly y preparado para futuras
					expansiones cuánticas.
				</p>
			</Card>

			{/* Futuristic Concept */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Filosofía de Orion FileSystem
					Engine
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						El módulo fs no solo lee y escribe archivos: controla el flujo de
						materia digital. Cada archivo es un átomo, cada directorio, una
						galaxia de información.
					</p>
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg">
							"El sistema de archivos no es un recurso. Es el cosmos donde Orion
							escribe su historia."
						</p>
						<p className="text-muted-foreground text-sm mt-2">
							— Manual Cósmico del Núcleo Orion, Capítulo V: La Materia
							Persistente.
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ModulesFs;
