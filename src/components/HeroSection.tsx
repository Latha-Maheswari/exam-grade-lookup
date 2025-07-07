
import { Utensils, Pizza, Cookie, Star, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-red-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-600/10 text-orange-800 px-4 py-2 rounded-full font-semibold mb-6">
            <Star size={18} className="text-orange-600" />
            India's #1 Cloud Kitchen Experience
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Fresh Meals from Our
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Cloud Kitchen
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience the future of food delivery with our state-of-the-art cloud kitchen. 
            We prepare fresh, delicious meals using the finest ingredients and deliver them hot to your doorstep in just 30 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToMenu}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
            >
              Browse Menu
            </Button>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={20} />
              <span className="font-semibold">30 min delivery guarantee</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>100% Safe & Hygienic</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span>4.8★ Rating (2000+ reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Premium Ingredients</h3>
              <p className="text-gray-600 leading-relaxed">
                We source the finest, farm-fresh ingredients daily to ensure maximum freshness, flavor, and nutritional value in every dish
              </p>
            </CardContent>
          </Card>

          <Card className="group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Pizza className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Made to Order</h3>
              <p className="text-gray-600 leading-relaxed">
                Every meal is prepared fresh when you order, using traditional cooking methods combined with modern kitchen technology
              </p>
            </CardContent>
          </Card>

          <Card className="group text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Lightning Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Hot, fresh meals delivered to your door in 30 minutes or less with our efficient delivery network and tracking system
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
