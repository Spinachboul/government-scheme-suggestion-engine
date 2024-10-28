// components/scheme-discovery.tsx
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search } from 'lucide-react';

interface SchemeDiscoveryProps {
  discoveredSchemes: string[];
  handleSchemeDiscovery: () => void;
}

export default function SchemeDiscovery({ discoveredSchemes, handleSchemeDiscovery }: SchemeDiscoveryProps) {
  return (
    <div className="space-y-4">
      <Button onClick={handleSchemeDiscovery}>
        <Search className="mr-2 h-4 w-4" /> Discover Eligible Schemes
      </Button>
      {discoveredSchemes.length > 0 && (
        <div>
          <Label>Eligible Schemes:</Label>
          <ul className="list-disc list-inside space-y-2 mt-2">
            {discoveredSchemes.map((scheme, index) => (
              <li key={index}>{scheme}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
