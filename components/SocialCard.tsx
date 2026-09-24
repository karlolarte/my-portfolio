import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type SocialCardProps = {
  name: string;
  username: string;
  href: string;
  icon: ReactNode;
};

const SocialCard = ({ name, username, href, icon }: SocialCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex basis-1/3 items-center gap-3 rounded-lg border p-4 transition-all duration-200 hover:scale-105 hover:bg-gray-50"
    >
      <div className="size-10">{icon}</div>

      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{username}</p>
      </div>

      <ArrowUpRight className="ml-auto size-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};

export default SocialCard;
