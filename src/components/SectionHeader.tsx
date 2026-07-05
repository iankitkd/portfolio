export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-secondary-foreground max-w-2xl mx-auto mb-4">
        {description}
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end mx-auto"></div>
    </div>
  );
}
