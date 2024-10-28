// components/ui/card.tsx
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return <div className={`border rounded-lg shadow-lg p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children }: CardProps) {
  return <div className="border-b pb-4 mb-4">{children}</div>;
}

export function CardTitle({ children }: CardProps) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardDescription({ children }: CardProps) {
  return <p className="text-gray-500">{children}</p>;
}

export function CardContent({ children }: CardProps) {
  return <div className="py-4">{children}</div>;
}

export function CardFooter({ children, className = '' }: CardProps) {
  return <div className={`border-t pt-4 mt-4 flex justify-end ${className}`}>{children}</div>;
}
