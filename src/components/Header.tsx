
import { ChefHat, Utensils } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChefHat size={32} />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                CloudKitchen Pro
              </h1>
              <p className="text-orange-100 text-sm md:text-base">
                Fresh meals delivered from our cloud kitchen
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#menu" className="hover:text-orange-200 transition-colors">Menu</a>
            <a href="#orders" className="hover:text-orange-200 transition-colors">Orders</a>
            <a href="#kitchen" className="hover:text-orange-200 transition-colors">Kitchen</a>
            <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Order Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
