// components/profile-form.tsx
import { Dispatch, SetStateAction } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfileFormProps {
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function ProfileForm({ setActiveTab }: ProfileFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input id="age" type="number" placeholder="Enter your age" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" placeholder="Enter your full address" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="occupation">Occupation</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select your occupation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student" onClick={() => {}}>Student</SelectItem>
            <SelectItem value="employed" onClick={() => {}}>Employed</SelectItem>
            <SelectItem value="self-employed" onClick={() => {}}>Self-employed</SelectItem>
            <SelectItem value="unemployed" onClick={() => {}}>Unemployed</SelectItem>
            <SelectItem value="retired" onClick={() => {}}>Retired</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={() => setActiveTab('verification')}>Next: Document Verification</Button>
    </div>
  );
}
