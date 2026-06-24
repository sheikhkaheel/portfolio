import { SP, C } from "@/contants";
import { Transition } from "framer-motion";

export type ThemeColors = typeof C;

export type SpringProps = Partial<typeof SP>;

export interface TerminalLineProps {
  text: string;
  delay?: number;
}

export interface HeroProps {
  C: ThemeColors;
  SP?: SpringProps;
  ALL_TAGS?: string[];
  TerminalLine?: React.ComponentType<TerminalLineProps>;
}
