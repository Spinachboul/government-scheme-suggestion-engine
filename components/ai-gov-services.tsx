// components/ai-gov-services.tsx
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"; // Ensure this Button component supports the 'variant' prop
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Upload, Search, MessageSquare } from 'lucide-react';
import ProfileForm from "./profile-form";
import DocumentVerification from "./document-verification";
import SchemeDiscovery from "./scheme-discovery";
import PersonalizedGuidance from "./personalized-guidance";

export default function AIGovernmentServices() {
  const [activeTab, setActiveTab] = useState('profile');
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [discoveredSchemes, setDiscoveredSchemes] = useState<string[]>([]);
  const [guidance, setGuidance] = useState('');

  const handleDocumentUpload = () => {
    setVerificationStatus('verifying');
    setTimeout(() => {
      setVerificationStatus('verified');
      setActiveTab('discovery');
    }, 2000);
  };

  const handleSchemeDiscovery = () => {
    setDiscoveredSchemes([
      'Pradhan Mantri Jan Dhan Yojana',
      'Ayushman Bharat Yojana',
      'Pradhan Mantri Awas Yojana',
    ]);
    setActiveTab('guidance');
  };

  const handleGuidanceRequest = () => {
    setGuidance("Based on your profile, we recommend starting with the Pradhan Mantri Jan Dhan Yojana...");
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI-Driven Government Services Platform</CardTitle>
        <CardDescription>Discover and access government schemes you're eligible for</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" onClick={() => setActiveTab('profile')}>Profile</TabsTrigger>
            <TabsTrigger value="verification" onClick={() => setActiveTab('verification')}>Verification</TabsTrigger>
            <TabsTrigger value="discovery" onClick={() => setActiveTab('discovery')}>Discovery</TabsTrigger>
            <TabsTrigger value="guidance" onClick={() => setActiveTab('guidance')}>Guidance</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" activeTab={activeTab}>
            <ProfileForm setActiveTab={setActiveTab} />
          </TabsContent>
          <TabsContent value="verification" activeTab={activeTab}>
            <DocumentVerification 
              verificationStatus={verificationStatus} 
              handleDocumentUpload={handleDocumentUpload}
            />
          </TabsContent>
          <TabsContent value="discovery" activeTab={activeTab}>
            <SchemeDiscovery 
              discoveredSchemes={discoveredSchemes} 
              handleSchemeDiscovery={handleSchemeDiscovery} 
            />
          </TabsContent>
          <TabsContent value="guidance" activeTab={activeTab}>
            <PersonalizedGuidance 
              guidance={guidance} 
              handleGuidanceRequest={handleGuidanceRequest} 
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setActiveTab('profile')}>Reset</Button>
        <Button variant="secondary" onClick={() => window.open('https://www.myscheme.gov.in/', '_blank')}>
          Visit MyScheme Portal
        </Button>
      </CardFooter>
    </Card>
  );
}
