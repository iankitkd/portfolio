import { contactLinks } from '@/data';

export default function ContactSocials() {
  return (
    <div className="flex gap-3">
      {
        contactLinks.map(({name, href, Icon}) => (
          <a
            key={name} 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="rounded-xl border border-border bg-card/70 p-3 text-secondary-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <Icon className="text-2xl" />
          </a>
        ))
      }
    </div>
  )
}
