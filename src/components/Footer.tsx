import { fullName } from "@/data";
// import ContactSocials from "./ContactSocials";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/70 bg-background/70 py-6 backdrop-blur">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-2 px-4 md:flex-row">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
        </p>
        {/* <ContactSocials /> */}
      </div>
    </footer>
  );
}
