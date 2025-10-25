import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon?: ReactNode;
  className?: string;
}

const StatsCard = ({
  title,
  value,
  change,
  icon,
  className,
}: StatsCardProps) => {
  return (
    <section className={cn("stats-card", className)}>
      <div className="flex justify-between  items-start">
        <div className="flex flex-col justify-between h-32">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {change && <p className="text-xs text-primary mt-1">{change}</p>}
        </div>
        {icon && (
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            {icon}
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsCard;
