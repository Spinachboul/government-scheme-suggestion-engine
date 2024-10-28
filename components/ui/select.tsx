// components/ui/select.tsx
import { ReactNode } from 'react';

interface SelectProps {
  children: ReactNode;
}

export function Select({ children }: SelectProps) {
  return <div className="relative">{children}</div>;
}

interface SelectTriggerProps {
  children: ReactNode;
  onClick?: () => void;
}

export function SelectTrigger({ children, onClick }: SelectTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-left focus:outline-none focus:border-blue-500"
    >
      {children}
    </button>
  );
}

interface SelectContentProps {
  children: ReactNode;
}

export function SelectContent({ children }: SelectContentProps) {
  return <div className="absolute mt-1 bg-white border border-gray-300 rounded-md w-full z-10">{children}</div>;
}

interface SelectItemProps {
  children: ReactNode;
  value: string;
  onClick: () => void;
}

export function SelectItem({ children, onClick }: SelectItemProps) {
  return (
    <div
      onClick={onClick}
      className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
    >
      {children}
    </div>
  );
}

interface SelectValueProps {
  placeholder?: string;
}

export function SelectValue({ placeholder }: SelectValueProps) {
  return <span className="text-gray-500">{placeholder}</span>;
}
