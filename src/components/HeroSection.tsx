
import { Utensils, Pizza, Cookie } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fresh Meals from Our Cloud Kitchen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of food delivery with our state-of-the-art cloud kitchen. 
            We prepare fresh, delicious meals using the finest ingredients and deliver them hot to your doorstep.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
            Browse Menu
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Utensils className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Fresh Ingredients</h3>
              <p className="text-sm text-gray-600">
                We source the finest ingredients daily to ensure maximum freshness and flavor
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Pizza className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Made to Order</h3>
              <p className="text-sm text-gray-600">
                Every meal is prepared fresh when you order, ensuring perfect taste and quality
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Cookie className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                Hot, fresh meals delivered to your door in 30 minutes or less
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
