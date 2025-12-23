import { contactLinks } from '@/data';

export default function ContactSocials() {
  return (
    <div className="flex space-x-6">
      {
        contactLinks.map(({name, href, Icon}) => (
          <a
            key={name} 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Icon className="text-2xl" />
          </a>
        ))
      }
    </div>
  )
}
