// components/ui/textarea.tsx
import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}
