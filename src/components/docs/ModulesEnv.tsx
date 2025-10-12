import { Card } from "@/components/ui/card";
import {
	Cloud,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Globe,
} from "lucide-react";

const ModulesEnv = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Cloud className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: env.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion ENV Engine — Entorno Atmosférico
						</p>
						<p className="text-foreground/70 mt-2">
							Gestionar el entorno atmosférico de ejecución de Orion: variables
							globales, configuraciones, y estados del sistema.
						</p>
					</div>
				</div>
			</div>

			{/* Description */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">☁️</span> Descripción General
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo env forma parte de la capa Atmospheric Layer de Orion.
					Conecta el Core del lenguaje con el ecosistema externo: variables de
					entorno, archivos .env, y configuraciones del entorno lógico o físico
					donde se ejecuta un script Orion.
				</p>
				<p className="text-foreground/70 mb-4">
					Sirve como una interfaz universal para extraer, definir y revelar el
					ambiente en el que una instancia de Orion vive.
				</p>
				<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
					<p className="text-foreground/80 italic">
						"El entorno no es un límite; es la atmósfera donde Orion respira."
					</p>
					<p className="text-muted-foreground text-sm mt-1">🌠</p>
				</div>
			</Card>

			{/* Main Functions */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">⚙️</span> Funciones Principales
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
									load(path=".env")
								</td>
								<td className="py-2 px-3 text-sm">
									Carga variables desde un archivo .env.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									env.load()
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									pull(key, default=None)
								</td>
								<td className="py-2 px-3 text-sm">
									Obtiene una variable del entorno.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									env.pull("API_KEY")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									push(key, value)
								</td>
								<td className="py-2 px-3 text-sm">
									Define o actualiza una variable del entorno.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									env.push("MODE", "production")
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									reveal()
								</td>
								<td className="py-2 px-3 text-sm">
									Muestra todas las variables del entorno actual.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									env.reveal()
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Detailed Functions */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Settings className="w-5 h-5 text-primary" />
					<span className="text-primary">🌍</span> Funciones Detalladas
				</h3>

				<div className="space-y-6">
					{/* load() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							1. load(path=".env")
						</h4>
						<p className="text-foreground/80 text-sm">
							Carga las variables del archivo .env en el entorno actual del
							sistema.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-primary">use</span>{" "}
									<span className="text-foreground">env</span>
									<br />
									<br />
									<span className="text-foreground">env.load()</span>
									<br />
									<span className="text-muted-foreground">
										# → Loading Environment (.env)
									</span>
									<br />
									<span className="text-muted-foreground">
										# → API_KEY = 12345
									</span>
									<br />
									<span className="text-muted-foreground">
										# → MODE = development
									</span>
									<br />
									<span className="text-muted-foreground">
										# ✓ 2 environment variables loaded.
									</span>
								</code>
							</pre>
						</div>
					</div>

					{/* pull() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							2. pull(key, default=None)
						</h4>
						<p className="text-foreground/80 text-sm">
							Obtiene el valor de una variable del entorno. Si la variable no
							existe, retorna el valor default (opcional).
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">key = env.pull(</span>
									<span className="text-accent">"API_KEY"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">mode = env.pull(</span>
									<span className="text-accent">"MODE"</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">"debug"</span>
									<span className="text-foreground">)</span>
								</code>
							</pre>
						</div>
						<div className="bg-background/50 rounded-lg p-3 border border-primary/30">
							<pre className="text-xs">
								<code className="font-mono text-primary">
									[env] INFO: API_KEY = 12345
									<br />
									[env] WARN: MODE not found. Default = debug
								</code>
							</pre>
						</div>
					</div>

					{/* push() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							3. push(key, value)
						</h4>
						<p className="text-foreground/80 text-sm">
							Define o actualiza una variable en el entorno actual.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">env.push(</span>
									<span className="text-accent">"MODE"</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">"production"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-muted-foreground">
										# [env] OK: Set: MODE = production
									</span>
								</code>
							</pre>
						</div>
					</div>

					{/* reveal() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">4. reveal()</h4>
						<p className="text-foreground/80 text-sm">
							Muestra un snapshot completo del entorno actual, con todas las
							variables cargadas.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">env.reveal()</span>
								</code>
							</pre>
						</div>
						<div className="bg-background/50 rounded-lg p-3 border border-primary/30">
							<pre className="text-xs">
								<code className="font-mono text-primary">
									════════ ENVIRONMENT SNAPSHOT ════════
									<br />
									[env] DEBUG: API_KEY=12345
									<br />
									[env] DEBUG: MODE=production
									<br />
									[env] DEBUG: PATH=/usr/local/bin
									<br />
									...
								</code>
							</pre>
						</div>
					</div>
				</div>
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
								<span className="text-foreground">env</span>
								<br />
								<br />
								<span className="text-foreground">env.load()</span>
								<span className="text-muted-foreground">
									{" "}
									# Carga el entorno
								</span>
								<br />
								<span className="text-foreground">api = env.pull(</span>
								<span className="text-accent">"API_KEY"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground">
									{" "}
									# Obtiene variable
								</span>
								<br />
								<span className="text-foreground">env.push(</span>
								<span className="text-accent">"MODE"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"test"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground">
									{" "}
									# Define variable
								</span>
								<br />
								<span className="text-foreground">env.reveal()</span>
								<span className="text-muted-foreground">
									{" "}
									# Muestra snapshot
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
								════════ Loading Environment (.env) ════════
								<br />
								[env] DEBUG: API_KEY = 12345
								<br />
								[env] OK: 1 environment variables loaded.
								<br />
								[env] INFO: API_KEY = 12345
								<br />
								[env] OK: Set: MODE = test
								<br />
								════════ ENVIRONMENT SNAPSHOT ════════
								<br />
								[env] DEBUG: API_KEY=12345
								<br />
								[env] DEBUG: MODE=test
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Integration Info */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-primary">🧩</span> Integración con el Core de
					Orion
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo env depende del submódulo interno{" "}
					<span className="font-mono text-accent">modules.code</span>, el cual
					gestiona los estilos de salida, trazas, y mensajes del sistema
					(funciones como <span className="font-mono text-accent">ok</span>,{" "}
					<span className="font-mono text-accent">warn</span>,{" "}
					<span className="font-mono text-accent">info</span>,{" "}
					<span className="font-mono text-accent">debug</span>,{" "}
					<span className="font-mono text-accent">divider</span>, etc.).
				</p>
				<p className="text-foreground/70">
					Esto permite una integración visual uniforme en toda la consola de
					Orion.
				</p>
			</Card>

			{/* Futuristic Concept */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary">🪐</span> Filosofía de Orion ENV Engine
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						El ENV Engine no solo gestiona variables: define la atmósfera
						conceptual donde se ejecuta Orion. Cargar un entorno no es solo leer
						un .env; es activar una realidad alternativa del programa.
					</p>
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg">
							"Cada variable de entorno es un átomo en la atmósfera de Orion."
						</p>
						<p className="text-muted-foreground text-sm mt-2">
							— Manual Cósmico del Núcleo Orion, Capítulo III
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ModulesEnv;
