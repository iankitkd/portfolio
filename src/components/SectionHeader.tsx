export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-4 h-1 w-16 rounded-full bg-linear-to-r from-gradient-accent-start to-gradient-accent-end" />
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
