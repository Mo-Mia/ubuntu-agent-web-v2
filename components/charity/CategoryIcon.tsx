import {
  Building2,
  HeartHandshake,
  Home,
  PawPrint,
  Stethoscope,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "building-community": Building2,
  "paw-print": PawPrint,
  "heart-hands": HeartHandshake,
  users: Users,
  stethoscope: Stethoscope,
  "home-heart": Home,
  "users-round": UsersRound,
};

interface CategoryIconProps {
  icon: string;
  className?: string;
}

const CategoryIcon = ({ icon, className = "h-5 w-5" }: CategoryIconProps) => {
  const Icon = iconMap[icon] ?? Building2;
  return <Icon className={className} aria-hidden="true" />;
};

export default CategoryIcon;
