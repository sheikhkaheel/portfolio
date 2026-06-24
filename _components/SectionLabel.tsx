import { C } from "@/contants";

export function SectionLabel({ text }: { text: string }) {
  return (
    <p
      className="text-xs font-mono mb-2 tracking-widest uppercase"
      style={{ color: C.emerald }}
    >
      {text}
    </p>
  );
}
