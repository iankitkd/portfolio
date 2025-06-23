import Link from 'next/link'
import { contactLinks } from '@/data';

export default function ContactSocials() {
  return (
    <div className="flex space-x-6">
      {
        contactLinks.map(({name, href, Icon}) => (
          <Link key={name} href={href} className="text-secondary-foreground hover:text-primary-foreground transition-colors">
            <Icon className="text-2xl" />
          </Link>
        ))
      }
    </div>
  )
}
