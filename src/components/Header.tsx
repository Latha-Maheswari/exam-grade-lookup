
import { ChefHat } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/10 rounded-full">
              <ChefHat size={36} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                CloudKitchen Pro
              </h1>
              <p className="text-orange-100 text-sm md:text-base font-medium">
                Fresh meals delivered from our cloud kitchen
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('menu')}
              className="hover:text-orange-200 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('orders')}
              className="hover:text-orange-200 transition-all duration-300 font-semibold text-lg hover:scale-105 relative"
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('kitchen')}
              className="hover:text-orange-200 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Kitchen
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Order Now
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => scrollToSection('orders')}
              className="relative bg-white/10 px-4 py-2 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
