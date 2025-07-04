
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <GraduationCap size={32} />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Parisutham Institute Of Technology and Science
            </h1>
            <p className="text-blue-100 text-sm md:text-base">
              Exam Results Portal - Check your examination results instantly
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
