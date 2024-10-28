// components/ui/tabs.tsx
import { useState, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}

export function Tabs({ children, value, onValueChange }: TabsProps) {
  return <div>{children}</div>;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className = '' }: TabsListProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  onClick: () => void;
}

export function TabsTrigger({ children, value, onClick }: TabsTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${value ? 'border-b-2 border-blue-500' : 'border-b border-gray-200'} `}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  activeTab: string;
}

export function TabsContent({ children, value, activeTab }: TabsContentProps) {
  return activeTab === value ? <div>{children}</div> : null;
}
