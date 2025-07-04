
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import KitchenDashboard from "@/components/KitchenDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      <HeroSection />
      <MenuSection />
      <OrderSection />
      <KitchenDashboard />
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 CloudKitchen Pro. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Delivering fresh meals from our cloud kitchen
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
