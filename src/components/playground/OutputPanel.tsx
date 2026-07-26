import { parseAnsi } from "./ansi";

interface OutputPanelProps {
  stdout: string;
  stderr: string;
  timeMs: number | null;
  execMs: number | null;
  ok: boolean | null;
  isRunning: boolean;
}

/** Texto de la API, con sus colores ANSI traducidos a spans. */
const AnsiText = ({ value }: { value: string }) => (
  <>
    {parseAnsi(value).map((segment, i) =>
      segment.className ? (
        <span key={i} className={segment.className}>
          {segment.text}
        </span>
      ) : (
        segment.text
      )
    )}
  </>
);

const OutputPanel = ({
  stdout,
  stderr,
  timeMs,
  execMs,
  ok,
  isRunning,
}: OutputPanelProps) => {
  const isEmpty = !stdout && !stderr && ok === null;

  return (
    <div className="h-full flex flex-col bg-[#1e1e1e] text-sm font-mono">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-wider">
            Output
          </span>
          {!isRunning && ok !== null && (
            <span
              className={`text-xs px-1.5 py-0.5 rounded ${
                ok
                  ? "bg-green-400/10 text-green-400"
                  : "bg-red-400/10 text-red-400"
              }`}
            >
              {ok ? "OK" : "Error"}
            </span>
          )}
        </div>

        {/* execMs es el tiempo del programa; timeMs incluye la ida y vuelta. */}
        {!isRunning && (execMs !== null || timeMs !== null) && (
          <span
            className="text-xs text-white/40"
            title={timeMs !== null ? `Petición completa: ${timeMs} ms` : undefined}
          >
            {execMs !== null ? `${execMs.toFixed(2)} ms` : `${timeMs} ms`}
          </span>
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
            <AnsiText value={stdout} />
          </pre>
        )}

        {!isRunning && stderr && (
          <pre className="text-red-400 whitespace-pre-wrap break-words leading-relaxed">
            <AnsiText value={stderr} />
          </pre>
        )}

        {/* El programa puede terminar bien sin imprimir nada. */}
        {!isRunning && ok && !stdout && !stderr && (
          <p className="text-white/30 italic">
            Ejecutado sin salida.
          </p>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
