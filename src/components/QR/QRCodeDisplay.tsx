
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from "lucide-react";

interface QRCodeDisplayProps {
  title: string;
  qrCodeUrl: string;
  description?: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  title,
  qrCodeUrl,
  description,
}) => {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden border-2 border-gray-100">
      <CardHeader className="bg-restaurant-500 text-white">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <QrCode className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 text-center">
        {qrCodeUrl ? (
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white border-2 border-gray-200 rounded-lg">
              <img 
                src={qrCodeUrl} 
                alt="QR Code" 
                className="w-48 h-48"
              />
            </div>
            {description && (
              <p className="mt-4 text-sm text-gray-600">{description}</p>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-md">
            <p className="text-gray-500">QR Code não disponível</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeDisplay;
