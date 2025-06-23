import { fullName } from "@/data";
import ContactSocials from "./ContactSocials";

export default function Footer() {
  return (
    <footer className="py-4 bg-background/20 border-t border-border">
      <div className="flex flex-col-reverse md:flex-row gap-2 justify-around items-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
        </p>
        <ContactSocials />
      </div>
    </footer>
  );
}