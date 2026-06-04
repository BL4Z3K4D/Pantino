interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
}

export const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
}: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      <Tag className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
