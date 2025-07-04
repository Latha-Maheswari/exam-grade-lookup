
import Header from "@/components/Header";
import ResultSearchForm from "@/components/ResultSearchForm";
import InfoSection from "@/components/InfoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            PITS Exam Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to Parisutham Institute Of Technology and Science exam results portal. 
            Enter your registration details below to view your examination results. 
            Make sure to provide accurate information for successful verification.
          </p>
        </div>

        <ResultSearchForm />
        <InfoSection />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Parisutham Institute Of Technology and Science. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            For technical support, contact: results@pits.edu.in
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
