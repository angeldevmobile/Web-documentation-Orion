import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EXAMPLES } from "./examples";

interface ExampleSelectorProps {
  onSelect: (code: string) => void;
}

const ExampleSelector = ({ onSelect }: ExampleSelectorProps) => {
  return (
    <Select onValueChange={(label) => {
      const ex = EXAMPLES.find((e) => e.label === label);
      if (ex) onSelect(ex.code);
    }}>
      <SelectTrigger className="w-48 h-8 text-xs bg-white/5 border-white/20 text-white/80 hover:bg-white/10">
        <SelectValue placeholder="Ejemplos" />
      </SelectTrigger>
      <SelectContent className="bg-[#1e1e1e] border-white/20">
        {EXAMPLES.map((ex) => (
          <SelectItem
            key={ex.label}
            value={ex.label}
            className="text-xs text-white/80 hover:text-white focus:bg-white/10 focus:text-white"
          >
            {ex.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ExampleSelector;
