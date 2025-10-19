import { Card } from "@/components/ui/card";
import {
	Eye,
	Code2,
	Terminal,
	Sparkles,
	Settings,
	Globe,
	Camera,
	Image,
	Scan,
	Palette,
	Zap,
	Shield,
} from "lucide-react";

const StdlibVision = () => {
	return (
		<div className="space-y-6 animate-fade-in">
			{/* Module Header */}
			<div className="glass-effect rounded-xl p-8 border border-primary/20">
				<div className="flex items-start gap-4">
					<div className="p-3 rounded-lg bg-primary/10 text-primary">
						<Eye className="w-6 h-6" />
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-2">Módulo: vision.orx</h2>
						<p className="text-muted-foreground text-lg">
							Orion Vision — Visión Computacional y Procesamiento de Imágenes
						</p>
						<p className="text-foreground/70 mt-2">
							Fusiona la precisión científica con la expresividad del lenguaje.
							Procesa, analiza y transforma imágenes de manera inteligente.
						</p>
					</div>
				</div>
			</div>

			{/* Fundamental Principles */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Principios Fundamentales
				</h3>
				<div className="space-y-4">
					<div className="flex items-start gap-3">
						<span className="text-primary font-semibold">
							Moderno y expresivo:
						</span>
						<p className="text-foreground/80">
							funciones simples como load, resize, smart_crop, phash,
							detect_faces, blur.
						</p>
					</div>
					<div className="flex items-start gap-3">
						<span className="text-primary font-semibold">
							Rápido y flexible:
						</span>
						<p className="text-foreground/80">
							aprovecha Pillow, NumPy, y OpenCV si están disponibles; recurre a
							alternativas puras en Python si no.
						</p>
					</div>
					<div className="flex items-start gap-3">
						<span className="text-primary font-semibold">
							Único en su tipo:
						</span>
						<p className="text-foreground/80">
							ofrece ImagePipeline, procesamiento perezoso (lazy), hashing
							perceptual nativo, retina-aware scaling, content-aware cropping,
							detección facial, OCR integrado y extracción de colores
							dominantes.
						</p>
					</div>
					<div className="flex items-start gap-3">
						<span className="text-primary font-semibold">
							Diseñado para Orion:
						</span>
						<p className="text-foreground/80">
							se integra fluidamente con el runtime mediante orion_export() y
							register().
						</p>
					</div>
				</div>
			</Card>

			{/* Core Module */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<span className="text-primary"></span> Núcleo del Módulo
				</h3>

				<div className="space-y-6">
					{/* Image Loading and Saving */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Image className="w-5 h-5" />
							🔹 Carga y guardado de imágenes
						</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">img = load(</span>
									<span className="text-accent">"foto.png"</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Carga desde ruta o bytes
									</span>
									<br />
									<span className="text-foreground">save(img, </span>
									<span className="text-accent">"out.png"</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Guarda en disco
									</span>
									<br />
									<span className="text-foreground">
										bytes_data = save(img, to_bytes=
									</span>
									<span className="text-accent">True</span>
									<span className="text-foreground">)</span>
									<span className="text-muted-foreground">
										{" "}
										# Retorna en bytes
									</span>
								</code>
							</pre>
						</div>
						<div className="space-y-2 text-sm">
							<p className="text-foreground/80">
								<span className="font-mono text-accent">
									load(path_or_bytes)
								</span>{" "}
								→ Carga imágenes desde archivos, bytes o instancias PIL.
							</p>
							<p className="text-foreground/80">
								<span className="font-mono text-accent">
									save(img, path, fmt="PNG", to_bytes=False)
								</span>{" "}
								→ Guarda o retorna bytes de imagen.
							</p>
						</div>
					</div>

					{/* Basic Transformations */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Zap className="w-5 h-5" />
							🔹 Transformaciones básicas
						</h4>
						<div className="space-y-4">
							<div>
								<h5 className="font-semibold text-foreground mb-2">
									resize(img, size)
								</h5>
								<p className="text-foreground/70 text-sm mb-2">
									Escala o ajusta imágenes inteligentemente según su tamaño o
									factor de escala.
								</p>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-foreground">
												resized = resize(img,{" "}
											</span>
											<span className="text-accent">0.5</span>
											<span className="text-foreground">)</span>
											<span className="text-muted-foreground">
												{" "}
												# Escala al 50%
											</span>
											<br />
											<span className="text-foreground">
												resized = resize(img, (
											</span>
											<span className="text-accent">800</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">600</span>
											<span className="text-foreground">))</span>
											<span className="text-muted-foreground">
												{" "}
												# Ajusta a tamaño fijo
											</span>
										</code>
									</pre>
								</div>
							</div>

							<div>
								<h5 className="font-semibold text-foreground mb-2">
									smart_crop(img, target_w, target_h, focus="center")
								</h5>
								<p className="text-foreground/70 text-sm mb-2">
									Recorte inteligente basado en entropía o atención visual.
								</p>
								<div className="glass-effect rounded-lg p-4 border border-primary/10">
									<pre className="text-sm">
										<code className="font-mono">
											<span className="text-foreground">
												smart = smart_crop(img,{" "}
											</span>
											<span className="text-accent">256</span>
											<span className="text-foreground">, </span>
											<span className="text-accent">256</span>
											<span className="text-foreground">, focus=</span>
											<span className="text-accent">"entropy"</span>
											<span className="text-foreground">)</span>
										</code>
									</pre>
								</div>
								<div className="text-sm text-foreground/70 space-y-1">
									<p>
										<span className="font-mono text-accent">
											focus="center"
										</span>{" "}
										→ centrado
									</p>
									<p>
										<span className="font-mono text-accent">
											focus="entropy"
										</span>{" "}
										→ selecciona regiones con mayor información visual
									</p>
									<p>
										<span className="font-mono text-accent">
											focus="attention"
										</span>{" "}
										→ usa saliencia si cv2 está disponible
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Perceptual Hash */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Scan className="w-5 h-5" />
							🔹 Hash perceptual (dHash)
						</h4>
						<p className="text-foreground/80 text-sm mb-3">
							Permite comparar similitud visual entre imágenes, útil para
							detección de duplicados o versiones similares.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">h1 = dhash(img1)</span>
									<br />
									<span className="text-foreground">h2 = dhash(img2)</span>
									<br />
									<span className="text-foreground">
										dist = hamming(h1, h2)
									</span>
									<span className="text-muted-foreground">
										{" "}
										# Cuanto menor, más parecidas
									</span>
								</code>
							</pre>
						</div>
						<div className="space-y-1 text-sm">
							<p className="text-foreground/80">
								<span className="font-mono text-accent">
									dhash(img, hash_size=8)
								</span>{" "}
								→ genera hash hexadecimal
							</p>
							<p className="text-foreground/80">
								<span className="font-mono text-accent">hamming(a, b)</span> →
								calcula la distancia de Hamming
							</p>
						</div>
					</div>

					{/* Dominant Colors */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Palette className="w-5 h-5" />
							🔹 Colores dominantes
						</h4>
						<p className="text-foreground/80 text-sm mb-3">
							Detecta los colores predominantes mediante un k-means liviano.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										cols = dominant_colors(img, k=
									</span>
									<span className="text-accent">3</span>
									<span className="text-foreground">)</span>
									<br />
									<span className="text-foreground">print(cols)</span>
									<span className="text-muted-foreground">
										{" "}
										# [(r,g,b), (r,g,b), ...]
									</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							Ideal para análisis de paletas, estilo visual o etiquetado
							automático.
						</p>
					</div>
				</div>
			</Card>

			{/* Advanced Features */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Settings className="w-5 h-5 text-primary" />
					<span className="text-primary">🔹</span> Funciones Avanzadas
				</h3>

				<div className="space-y-6">
					{/* Auto Enhancement */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							Realce automático e igualado de histograma
						</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										eq = histogram_equalize(img)
									</span>
									<span className="text-muted-foreground">
										{" "}
										# Mejora contraste global
									</span>
									<br />
									<span className="text-foreground">
										enh = auto_enhance(img)
									</span>
									<span className="text-muted-foreground">
										{" "}
										# Aumenta nitidez y contraste
									</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							Combina métodos de ecualización por histograma (numpy o PIL) y
							mejora automática de contraste con filtros de nitidez.
						</p>
					</div>

					{/* Face Detection */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent flex items-center gap-2">
							<Shield className="w-5 h-5" />
							Detección y desenfoque facial
						</h4>
						<p className="text-foreground/80 text-sm mb-3">
							Integración directa con OpenCV para detección facial y desenfoque
							seguro (protección de privacidad).
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										faces = detect_faces(img)
									</span>
									<span className="text-muted-foreground">
										{" "}
										# Devuelve [(x,y,w,h), ...]
									</span>
									<br />
									<span className="text-foreground">
										blurred = blur_faces(img)
									</span>
									<span className="text-muted-foreground">
										{" "}
										# Difumina los rostros detectados
									</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							Si no hay cv2, utiliza una heurística ligera basada en color de
							piel.
						</p>
					</div>

					{/* OCR */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							OCR integrado (Reconocimiento de texto)
						</h4>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										texto = scan_text(img, lang=
									</span>
									<span className="text-accent">"eng"</span>
									<span className="text-foreground">)</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							Si pytesseract está disponible, permite extraer texto directamente
							desde imágenes. Devuelve una cadena con el texto detectado o vacío
							si no hay soporte.
						</p>
					</div>

					{/* Seam Carving */}
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-accent">
							Seam Carving (Recorte por contenido)
						</h4>
						<p className="text-foreground/80 text-sm mb-3">
							Redimensiona imágenes preservando contenido relevante, eliminando
							píxeles menos significativos.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">
										out = seam_carve(img,{" "}
									</span>
									<span className="text-accent">400</span>
									<span className="text-foreground">, </span>
									<span className="text-accent">300</span>
									<span className="text-foreground">)</span>
								</code>
							</pre>
						</div>
						<p className="text-foreground/70 text-sm">
							Implementación ligera — ideal para prototipos o imágenes
							pequeñas.
						</p>
					</div>
				</div>
			</Card>

			{/* ImagePipeline */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Camera className="w-5 h-5 text-primary" />
					<span className="text-primary">🔹</span> ImagePipeline — Flujo Visual
					Perezoso
				</h3>
				<p className="text-foreground/80 mb-4">
					Permite encadenar transformaciones y ejecutarlas en una sola pasada,
					reduciendo procesamiento intermedio.
				</p>
				<div className="glass-effect rounded-lg p-4 border border-primary/10 mb-4">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-foreground">p = ImagePipeline(</span>
							<span className="text-accent">"cat.jpg"</span>
							<span className="text-foreground">){"\\"}</span>
							<br />
							<span className="text-foreground">{"      "}.resize((</span>
							<span className="text-accent">400</span>
							<span className="text-foreground">,</span>
							<span className="text-accent">400</span>
							<span className="text-foreground">)){"\\"}</span>
							<br />
							<span className="text-foreground">
								{"      "}.auto_enhance(){"\\"}
							</span>
							<br />
							<span className="text-foreground">{"      "}.blur_faces(</span>
							<span className="text-accent">10</span>
							<span className="text-foreground">)</span>
							<br />
							<br />
							<span className="text-foreground">result = p.run()</span>
						</code>
					</pre>
				</div>
				<div className="space-y-2">
					<h5 className="font-semibold text-foreground">Ventajas:</h5>
					<ul className="space-y-1 text-sm text-foreground/80">
						<li>• Composición fluida (.resize().crop().hist_eq())</li>
						<li>• Ejecución diferida</li>
						<li>• Retorno directo de hash o imagen procesada</li>
					</ul>
				</div>
			</Card>

			{/* Cognitive Clusters */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary">🔹</span> Visualización de Clusters
					Cognitivos
				</h3>
				<p className="text-foreground/80 mb-4">
					Función auxiliar para análisis visual en Orion (ej. embeddings,
					modelos de IA):
				</p>
				<div className="glass-effect rounded-lg p-4 border border-primary/10">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-foreground">
								plot_clusters(embeds, labels, caption=
							</span>
							<span className="text-accent">"Mapa cognitivo de tareas"</span>
							<span className="text-foreground">)</span>
						</code>
					</pre>
				</div>
				<p className="text-foreground/70 text-sm">
					Usa PCA para reducir dimensiones y Plotly para renderizar en 2D.
				</p>
			</Card>

			{/* Orion Integration */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Globe className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Integración con Orion Runtime
				</h3>
				<div className="space-y-4">
					<div>
						<h5 className="font-semibold text-foreground mb-2">
							orion_export()
						</h5>
						<p className="text-foreground/80 text-sm mb-2">
							Expone todas las funciones y clases como módulo accesible desde
							Orion.
						</p>
					</div>
					<div>
						<h5 className="font-semibold text-foreground mb-2">
							register(runtime)
						</h5>
						<p className="text-foreground/80 text-sm mb-2">
							Registra el módulo vision dentro del entorno principal del
							lenguaje.
						</p>
						<div className="glass-effect rounded-lg p-4 border border-primary/10">
							<pre className="text-sm">
								<code className="font-mono">
									<span className="text-foreground">register(runtime)</span>
								</code>
							</pre>
						</div>
					</div>
				</div>
				<p className="text-foreground/70 mb-4">
					De este modo, desde Orion puede invocarse:
				</p>
				<div className="glass-effect rounded-lg p-4 border border-primary/10">
					<pre className="text-sm">
						<code className="font-mono">
							<span className="text-primary">use</span>{" "}
							<span className="text-foreground">vision</span>
							<br />
							<br />
							<span className="text-foreground">img = vision.load(</span>
							<span className="text-accent">"imagen.png"</span>
							<span className="text-foreground">)</span>
							<br />
							<span className="text-foreground">vision.blur_faces(img)</span>
							<br />
							<span className="text-foreground">vision.save(img, </span>
							<span className="text-accent">"out.png"</span>
							<span className="text-foreground">)</span>
						</code>
					</pre>
				</div>
			</Card>

			{/* Exports Table */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Terminal className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Exportaciones (ALIASES)
				</h3>
				<p className="text-foreground/80 mb-4">
					El módulo expone las siguientes primitivas visuales:
				</p>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b border-primary/20">
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Categoría
								</th>
								<th className="text-left py-2 px-3 text-sm font-semibold">
									Funciones principales
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Entrada/Salida
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									load, save
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Transformaciones
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									resize, thumbnail, crop, smart_crop
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Análisis
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									dhash, hamming, dominant_colors
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Mejora
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									hist_eq, auto_enhance
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Detección y privacidad
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									detect_faces, blur_faces
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Texto e inteligencia visual
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									scan_text, seam_carve
								</td>
							</tr>
							<tr className="border-b border-primary/10">
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Pipelines
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									ImagePipeline
								</td>
							</tr>
							<tr>
								<td className="py-2 px-3 text-sm font-semibold text-accent">
									Visualización cognitiva
								</td>
								<td className="py-2 px-3 text-sm font-mono text-muted-foreground">
									plot_clusters
								</td>
							</tr>
						</tbody>
					</table>
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
								<span className="text-foreground">vision</span>
								<br />
								<br />
								<span className="text-foreground">img = vision.load(</span>
								<span className="text-accent">"photo.jpg"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground"> # Cargar imagen</span>
								<br />
								<span className="text-foreground">
									faces = vision.detect_faces(img)
								</span>
								<span className="text-muted-foreground">
									{" "}
									# Detectar rostros
								</span>
								<br />
								<span className="text-foreground">
									enhanced = vision.auto_enhance(img)
								</span>
								<span className="text-muted-foreground"> # Mejorar imagen</span>
								<br />
								<span className="text-foreground">
									cropped = vision.smart_crop(enhanced,{" "}
								</span>
								<span className="text-accent">512</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">512</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground">
									{" "}
									# Recorte inteligente
								</span>
								<br />
								<span className="text-foreground">vision.save(cropped, </span>
								<span className="text-accent">"result.png"</span>
								<span className="text-foreground">)</span>
								<span className="text-muted-foreground">
									{" "}
									# Guardar resultado
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
								[vision] LOAD: photo.jpg (1920x1080) loaded successfully
								<br />
								[vision] DETECT: 2 faces found at [(340,120,180,180),
								(890,200,160,160)]
								<br />
								[vision] ENHANCE: Auto-enhancement applied (contrast +15%,
								sharpness +10%)
								<br />
								[vision] CROP: Smart crop to 512x512 using entropy focus
								<br />
								[vision] SAVE: result.png saved (48.2 KB)
							</code>
						</pre>
					</div>
				</div>
			</Card>

			{/* Vision Philosophy */}
			<Card className="glass-effect border-primary/20 p-6">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					<Sparkles className="w-5 h-5 text-primary" />
					<span className="text-primary"></span> Visión General
				</h3>
				<div className="space-y-4">
					<p className="text-foreground/80">
						El módulo Orion Vision redefine la visión computacional desde una
						perspectiva artística y funcional: no busca solo procesar imágenes,
						sino entenderlas, transformarlas y proteger su contenido.
					</p>
					<p className="text-foreground/80">
						Su diseño modular y expresivo permite que cada operación se exprese
						con verbos claros y humanos, siguiendo la esencia de Orion:
					</p>
					<div className="text-center p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
						<p className="text-foreground/80 italic text-lg">
							"Ver no es observar los píxeles, sino comprender la forma detrás
							del ruido."
						</p>
						<p className="text-muted-foreground text-sm mt-2">
							— Orion Core, Visión Computacional
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default StdlibVision;
