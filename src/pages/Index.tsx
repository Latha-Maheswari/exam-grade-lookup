
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import KitchenDashboard from "@/components/KitchenDashboard";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <Header />
        <HeroSection />
        <MenuSection />
        <OrderSection />
        <KitchenDashboard />
        
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4">CloudKitchen Pro</h3>
                <p className="text-gray-300 leading-relaxed">
                  India's premier cloud kitchen delivering fresh, delicious meals with cutting-edge technology and exceptional service.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#menu" className="hover:text-orange-400 transition-colors">Menu</a></li>
                  <li><a href="#orders" className="hover:text-orange-400 transition-colors">Order Online</a></li>
                  <li><a href="#kitchen" className="hover:text-orange-400 transition-colors">Kitchen Dashboard</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Contact Info</h3>
                <div className="text-gray-300 space-y-2">
                  <p>📞 +91 98765 43210</p>
                  <p>📧 orders@cloudkitchenpro.in</p>
                  <p>📍 Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-300 mb-2">
                © 2025 CloudKitchen Pro. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Delivering fresh meals from our state-of-the-art cloud kitchen across India
              </p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
