// components/document-verification.tsx
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle, Upload } from 'lucide-react';

interface DocumentVerificationProps {
  verificationStatus: string;
  handleDocumentUpload: () => void;
}

export default function DocumentVerification({ verificationStatus, handleDocumentUpload }: DocumentVerificationProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Upload Identification Documents</Label>
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={handleDocumentUpload}>
            <Upload className="mr-2 h-4 w-4" /> Upload Aadhaar Card
          </Button>
          <Button onClick={handleDocumentUpload}>
            <Upload className="mr-2 h-4 w-4" /> Upload PAN Card
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Label>Verification Status:</Label>
        {verificationStatus === 'pending' && <span className="text-yellow-500">Pending</span>}
        {verificationStatus === 'verifying' && <span className="text-blue-500">Verifying...</span>}
        {verificationStatus === 'verified' && (
          <span className="text-green-500 flex items-center">
            Verified <CheckCircle className="ml-1 h-4 w-4" />
          </span>
        )}
      </div>
    </div>
  );
}
