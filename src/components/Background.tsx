import CircuitTraceBackground from "@/components/CircuitTraceBackground";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <CircuitTraceBackground />
    </div>
  );
}
