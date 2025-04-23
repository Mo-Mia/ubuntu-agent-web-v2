import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

type ContactDetailsProps = {
  variant?: 'horizontal' | 'vertical';
  showIcons?: boolean;
  className?: string;
};

export function ContactDetails({
  variant = 'vertical',
  showIcons = true,
  className = '',
}: ContactDetailsProps) {
  const contactInfo = {
    mobile: {
      display: '+27 061-540-3265',
      link: 'tel:+270615403265',
      icon: <Phone className="h-5 w-5" />,
    },
    email: {
      display: 'gary.berkowitz@expsouthafrica.co.za',
      link: 'mailto:gary.berkowitz@expsouthafrica.co.za',
      icon: <Mail className="h-5 w-5" />,
    },
    whatsApp: {
      display: 'WhatsApp: +27 061-540-3265',
      link: 'https://wa.me/270615403265',
      icon: <MessageCircle className="h-5 w-5" />,
    },
  };

  const baseItemClass = 'flex items-start';
  const itemClass = variant === 'horizontal' 
    ? `${baseItemClass} mr-6 mb-2`
    : `${baseItemClass} mb-4`;

  return (
    <div className={`${variant === 'horizontal' ? 'flex flex-wrap' : ''} ${className}`}>
      {Object.entries(contactInfo).map(([key, { display, link, icon }]) => (
        <div key={key} className={itemClass}>
          {showIcons && (
            <span className="mr-2 text-amber-600 flex-shrink-0 mt-1">
              {icon}
            </span>
          )}
          <a 
            href={link}
            className="hover:text-amber-600 transition-colors break-all text-sm sm:text-base"
            rel={key === 'whatsApp' ? 'noopener noreferrer' : undefined}
            target={key === 'whatsApp' ? '_blank' : undefined}
          >
            {display}
          </a>
        </div>
      ))}
    </div>
  );
}