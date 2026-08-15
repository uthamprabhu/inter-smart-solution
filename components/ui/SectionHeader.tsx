interface SectionHeaderProps {
  title: string;
  description: string;
  theme?: 'light' | 'dark';
}

export default function SectionHeader({
  title,
  description,
  theme = 'light',
}: SectionHeaderProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-brand-navy';

  return (
    <div className="container-responsive">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className={`section-title ${textColor}`}>{title}</h2>
        <p className={`section-description ${textColor}`}>{description}</p>
        <div className="section-accent-line"></div>
      </div>
    </div>
  );
}
