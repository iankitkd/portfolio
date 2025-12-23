import { contactLinks } from "@/data";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center gap-4 bg-background/30 rounded-2xl p-4 md:p-8 border border-border max-w-xl">
      {/* <div className="flex items-center gap-4">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent to-primary" />
        <span className="text-sm md:text-base text-secondary-foreground font-medium tracking-wide whitespace-nowrap">
          Connect with me
        </span>
        <span className="flex-1 h-px bg-gradient-to-r from-primary to-transparent" />
      </div> */}

      <h3 className="text-lg md:text-xl text-center font-semibold text-secondary-foreground">
        Connect with me
      </h3>
      <p className="text-sm md:text-base text-center text-muted-foreground">
        You can also find me on these platforms.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {contactLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:gap-4 px-5 py-4 text-lg text-secondary-foreground font-medium
                       rounded-2xl border border-border bg-background/50
                       hover:-translate-y-0.5 hover:border-primary/40
                       hover:bg-primary/5 hover:text-primary transition"
          >
            <Icon className="text-2xl text-primary/80 group-hover:scale-110 transition" />
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
