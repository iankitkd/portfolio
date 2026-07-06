import { fullName, heroData } from "@/data";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

export default function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-primary/20 to-gradient-accent-end/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/90 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-center justify-between border-b border-border bg-card-hover/60 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FiTerminal className="text-primary" />
            portfolio.ts
          </div>
        </div>

        <div className="space-y-5 p-5 font-mono text-sm leading-7 text-secondary-foreground md:p-7">
          <div>
            <span className="text-muted-foreground">const</span>{" "}
            <span className="text-gradient-accent-end">developer</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-primary">{`"${fullName}"`}</span>;
          </div>
          <div>
            <span className="text-muted-foreground">stack</span>
            <span className="text-foreground">.</span>
            <span className="text-gradient-accent-end">focus</span>
            <span className="text-foreground">(</span>
            <span className="text-primary">{`"${heroData.focus}"`}</span>
            <span className="text-foreground">);</span>
          </div>
          <div className="rounded-xl border border-border bg-background/70 p-4">
            <div className="mb-3 text-muted-foreground">recent impact</div>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroData.recentImpacts.map(([value, label]) => (
                <div key={label} className="rounded-lg bg-card px-3 py-3">
                  <div className="text-2xl font-bold text-primary">{value}</div>
                  <div className="font-sans text-xs text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-primary">npm</span>{" "}
            <span className="text-muted-foreground">run</span>{" "}
            <span className="text-gradient-accent-end">ship</span>
            <span className="animate-pulse text-primary">_</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
