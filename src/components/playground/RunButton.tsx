import { Play, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RunButtonProps {
  onClick: () => void;
  isRunning: boolean;
}

const RunButton = ({ onClick, isRunning }: RunButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={isRunning}
      size="sm"
      className="h-8 gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 glow text-xs font-semibold"
    >
      {isRunning ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          Ejecutando...
        </>
      ) : (
        <>
          <Play className="w-3.5 h-3.5 fill-current" />
          Run
        </>
      )}
    </Button>
  );
};

export default RunButton;
