// components/ui/input.tsx
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}
