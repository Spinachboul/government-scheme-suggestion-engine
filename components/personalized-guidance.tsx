// components/personalized-guidance.tsx
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageSquare } from 'lucide-react';

interface PersonalizedGuidanceProps {
  guidance: string;
  handleGuidanceRequest: () => void;
}

export default function PersonalizedGuidance({ guidance, handleGuidanceRequest }: PersonalizedGuidanceProps) {
  return (
    <div className="space-y-4">
      <Button onClick={handleGuidanceRequest}>
        <MessageSquare className="mr-2 h-4 w-4" /> Request Personalized Guidance
      </Button>
      {guidance && (
        <div className="space-y-2">
          <Label>Guidance:</Label>
          <p>{guidance}</p>
        </div>
      )}
    </div>
  );
}
