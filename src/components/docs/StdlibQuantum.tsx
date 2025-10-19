import { Card } from "@/components/ui/card";
import {
	Atom,
	Zap,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Globe,
	Layers,
	Activity,
	Target,
} from "lucide-react";

const StdlibQuantum = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Atom className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">
							Orion Quantum+ — Advanced Quantum Computing Engine
						</h2>
						<p className="text-muted-foreground text-lg">
							Motor Avanzado de Computación Cuántica
						</p>
						<p className="text-foreground/70 mt-2">
							Eleva la computación cuántica dentro del ecosistema Orion. Sin
							dependencias obligatorias, permite construir, simular y medir
							estados cuánticos con un enfoque declarativo y funcional.
						</p>
					</div>
				</div>
			</div>

			{/* Overview */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">▪</span> Visión General
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo Orion Quantum+ eleva la computación cuántica dentro del
					ecosistema Orion. Sin dependencias obligatorias (NumPy opcional para
					aceleración), permite construir, simular y medir estados cuánticos con
					un enfoque declarativo y funcional.
				</p>
				<div className="space-y-3">
					<h4 className="text-lg font-semibold text-accent">Diseñado para:</h4>
					<ul className="text-foreground/80 space-y-2 ml-4">
						<li>• Simular qubits, puertas y circuitos cuánticos</li>
						<li>
							• Implementar puertas universales y sistemas multi-qubit
							arbitrarios
						</li>
						<li>• Incorporar modelos de ruido cuántico realistas</li>
						<li>• Ofrecer una API de alto nivel compatible con orion_export</li>
					</ul>
				</div>
			</Card>

			{/* Conceptual Core */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">🌌</span> Núcleo Conceptual
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						Un estado cuántico se representa como un vector complejo
						normalizado:
					</p>
					<div className="glass-effect rounded-lg p-4 border border-primary/10 text-center">
						<code className="font-mono text-lg">∣ψ⟩ = α∣0⟩ + β∣1⟩</code>
					</div>
					<p className="text-foreground/80">
						Los gates son matrices unitarias que actúan sobre estos vectores,
						preservando su normalización y coherencia de fase.
					</p>
				</div>
			</Card>

			{/* Main Components */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary">⚙️</span> Componentes Principales
				</h3>

				{/* Normalization and Tensors */}
				<div className="space-y-6">
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Layers className="w-5 h-5" />
							🔹 Normalización y Tensores
						</h4>
						<div className="space-y-2 text-sm">
							<div className="flex gap-2">
								<span className="font-mono text-accent">_normalize(state)</span>
								<span className="text-foreground/70">
									→ Garantiza la conservación de la norma cuántica.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">_tensor(a, b)</span>
								<span className="text-foreground/70">
									→ Construye sistemas multi-qubit vía productos tensoriales.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									_apply_matrix(state, mat)
								</span>
								<span className="text-foreground/70">
									→ Aplica transformaciones unitarias.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">_to_np()</span>
								<span className="text-foreground/70">
									→ Usa NumPy si está disponible, acelerando operaciones.
								</span>
							</div>
						</div>
					</div>

					{/* Qubits and Gates */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Zap className="w-5 h-5" />
							🔹 Qubits y Puertas Básicas
						</h4>
						<div className="space-y-2 text-sm">
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									qubit(alpha, beta)
								</span>
								<span className="text-foreground/70">
									→ Crea y normaliza qubits individuales.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									zero(), one(), rand_qubit()
								</span>
								<span className="text-foreground/70">
									→ Estados básicos y aleatorios en la esfera de Bloch.
								</span>
							</div>
						</div>

						<div className="mt-4">
							<h5 className="text-md font-semibold text-accent mb-2">
								Puertas fundamentales:
							</h5>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
								<div className="font-mono text-accent">I — Identidad</div>
								<div className="font-mono text-accent">X, Y, Z — Pauli</div>
								<div className="font-mono text-accent">H — Hadamard</div>
								<div className="font-mono text-accent">S, T — Fases</div>
								<div className="font-mono text-accent col-span-2">
									CNOT — Control-NOT (2 qubits)
								</div>
							</div>
						</div>
					</div>

					{/* Multi-Qubit Manipulation */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Settings className="w-5 h-5" />
							🔹 Manipulación Multi-Qubit
						</h4>
						<div className="space-y-2 text-sm">
							<div className="flex gap-2">
								<span className="font-mono text-accent">tensor(*states)</span>
								<span className="text-foreground/70">
									→ Combina múltiples estados o puertas.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									gates_tensor(*gates)
								</span>
								<span className="text-foreground/70">
									→ Producto tensorial de puertas.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									expand_single_qubit_gate(gate, target_index, n_qubits)
								</span>
								<span className="text-foreground/70">
									→ Inserta una puerta en la posición deseada.
								</span>
							</div>
							<div className="flex gap-2">
								<span className="font-mono text-accent">
									control_gate(base_gate, control_index, target_index, n_qubits)
								</span>
								<span className="text-foreground/70">
									→ Genera puertas controladas genéricas.
								</span>
							</div>
						</div>
					</div>
				</div>
			</Card>

			{/* Circuit Construction */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Code2 className="w-5 h-5 text-primary" />
					🔹 Construcción de Circuitos
				</h3>

				<div className="space-y-4">
					<div className="space-y-2 text-sm">
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								apply_circuit(state, n_qubits, ops)
							</span>
							<span className="text-foreground/70">
								→ Ejecuta listas de operaciones sobre un estado.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								apply_single_qubit(state, gate, target, n_qubits)
							</span>
							<span className="text-foreground/70">
								→ Aplica puerta de un qubit.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								apply_controlled_gate(state, base_gate, control, target,
								n_qubits)
							</span>
							<span className="text-foreground/70">
								→ Aplica puerta controlada.
							</span>
						</div>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">Ejemplo:</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">ops = [</span>
									<br />
									<span className="text-foreground"> (</span>
									<span className="text-accent">"single"</span>
									<span className="text-foreground">, (H, </span>
									<span className="text-accent">0</span>
									<span className="text-foreground">)),</span>
									<span className="text-muted-foreground">
										{" "}
										# Hadamard en qubit 0
									</span>
									<br />
									<span className="text-foreground"> (</span>
									<span className="text-accent">"controlled"</span>
									<span className="text-foreground">, (X, </span>
									<span className="text-accent">0</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">1</span>
									<span className="text-foreground">)),</span>
									<span className="text-muted-foreground">
										{" "}
										# CNOT entre qubits 0 y 1
									</span>
									<br />
									<span className="text-foreground">]</span>
									<br />
									<span className="text-foreground">
										result = apply_circuit(state,{" "}
									</span>
									<span className="text-accent">2</span>
									<span className="text-foreground">, ops)</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							El motor de simulación garantiza normalización y coherencia fase a
							fase.
						</p>
					</div>
				</div>
			</Card>

			{/* States and Entanglement */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					🔹 Estados y Entrelazamiento
				</h3>

				<div className="space-y-4">
					<div className="space-y-2 text-sm">
						<div className="flex gap-2">
							<span className="font-mono text-accent">bell_pair()</span>
							<span className="text-foreground/70">
								→ Crea el entrelazamiento clásico.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">entangle(a, b)</span>
							<span className="text-foreground/70">
								→ Producto tensorial normalizado entre qubits.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								state_from_bits("01")
							</span>
							<span className="text-foreground/70">
								→ Genera el estado computacional base (|bitstring⟩).
							</span>
						</div>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							Par de Bell clásico:
						</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10 text-center">
							<code className="font-mono text-lg">(∣00⟩ + ∣11⟩) / √2</code>
						</div>
					</div>
				</div>
			</Card>

			{/* Quantum Noise Models */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Activity className="w-5 h-5 text-primary" />
					🔹 Modelos de Ruido Cuántico
				</h3>

				<div className="space-y-4">
					<div className="space-y-2 text-sm">
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								amplitude_damping_per_qubit(state, gammas)
							</span>
							<span className="text-foreground/70">
								→ Atenuación por-qubit dependiente del estado |1⟩.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								depolarizing_per_qubit(state, ps)
							</span>
							<span className="text-foreground/70">
								→ Mezcla con estado maximálmente mixto.
							</span>
						</div>
					</div>

					<p className="text-foreground/80 text-sm">
						Simulan pérdida de coherencia y permiten explorar efectos físicos de
						decoherencia y fidelidad en sistemas simulados.
					</p>
				</div>
			</Card>

			{/* Measurement and Metrics */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Target className="w-5 h-5 text-primary" />
					🔹 Medición y Métricas
				</h3>

				<div className="space-y-4">
					<div className="space-y-2 text-sm">
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								measure(state, shots=1024)
							</span>
							<span className="text-foreground/70">
								→ Realiza muestreo probabilístico.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">
								measure_probabilities(state)
							</span>
							<span className="text-foreground/70">
								→ Entrega las probabilidades teóricas exactas.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">fidelity(s1, s2)</span>
							<span className="text-foreground/70">
								→ Mide la cercanía entre dos estados.
							</span>
						</div>
						<div className="flex gap-2">
							<span className="font-mono text-accent">bloch_vector(state)</span>
							<span className="text-foreground/70">
								→ Devuelve las coordenadas (x, y, z) del vector de Bloch.
							</span>
						</div>
					</div>
				</div>
			</Card>

			{/* Universal Entry Point */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					🔹 Punto de Entrada Universal
				</h3>

				<div className="space-y-4">
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-primary">fn</span>{" "}
								<span className="text-accent">quantum</span>
								<span className="text-foreground">(action=</span>
								<span className="text-accent">"qubit"</span>
								<span className="text-foreground">, *args, **kwargs)</span>
							</code>
						</pre>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">Ejemplos:</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">quantum(</span>
									<span className="text-accent">"rand"</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# qubit aleatorio
									</span>
									<br />
									<span className="text-foreground">quantum(</span>
									<span className="text-accent">"bell"</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground"> # par de Bell</span>
									<br />
									<span className="text-foreground">quantum(</span>
									<span className="text-accent">"measure"</span>
									<span className="text-foreground">, state, shots=</span>
									<span className="text-accent">512</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">quantum(</span>
									<span className="text-accent">"apply_circuit"</span>
									<span className="text-foreground">, state, </span>
									<span className="text-accent">2</span>
									<span className="text-foreground">, ops)</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/80 text-sm">
							Sirve como interfaz dinámica y extensible para todas las funciones
							cuánticas de Orion.
						</p>
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
								<span className="text-foreground">quantum</span>
								<br />
								<br />
								<span className="text-muted-foreground">
									# Crear un par de Bell entrelazado
								</span>
								<br />
								<span className="text-foreground">bell_state = quantum(</span>
								<span className="text-accent">"bell"</span>
								<span className="text-foreground">)</span>
								<br />
								<br />
								<span className="text-muted-foreground"># Medir el estado</span>
								<br />
								<span className="text-foreground">results = quantum(</span>
								<span className="text-accent">"measure"</span>
								<span className="text-foreground">, bell_state, shots=</span>
								<span className="text-accent">1000</span>
								<span className="text-foreground">)</span>
								<br />
								<br />
								<span className="text-muted-foreground">
									# Calcular fidelidad
								</span>
								<br />
								<span className="text-foreground">q1 = quantum(</span>
								<span className="text-accent">"rand"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">q2 = quantum(</span>
								<span className="text-accent">"rand"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">f = quantum(</span>
								<span className="text-accent">"fidelity"</span>
								<span className="text-foreground">, q1, q2)</span>
								<br />
								<br />
								<span className="text-foreground">show(f)</span>
							</code>
						</pre>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Terminal className="w-4 h-4" />
						<span>Salida:</span>
					</div>
					<div className="bg-background/50 rounded-lg p-4 border border-primary/30">
						<pre className="text-sm">
							<code className="font-mono text-primary">0.7234567890123456</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Orion Runtime Export */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					🔹 Exportación Orion Runtime
				</h3>

				<div className="space-y-4">
					<div className="glass-effect rounded-lg p-4 border border-primary/10">
						<pre className="text-sm">
							<code className="font-mono">
								<span className="text-foreground">ALIASES = {"{...}"}</span>
								<br />
								<span className="text-primary">fn</span>{" "}
								<span className="text-accent">orion_export</span>
								<span className="text-foreground">():</span>
								<br />
								<span className="text-foreground"> exports = {"{"}</span>
								<span className="text-accent">"quantum"</span>
								<span className="text-foreground">: quantum{"}"}</span>
								<br />
								<span className="text-foreground">
									{" "}
									exports.update(ALIASES)
								</span>
								<br />
								<span className="text-primary"> return</span>{" "}
								<span className="text-foreground">exports</span>
							</code>
						</pre>
					</div>

					<p className="text-foreground/80 text-sm">
						Proporciona integración directa con el entorno Orion Runtime,
						exponiendo todas las primitivas: qubit, tensor, bell, apply,
						measure, fidelity, bloch, entre otras.
					</p>
				</div>
			</Card>

			{/* Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					🧠 Filosofía Orion Quantum
				</h3>
				<div className="space-y-4">
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg mb-4">
							"Orion Quantum+ no busca solo simular sistemas cuánticos, sino
							ofrecer una semántica expresiva que unifique álgebra, probabilidad
							y decoherencia bajo un mismo lenguaje."
						</p>
						<p className="text-muted-foreground text-sm">
							Diseñado para investigación, docencia y experimentación avanzada
							en simulación cuántica simbólica.
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default StdlibQuantum;
