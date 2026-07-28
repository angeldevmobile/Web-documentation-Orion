import { Card } from "@/components/ui/card";

const SecurityCodeShowcase = () => {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12 space-y-4">
					<h2 className="text-4xl md:text-5xl font-bold text-gradient">
						Security and encryption
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Hashing, symmetric encryption and signing, built into the standard
						library
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
								security.orx
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
								<span className="text-accent"> "crypto"</span>
								{"\n"}
								<span className="text-primary">use</span>
								<span className="text-accent"> "fs"</span>
								{"\n"}
								<span className="text-primary">use</span>
								<span className="text-accent"> "json"</span>
								{"\n\n"}

								<span className="text-muted-foreground">
									-- Passwords are never stored in plain text
								</span>
								{"\n"}
								<span className="text-foreground">password = </span>
								<span className="text-accent">"orion2025"</span>
								{"\n"}
								<span className="text-foreground">
									hashed = crypto.hash(password)
								</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Verified:"</span>
								<span className="text-foreground">
									, crypto.verify_hash(password, hashed))
								</span>
								{"\n\n"}

								<span className="text-muted-foreground">
									-- Symmetric encryption
								</span>
								{"\n"}
								<span className="text-foreground">
									data = json.forge({"{"}
								</span>
								<span className="text-accent">"user"</span>
								<span className="text-foreground">: </span>
								<span className="text-accent">"admin"</span>
								<span className="text-foreground">
									{"}"})
								</span>
								{"\n"}
								<span className="text-foreground">
									encrypted = crypto.encrypt(data)
								</span>
								{"\n"}
								<span className="text-foreground">fs.write(</span>
								<span className="text-accent">"secure.dat"</span>
								<span className="text-foreground">, encrypted.cipher)</span>
								{"\n\n"}

								<span className="text-muted-foreground">
									-- Read it back and decrypt
								</span>
								{"\n"}
								<span className="text-foreground">raw = fs.read(</span>
								<span className="text-accent">"secure.dat"</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Recovered:"</span>
								<span className="text-foreground">
									, crypto.decrypt(raw, encrypted.key))
								</span>
								{"\n\n"}

								<span className="text-muted-foreground">
									-- Signing, to detect tampering
								</span>
								{"\n"}
								<span className="text-foreground">
									sig = crypto.sign(data,{" "}
								</span>
								<span className="text-accent">"server-secret"</span>
								<span className="text-foreground">)</span>
								{"\n"}
								<span className="text-primary">show</span>
								<span className="text-foreground">(</span>
								<span className="text-accent">"Signature valid:"</span>
								<span className="text-foreground">
									, crypto.verify(data, sig, <span className="text-accent">"server-secret"</span>))
								</span>
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
							<span>24 lines</span>
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

export default SecurityCodeShowcase;
