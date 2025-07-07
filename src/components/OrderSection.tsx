
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Minus, Plus, Trash2 } from "lucide-react";

const OrderSection = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    zipCode: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.18; // GST in India
  const delivery = subtotal > 0 ? 49 : 0;
  const total = subtotal + tax + delivery;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order Placed Successfully!",
        description: `Your order worth ₹${total.toFixed(0)} has been placed. You'll receive a confirmation shortly.`,
      });
      clearCart();
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        zipCode: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <section id="orders" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Cart is Empty
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Add some delicious items from our menu to get started!
            </p>
            <Button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse Menu
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="orders" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Review Your Order
          </h2>
          <p className="text-xl text-gray-600">
            Confirm your items and provide delivery details
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-orange-600 font-bold">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Minus size={14} />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus size={14} />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 p-0 ml-2"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                  <span className="font-bold text-lg">₹{(item.price * item.quantity).toFixed(0)}</span>
                </div>
              ))}
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>GST (18%)</span>
                  <span>₹{tax.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Delivery</span>
                  <span>₹{delivery.toFixed(0)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-2xl">
                  <span>Total</span>
                  <span className="text-orange-600">₹{total.toFixed(0)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 h-12"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 h-12"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-sm font-semibold text-gray-700">Delivery Address *</Label>
                  <Input 
                    id="address" 
                    placeholder="123 MG Road"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 h-12"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-sm font-semibold text-gray-700">City</Label>
                    <Input 
                      id="city" 
                      placeholder="Mumbai"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-sm font-semibold text-gray-700">Pin Code</Label>
                    <Input 
                      id="zipCode" 
                      placeholder="400001"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="mt-1 h-12"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Order...
                    </div>
                  ) : (
                    `Place Order - ₹${total.toFixed(0)}`
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
