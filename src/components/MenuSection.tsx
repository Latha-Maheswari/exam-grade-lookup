
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  const categories = [
    { id: "all", name: "All Items" },
    { id: "appetizers", name: "Appetizers" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Grilled Chicken Bowl",
      category: "mains",
      price: 299,
      description: "Tender grilled chicken with quinoa, roasted vegetables, and herb sauce",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Caesar Salad",
      category: "appetizers",
      price: 199,
      description: "Fresh romaine lettuce, croutons, parmesan cheese, and caesar dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Chocolate Brownie",
      category: "desserts",
      price: 149,
      description: "Rich chocolate brownie with vanilla ice cream and chocolate sauce",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Fresh Smoothie",
      category: "beverages",
      price: 129,
      description: "Blend of fresh fruits, yogurt, and honey",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Margherita Pizza",
      category: "mains",
      price: 349,
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Chicken Wings",
      category: "appetizers",
      price: 249,
      description: "Spicy buffalo wings served with blue cheese dip",
      image: "https://images.unsplash.com/photo-1567620905748-7d1c1d8b873e?w=400&h=300&fit=crop"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes made with fresh, high-quality ingredients sourced from local farms
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-orange-600 hover:bg-orange-700 shadow-lg scale-105" 
                  : "hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
              <CardHeader className="p-0 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3 text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-orange-600">₹{item.price}</span>
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
