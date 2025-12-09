import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({
  children,
  className = "",
  hover = false,
}: CardProps) => {
  const baseStyles = "bg-white rounded-xl shadow-md border border-gray-100 p-6";
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
