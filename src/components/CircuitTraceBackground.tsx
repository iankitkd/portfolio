const traces = [
  "left-[4%] top-[18%] h-px w-[34rem]",
  "right-[-6rem] top-[28%] h-px w-[38rem]",
  "left-[12%] top-[62%] h-px w-[28rem]",
  "right-[10%] bottom-[18%] h-px w-[30rem]",
  "left-[44%] top-[8%] h-[30rem] w-px",
  "right-[28%] top-[44%] h-[20rem] w-px",
];

const nodes = [
  "left-[14%] top-[18%]",
  "left-[41%] top-[18%]",
  "right-[22%] top-[28%]",
  "left-[23%] top-[62%]",
  "right-[30%] bottom-[18%]",
  "left-[44%] top-[36%]",
  "right-[28%] top-[56%]",
];

export default function CircuitTraceBackground() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-112 w-md -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      {traces.map((trace) => (
        <div
          key={trace}
          className={`absolute ${trace} bg-linear-to-r from-transparent via-primary/25 to-cyan-300/10`}
        />
      ))}

      <div className="absolute left-[14%] top-[18%] h-56 w-px bg-linear-to-b from-primary/25 to-transparent" />
      <div className="absolute right-[22%] top-[28%] h-44 w-px bg-linear-to-b from-cyan-300/20 to-transparent" />
      <div className="absolute left-[23%] top-[62%] h-32 w-px bg-linear-to-b from-primary/20 to-transparent" />

      {nodes.map((node) => (
        <div
          key={node}
          className={`absolute ${node} h-2.5 w-2.5 rounded-full border border-primary/40 bg-background shadow-[0_0_22px_rgba(74,222,128,0.35)]`}
        />
      ))}
    </>
  );
}
