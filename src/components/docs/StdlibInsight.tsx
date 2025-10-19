import { Card } from "@/components/ui/card";
import { Eye, Code2, Terminal, Sparkles, Globe, Brain } from "lucide-react";

const StdlibInsight = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Eye className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: insight.py</h2>
						<p className="text-muted-foreground text-lg">
							Orion Vision Engine — El Ojo Analítico
						</p>
						<p className="text-foreground/70 mt-2">
							Dar visión a las máquinas. Convertir documentos estáticos en
							estructuras vivas de información. Inspirado en la percepción
							humana, la precisión matemática y la conciencia estructural de
							Orion.
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
					El módulo insight representa el ojo analítico del Núcleo Orion. Extrae
					conocimiento de documentos escaneados, formularios, contratos o
					imágenes, transformando píxeles en datos conscientes y estructurados.
				</p>
				<p className="text-foreground/80 mb-4">
					Opera en modo OCR heurístico sin dependencias externas, usando
					principios de binarización, contraste y geometría simbólica.
				</p>
				<p className="text-foreground/70 mb-4">
					Forma parte del Vision Layer de Orion, donde la observación se
					convierte en interpretación.
				</p>
				<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
					<p className="text-foreground/80 italic">
						"No vemos imágenes, vemos estructuras de significado."
					</p>
					<p className="text-muted-foreground text-sm mt-1">
						— Manual Cósmico del Núcleo Orion, Capítulo XI: El Ojo del Universo
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
									extract_text_blocks(img)
								</td>
								<td className="py-2 px-3 text-sm">
									Detecta zonas de texto en un documento escaneado.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									blocks = insight.extract_text_blocks("scan.jpg")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									extract_tables(img)
								</td>
								<td className="py-2 px-3 text-sm">
									Reconoce posibles estructuras tabulares (líneas cruzadas).
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									tbl = insight.extract_tables("form.png")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									extract_metadata(img)
								</td>
								<td className="py-2 px-3 text-sm">
									Calcula propiedades visuales (densidad, orientación,
									contraste).
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									meta = insight.extract_metadata("doc.jpg")
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 font-mono text-sm text-accent">
									extract_signatures(img)
								</td>
								<td className="py-2 px-3 text-sm">
									Identifica firmas o sellos por irregularidad de trazos.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									sig = insight.extract_signatures("contract.png")
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 font-mono text-sm text-accent">
									summarize(img)
								</td>
								<td className="py-2 px-3 text-sm">
									Devuelve un resumen estructurado con todos los análisis.
								</td>
								<td className="py-2 px-3 font-mono text-sm text-muted-foreground">
									res = insight.summarize("page1.jpg")
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>

			{/* Detailed Functions */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Brain className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Funciones Detalladas
				</h3>

				<div className="space-y-6">
					{/* extract_text_blocks() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							1. PERCEPCIÓN VISUAL — El Despertar de la Imagen
						</h4>
						<p className="text-foreground/80 text-sm mb-2">
							<span className="font-mono text-accent">
								extract_text_blocks(img)
							</span>
						</p>
						<p className="text-foreground/80 text-sm">
							Orion comienza observando. Antes de interpretar, binariza,
							reduciendo el universo de tonos a una realidad dual: luz y
							oscuridad.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-primary">use</span>{" "}
									<span className="text-foreground">insight</span>
									<br />
									<br />
									<span className="text-foreground">img = </span>
									<span className="text-accent">"documento.png"</span>
									<br />
									<span className="text-foreground">
										blocks = insight.extract_text_blocks(img)
									</span>
									<br />
									<span className="text-foreground">show(</span>
									<span className="text-accent">"Bloques detectados:"</span>
									<span className="text-foreground">, len(blocks))</span>
								</code>
							</pre>
						</div>
						<div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
							<p className="text-sm text-primary"></p>
							<p className="text-foreground/80 text-sm">
								Esta función emplea exploración por vecindad y detección de
								regiones coherentes, identificando bloques de texto con
								sorprendente precisión, incluso en imágenes degradadas.
							</p>
						</div>
					</div>

					{/* extract_tables() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							2. ESTRUCTURAS Y TABLAS — El Orden dentro del Caos
						</h4>
						<p className="text-foreground/80 text-sm mb-2">
							<span className="font-mono text-accent">extract_tables(img)</span>
						</p>
						<p className="text-foreground/80 text-sm">
							Las líneas definen el pensamiento. En los documentos, ellas forman
							las tablas, las estructuras donde habita la información.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										tbl = insight.extract_tables(
									</span>
									<span className="text-accent">"formulario.jpg"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-primary">if</span>{" "}
									<span className="text-foreground">tbl[</span>
									<span className="text-accent">"detected"</span>
									<span className="text-foreground">]:</span>
									<br />
									<span className="text-foreground"> show(</span>
									<span className="text-accent">
										"Tabla detectada con confianza:"
									</span>
									<span className="text-foreground">, tbl[</span>
									<span className="text-accent">"confidence"</span>
									<span className="text-foreground">])</span>
								</code>
							</pre>
						</div>
						<div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
							<p className="text-sm text-accent"></p>
							<p className="text-foreground/80 text-sm mb-2">
								Mediante un conteo heurístico de líneas horizontales y
								verticales, Orion detecta cuadrículas dominantes sin depender de
								OCR externo.
							</p>
							<p className="text-foreground/70 text-sm font-semibold mb-1">
								Ideal para:
							</p>
							<ul className="text-foreground/70 text-sm space-y-1 ml-4">
								<li>• Formularios financieros</li>
								<li>• Extractos bancarios</li>
								<li>• Hojas de cálculo escaneadas</li>
							</ul>
						</div>
					</div>

					{/* extract_metadata() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							3. METADATOS VISUALES — El ADN del Documento
						</h4>
						<p className="text-foreground/80 text-sm mb-2">
							<span className="font-mono text-accent">
								extract_metadata(img)
							</span>
						</p>
						<p className="text-foreground/80 text-sm">
							Orion no solo ve el contenido, sino el contexto: densidad,
							orientación y contraste forman el ADN visual del archivo.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										meta = insight.extract_metadata(
									</span>
									<span className="text-accent">"contrato.jpg"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">show(meta)</span>
								</code>
							</pre>
						</div>
						<div className="bg-background/50 rounded-lg p-3 border border-primary/30">
							<p className="text-sm font-semibold text-foreground mb-2">
								Salida típica:
							</p>
							<pre className="text-xs">
								<code className="font-mono text-primary">
									{`{
  "density": 0.125,
  "orientation": "portrait",
  "contrast": 0.75
}`}
								</code>
							</pre>
						</div>
						<div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
							<p className="text-sm text-primary"></p>
							<ul className="text-foreground/80 text-sm space-y-1">
								<li>
									<span className="font-mono text-accent">density:</span>{" "}
									proporción de zonas oscuras (texto/elementos).
								</li>
								<li>
									<span className="font-mono text-accent">orientation:</span>{" "}
									determina si el documento está en vertical o apaisado.
								</li>
								<li>
									<span className="font-mono text-accent">contrast:</span> nivel
									de diferencia entre fondo y texto.
								</li>
							</ul>
						</div>
					</div>

					{/* extract_signatures() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							4. DETECCIÓN DE FIRMAS Y SELLOS — La Identidad del Documento
						</h4>
						<p className="text-foreground/80 text-sm mb-2">
							<span className="font-mono text-accent">
								extract_signatures(img)
							</span>
						</p>
						<p className="text-foreground/80 text-sm">
							Cada trazo irregular, cada curva no estructurada, es una firma
							esperando ser reconocida.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										sig = insight.extract_signatures(
									</span>
									<span className="text-accent">"firma_scan.jpg"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">show(sig)</span>
								</code>
							</pre>
						</div>
						<div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
							<p className="text-sm text-accent"></p>
							<p className="text-foreground/80 text-sm mb-2">
								El módulo analiza la complejidad de trazos oscuros: una firma
								suele ocupar entre el 1% y el 20% del área visible.
							</p>
							<p className="text-foreground/70 text-sm mb-2">Devuelve:</p>
							<pre className="text-xs bg-background/50 p-2 rounded border">
								<code className="font-mono text-primary">
									{`{"detected": true, "confidence": 0.83}`}
								</code>
							</pre>
							<p className="text-foreground/70 text-sm mt-2">
								Ideal para autenticación documental, auditorías y digitalización
								legal.
							</p>
						</div>
					</div>

					{/* summarize() function */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							5. RESUMEN ESTRUCTURADO — Visión Sintética
						</h4>
						<p className="text-foreground/80 text-sm mb-2">
							<span className="font-mono text-accent">summarize(img)</span>
						</p>
						<p className="text-foreground/80 text-sm">
							Una sola llamada, una comprensión total.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										res = insight.summarize(
									</span>
									<span className="text-accent">"documento_escaneado.png"</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">
										show(json.pretty(res))
									</span>
								</code>
							</pre>
						</div>
						<div className="bg-background/50 rounded-lg p-3 border border-primary/30">
							<p className="text-sm font-semibold text-foreground mb-2">
								Resultado conceptual:
							</p>
							<pre className="text-xs">
								<code className="font-mono text-primary">
									{`{
  "metadata": {"density": 0.12, "orientation": "portrait", "contrast": 0.65},
  "tables": {"detected": true, "confidence": 0.9},
  "signatures": {"detected": true, "confidence": 0.78},
  "text_blocks": 14
}`}
								</code>
							</pre>
						</div>
						<div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
							<p className="text-sm text-primary"></p>
							<p className="text-foreground/80 text-sm mb-2">
								El motor summarize() combina todas las fases:
							</p>
							<ul className="text-foreground/80 text-sm space-y-1">
								<li>
									Observación →{" "}
									<span className="font-mono text-accent">_load_image()</span>
								</li>
								<li>
									Análisis →{" "}
									<span className="font-mono text-accent">extract_*</span>
								</li>
								<li>Síntesis → estructura Orion legible</li>
							</ul>
						</div>
					</div>
				</div>
			</Card>

			{/* Integration Info */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-primary">🔌</span> Integración con el Núcleo
					Orion
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo insight comunica su sabiduría visual al resto del ecosistema
					Orion:
				</p>
				<div className="space-y-3">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<div className="bg-background/30 rounded-lg p-3 border border-primary/10">
							<p className="font-mono text-accent text-sm">vision</p>
							<p className="text-foreground/70 text-xs">
								motor de percepción de bajo nivel (PIL, bytes, URLs).
							</p>
						</div>
						<div className="bg-background/30 rounded-lg p-3 border border-primary/10">
							<p className="font-mono text-accent text-sm">json</p>
							<p className="text-foreground/70 text-xs">
								serialización de resultados estructurados.
							</p>
						</div>
						<div className="bg-background/30 rounded-lg p-3 border border-primary/10">
							<p className="font-mono text-accent text-sm">fs</p>
							<p className="text-foreground/70 text-xs">
								lectura y archivado de documentos procesados.
							</p>
						</div>
						<div className="bg-background/30 rounded-lg p-3 border border-primary/10">
							<p className="font-mono text-accent text-sm">crypto</p>
							<p className="text-foreground/70 text-xs">
								cifrado de resultados sensibles (firmas, metadatos).
							</p>
						</div>
						<div className="bg-background/30 rounded-lg p-3 border border-primary/10">
							<p className="font-mono text-accent text-sm">matrix</p>
							<p className="text-foreground/70 text-xs">
								análisis numérico y correlación visual.
							</p>
						</div>
					</div>
				</div>
				<div className="glass-effect rounded-lg p-4 border border-primary/10 mt-4">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-primary">use</span>{" "}
							<span className="text-foreground">vision, insight</span>
							<br />
							<span className="text-foreground">img = vision.capture(</span>
							<span className="text-accent">"scan.png"</span>
							<span className="text-foreground">)</span>
							<br />
							<span className="text-foreground">
								report = insight.summarize(img)
							</span>
							<br />
							<span className="text-foreground">json.emit(</span>
							<span className="text-accent">"scan_report.json"</span>
							<span className="text-foreground">, report)</span>
						</code>
					</pre>
				</div>
			</Card>

			{/* Complete Example */}
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
								<span className="text-foreground">insight, json</span>
								<br />
								<br />
								<span className="text-foreground">trace_start(</span>
								<span className="text-accent">"ANÁLISIS DOCUMENTAL ORION"</span>
								<span className="text-foreground">)</span>
								<br />
								<br />
								<span className="text-foreground">doc = </span>
								<span className="text-accent">"contrato_bbva.jpg"</span>
								<br />
								<span className="text-foreground">
									res = insight.summarize(doc)
								</span>
								<br />
								<br />
								<span className="text-foreground">show(</span>
								<span className="text-accent">"Estructura detectada:"</span>
								<span className="text-foreground">)</span>
								<br />
								<span className="text-foreground">show(json.forge(res, </span>
								<span className="text-primary">True</span>
								<span className="text-foreground">))</span>
								<br />
								<br />
								<span className="text-primary">if</span>{" "}
								<span className="text-foreground">res[</span>
								<span className="text-accent">"signatures"</span>
								<span className="text-foreground">][</span>
								<span className="text-accent">"detected"</span>
								<span className="text-foreground">]:</span>
								<br />
								<span className="text-foreground"> show(</span>
								<span className="text-accent">"Firma presente ✓"</span>
								<span className="text-foreground">)</span>
								<br />
								<br />
								<span className="text-foreground">trace_end(</span>
								<span className="text-accent">"ANÁLISIS DOCUMENTAL ORION"</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Terminal className="w-4 h-4" />
						<span>Salida conceptual:</span>
					</div>
					<div className="bg-background/50 rounded-lg p-4 border border-primary/30">
						<pre className="text-sm">
							<code className="font-mono text-primary">
								══════ Orion Insight Engine ══════
								<br />
								[TRACE START] Análisis visual
								<br />
								[OK] Metadatos detectados → orientación: portrait
								<br />
								[OK] Estructuras tabulares → confianza 0.89
								<br />
								[OK] Firma → detectada con confianza 0.83
								<br />
								[OK] Bloques de texto: 14
								<br />
								[TRACE END] Insight completo
								<br />
								═══════════════════════════════════
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Filosofía del Módulo Insight
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						Insight no es un OCR. Es una forma de percepción estructural: una
						inteligencia que observa, interpreta y sintetiza información visual
						sin depender del ruido textual.
					</p>
					<div className="text-center p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
						<p className="text-foreground/80 italic">
							"Los ojos de Orion no leen: comprenden."
						</p>
						<p className="text-muted-foreground text-sm mt-1">
							— Manual Cósmico del Núcleo Orion, Capítulo XI: El Ojo del
							Universo
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default StdlibInsight;
