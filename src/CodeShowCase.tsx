import { Card } from "@/components/ui/card";

const CodeShowcase = () => {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12 space-y-4">
					<h2 className="text-4xl md:text-5xl font-bold text-gradient">
						Code in action
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						A complete program, exactly as the compiler runs it
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
								example.orx
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></div>
							<span className="text-xs text-primary">Orion</span>
						</div>
					</div>

					{/* Code Content */}
					<div className="relative">
						{/* Line numbers */}
						<div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/20 border-r border-border/30 flex flex-col items-center py-6 text-xs text-muted-foreground font-mono select-none">
							{Array.from({ length: 22 }, (_, i) => (
								<div key={i} className="leading-6">
									{i + 1}
								</div>
							))}
						</div>

						{/* Code */}
						<pre className="pl-16 pr-6 py-6 overflow-x-auto bg-transparent">
							<code className="font-mono text-sm leading-6">
								<span className="text-primary">fn</span>
								<span className="text-foreground">
									{" "}
									is_adult(age) {"{"}
								</span>
								{"\n"}
								<span className="text-foreground"> </span>
								<span className="text-primary">return</span>
								<span className="text-foreground"> age </span>
								<span className="text-accent">&gt;=</span>
								<span className="text-foreground"> </span>
								<span className="text-accent">18</span>
								{"\n"}
								<span className="text-foreground">{"}"}</span>
								{"\n\n"}

								<span className="text-primary">fn</span>
								<span className="text-foreground">
									{" "}
									process_user(name, age) {"{"}
								</span>
								{"\n"}
								<span className="text-foreground"> </span>
								<span className="text-primary">if</span>
								<span className="text-foreground">
									{" "}
									is_adult(age) {"{"}
								</span>
								{"\n"}
								<span className="text-foreground"> </span>
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">
									"User ${"{name}"} is an adult (${"{age}"})"
								</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-foreground"> {"}"} </span>
								<span className="text-primary">else</span>
								<span className="text-foreground"> {"{"}</span>
								{"\n"}
								<span className="text-foreground"> </span>
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">
									"User ${"{name}"} is a minor (${"{age}"})"
								</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-foreground"> {"}"}</span>
								{"\n"}
								<span className="text-foreground">{"}"}</span>
								{"\n\n"}

								<span className="text-foreground">users = [</span>
								<span className="text-accent">"Ana"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"Luis"</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">"Sofia"</span>
								<span className="text-foreground">]</span>
								{"\n"}
								<span className="text-foreground">ages = [</span>
								<span className="text-accent">22</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">15</span>
								<span className="text-foreground">, </span>
								<span className="text-accent">30</span>
								<span className="text-foreground">]</span>
								{"\n\n"}

								<span className="text-muted-foreground">
									-- Ranges are half-open: 0..3 covers 0, 1 and 2
								</span>
								{"\n"}
								<span className="text-primary">for</span>
								<span className="text-foreground"> i </span>
								<span className="text-primary">in</span>
								<span className="text-foreground"> </span>
								<span className="text-accent">0</span>
								<span className="text-foreground">..</span>
								<span className="text-accent">3</span>
								<span className="text-foreground"> {"{"}</span>
								{"\n"}
								<span className="text-foreground">
									{" "}
									process_user(users[i], ages[i])
								</span>
								{"\n"}
								<span className="text-foreground">{"}"}</span>
								{"\n\n"}

								<span className="text-foreground">text = </span>
								<span className="text-accent">" backend orion "</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Trim:"</span>
								<span className="text-foreground">, trim(text))</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Upper:"</span>
								<span className="text-foreground">, upper(text))</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Reverse:"</span>
								<span className="text-foreground">, reverse(text))</span>
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
							<span>23 lines</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-primary">◉</span>
							<span>No errors</span>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default CodeShowcase;
