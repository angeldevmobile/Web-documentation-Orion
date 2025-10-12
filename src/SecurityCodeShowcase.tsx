import { Card } from "@/components/ui/card";

const SecurityCodeShowcase = () => {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12 space-y-4">
					<h2 className="text-4xl md:text-5xl font-bold text-gradient">
						Seguridad y Cifrado
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Protege tus datos con las herramientas de cifrado integradas de
						Orion
					</p>
				</div>

				<Card className="glass-effect border-primary/30 glow overflow-hidden animate-scale-in">
					{/* Editor Header */}
					<div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-card/30">
						<div className="flex items-center gap-3">
							<div className="flex gap-2">
								<div className="w-3 h-3 rounded-full bg-destructive/70"></div>
								<div className="w-3 h-3 rounded-full bg-accent/70"></div>
								<div className="w-3 h-3 rounded-full bg-primary/70"></div>
							</div>
							<span className="text-sm text-muted-foreground font-mono ml-4">
								seguridad.orx
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
							<span className="text-xs text-primary">Orion v1.0</span>
						</div>
					</div>

					{/* Code Content */}
					<div className="relative">
						{/* Line numbers */}
						<div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/20 border-r border-border/30 flex flex-col items-center py-6 text-xs text-muted-foreground font-mono select-none">
							{Array.from({ length: 16 }, (_, i) => (
								<div key={i} className="leading-6">
									{i + 1}
								</div>
							))}
						</div>

						{/* Code */}
						<pre className="pl-16 pr-6 py-6 overflow-x-auto bg-transparent">
							<code className="font-mono text-sm leading-6">
								<span className="text-primary">use</span>
								<span className="text-foreground"> code</span>
								{"\n"}
								<span className="text-primary">use</span>
								<span className="text-foreground"> fs</span>
								{"\n"}
								<span className="text-primary">use</span>
								<span className="text-foreground"> json</span>
								{"\n\n"}

								<span className="text-primary">trace_start</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"SEGURIDAD"</span>
								<span className="text-foreground">)</span>
								{"\n\n"}

								<span className="text-foreground">datos = [</span>
								{"\n"}
								<span className="text-foreground">
									{" "}
									{"{"}
									{'"usuario"'}:{" "}
								</span>
								<span className="text-accent">"admin"</span>
								<span className="text-foreground">, {'"clave"'}: </span>
								<span className="text-accent">"orion2025"</span>
								<span className="text-foreground">{"}"}</span>
								{"\n"}
								<span className="text-foreground">]</span>
								{"\n\n"}

								<span className="text-muted-foreground">-- Cifrar</span>
								{"\n"}
								<span className="text-foreground">
									raw = json.encrypt(datos,{" "}
								</span>
								<span className="text-accent">42</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-foreground">fs.write(</span>
								<span className="text-accent">"seguro.dat"</span>
								<span className="text-foreground">, raw)</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Datos cifrados guardados"</span>
								<span className="text-foreground">)</span>
								{"\n\n"}

								<span className="text-muted-foreground">
									-- Leer y descifrar
								</span>
								{"\n"}
								<span className="text-foreground">leido = fs.read(</span>
								<span className="text-accent">"seguro.dat"</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-foreground">
									original = json.decrypt(leido,{" "}
								</span>
								<span className="text-accent">42</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Datos originales:"</span>
								<span className="text-foreground">, original)</span>
								{"\n\n"}

								<span className="text-primary">trace_end</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"SEGURIDAD"</span>
								<span className="text-foreground">)</span>
							</code>
						</pre>

						{/* Subtle glow effect */}
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
					</div>

					{/* Editor Footer */}
					<div className="flex items-center justify-between px-6 py-3 border-t border-border/50 bg-card/30 text-xs text-muted-foreground">
						<div className="flex items-center gap-4">
							<span>UTF-8</span>
							<span>•</span>
							<span>Orion</span>
							<span>•</span>
							<span>16 líneas</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-primary">◉</span>
							<span>Sin errores</span>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default SecurityCodeShowcase;
