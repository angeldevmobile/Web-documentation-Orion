interface OutputPanelProps {
  stdout: string;
  stderr: string;
  timeMs: number | null;
  isRunning: boolean;
}

const OutputPanel = ({ stdout, stderr, timeMs, isRunning }: OutputPanelProps) => {
  const isEmpty = !stdout && !stderr && timeMs === null;

  return (
    <div className="h-full flex flex-col bg-[#1e1e1e] text-sm font-mono">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-white/50 uppercase tracking-wider">Output</span>
        {timeMs !== null && (
          <span className="text-xs text-white/40">{timeMs}ms</span>
        )}
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-1">
        {isRunning && (
          <div className="flex items-center gap-2 text-white/50">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Ejecutando...</span>
          </div>
        )}

        {!isRunning && isEmpty && (
          <p className="text-white/30 italic">
            Presiona Run para ejecutar el código.
          </p>
        )}

        {!isRunning && stdout && (
          <pre className="text-green-400 whitespace-pre-wrap break-words leading-relaxed">
            {stdout}
          </pre>
        )}

        {!isRunning && stderr && (
          <pre className="text-red-400 whitespace-pre-wrap break-words leading-relaxed">
            {stderr}
          </pre>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
