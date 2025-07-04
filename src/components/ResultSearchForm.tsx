
import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const ResultSearchForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registrationNumber.trim()) {
      toast({
        title: "Registration Number Required",
        description: "Please enter your registration number.",
        variant: "destructive",
      });
      return;
    }

    if (!dateOfBirth) {
      toast({
        title: "Date of Birth Required",
        description: "Please select your date of birth.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Search Complete",
        description: `Searching results for registration: ${registrationNumber}`,
      });
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl text-gray-800">
            Enter Your Details
          </CardTitle>
          <p className="text-sm text-gray-600">
            Please provide your registration number and date of birth
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="registration" className="text-sm font-medium text-gray-700">
                Registration Number
              </Label>
              <Input
                id="registration"
                type="text"
                placeholder="Enter your registration number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="h-12 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Date of Birth
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal border-gray-300 hover:border-blue-500",
                      !dateOfBirth && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateOfBirth ? (
                      format(dateOfBirth, "PPP")
                    ) : (
                      <span>Select your date of birth</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={dateOfBirth}
                    onSelect={setDateOfBirth}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search size={18} />
                  Search Results
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultSearchForm;
