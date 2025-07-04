
import { AlertCircle, Clock, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
      <Card className="text-center border-blue-200 hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Quick Access</h3>
          <p className="text-sm text-gray-600">
            Get your results instantly with your registration number and date of birth
          </p>
        </CardContent>
      </Card>

      <Card className="text-center border-blue-200 hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">24/7 Available</h3>
          <p className="text-sm text-gray-600">
            Access your results anytime, anywhere with our online portal
          </p>
        </CardContent>
      </Card>

      <Card className="text-center border-blue-200 hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="font-semibold text-gray-800 mb-2">Secure & Private</h3>
          <p className="text-sm text-gray-600">
            Your personal information and results are protected and confidential
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoSection;
