import { cn } from '@/lib/utils';

type SocialLinksProps = {
  className?: string;
  iconOnly?: boolean;
};

const socialLinks = [
  {
    href: 'https://www.instagram.com/garyberkowitzproperty',
    label: 'Instagram',
    ariaLabel: 'Follow on Instagram',
    Icon: InstagramIcon,
  },
  {
    href: 'https://www.facebook.com/Garyberkowitzproperty/',
    label: 'Facebook',
    ariaLabel: 'Follow on Facebook',
    Icon: FacebookIcon,
  },
];

export function SocialLinks({ className, iconOnly = false }: SocialLinksProps) {
  return (
    <div
      className={cn(
        iconOnly ? 'flex items-center gap-4' : 'flex flex-col gap-3',
        className
      )}
    >
      {socialLinks.map(({ href, label, ariaLabel, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={cn(
            'group inline-flex items-center gap-3 text-gray-400 transition-colors hover:text-[#D4AF37]',
            !iconOnly && 'text-gray-600'
          )}
        >
          <Icon className="h-5 w-5 shrink-0" />
          {iconOnly ? null : <span className="text-sm sm:text-base">Follow Gary on {label}</span>}
        </a>
      ))}
    </div>
  );
}

type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.62 21v-7.73h2.6l.39-3.01h-2.99V8.34c0-.87.24-1.47 1.49-1.47h1.6V4.18c-.28-.04-1.22-.12-2.32-.12-2.29 0-3.86 1.4-3.86 3.97v2.23H8v3.01h2.52V21h3.1Z" />
    </svg>
  );
}
