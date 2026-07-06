import { contactLinks } from "@/data";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      {/* <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5">
        <p className="text-sm font-semibold text-primary">Available for full-stack roles</p>
        <p className="mt-2 text-sm leading-6 text-secondary-foreground">
          I am open to frontend, backend, and product-focused web development opportunities.
        </p>
      </div> */}

      <h3 className="text-lg font-semibold text-secondary-foreground md:text-xl">
        Connect with me
      </h3>
      <p className="text-sm text-muted-foreground md:text-base">
        You can also find me on these platforms.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {contactLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-4 text-base font-medium text-secondary-foreground transition hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/5 hover:text-primary"
          >
            <Icon className="text-2xl text-primary/80 transition group-hover:scale-110" />
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
