import Link from 'next/link';
import { ContactDetails } from './ContactDetails';
import { ProfileImage } from './ui/ProfileImage';

type ContactCardProps = {
  className?: string;
  showScheduleButton?: boolean;
};

export function ContactCard({ 
  className = '', 
  showScheduleButton = true 
}: ContactCardProps) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center mb-3">
        <ProfileImage size="md" className="mr-3" />
        <div>
          <h3 className="font-semibold text-gray-800">Gary Berkowitz</h3>
          <p className="text-sm text-gray-600">The Ubuntu Agent</p>
        </div>
      </div>
      
      <ContactDetails variant="vertical" />
      
      {showScheduleButton && (
        <div className="mt-4">
          <Link 
            href="/contact" 
            className="block w-full py-2 px-4 bg-amber-600 text-white text-center rounded-md hover:bg-amber-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      )}
    </div>
  );
} 