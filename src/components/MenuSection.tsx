
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Caesar Salad",
      category: "appetizers",
      price: 199,
      description: "Fresh romaine lettuce, croutons, parmesan cheese, and caesar dressing",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Chocolate Brownie",
      category: "desserts",
      price: 149,
      description: "Rich chocolate brownie with vanilla ice cream and chocolate sauce",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Fresh Smoothie",
      category: "beverages",
      price: 129,
      description: "Blend of fresh fruits, yogurt, and honey",
      image: "/placeholder.svg"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with fresh, high-quality ingredients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{item.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                  <Button className="bg-orange-600 hover:bg-orange-700">
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
