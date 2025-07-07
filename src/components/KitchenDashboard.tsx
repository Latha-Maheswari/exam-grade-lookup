
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  items: string[];
  status: "new" | "preparing" | "ready" | "dispatched";
  time: string;
  total: number;
}

const KitchenDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customer: "Rahul Sharma",
      items: ["Grilled Chicken Bowl x2", "Caesar Salad x1"],
      status: "preparing",
      time: "5 min ago",
      total: 797
    },
    {
      id: "ORD-002",
      customer: "Priya Patel",
      items: ["Fresh Smoothie x2", "Chocolate Brownie x1"],
      status: "ready",
      time: "12 min ago",
      total: 407
    },
    {
      id: "ORD-003",
      customer: "Arjun Kumar",
      items: ["Margherita Pizza x1", "Chicken Wings x1"],
      status: "new",
      time: "2 min ago",
      total: 598
    },
    {
      id: "ORD-004",
      customer: "Sneha Reddy",
      items: ["Grilled Chicken Bowl x1", "Fresh Smoothie x1"],
      status: "new",
      time: "1 min ago",
      total: 428
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500 hover:bg-blue-600";
      case "preparing": return "bg-yellow-500 hover:bg-yellow-600";
      case "ready": return "bg-green-500 hover:bg-green-600";
      case "dispatched": return "bg-gray-500 hover:bg-gray-600";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "new": return "New Order";
      case "preparing": return "Preparing";
      case "ready": return "Ready";
      case "dispatched": return "Dispatched";
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new": return <AlertCircle size={16} />;
      case "preparing": return <Clock size={16} />;
      case "ready": return <CheckCircle size={16} />;
      case "dispatched": return <CheckCircle size={16} />;
      default: return null;
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );

    const statusMessages = {
      preparing: "Order is now being prepared",
      ready: "Order is ready for pickup/delivery",
      dispatched: "Order has been dispatched"
    };

    toast({
      title: "Order Status Updated",
      description: statusMessages[newStatus] || "Order status updated",
    });
  };

  const getOrderCounts = () => {
    const counts = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      new: counts.new || 0,
      preparing: counts.preparing || 0,
      ready: counts.ready || 0,
      completed: counts.dispatched || 0
    };
  };

  const orderCounts = getOrderCounts();

  return (
    <section id="kitchen" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kitchen Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            Manage incoming orders and track kitchen operations efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center justify-center mb-3">
                <AlertCircle className="w-8 h-8 text-blue-600 mr-2" />
                <div className="text-4xl font-bold text-blue-600">{orderCounts.new}</div>
              </div>
              <div className="text-sm font-semibold text-gray-700">New Orders</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-yellow-600 mr-2" />
                <div className="text-4xl font-bold text-yellow-600">{orderCounts.preparing}</div>
              </div>
              <div className="text-sm font-semibold text-gray-700">In Progress</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-green-600 mr-2" />
                <div className="text-4xl font-bold text-green-600">{orderCounts.ready}</div>
              </div>
              <div className="text-sm font-semibold text-gray-700">Ready</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg border-0 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-gray-600 mr-2" />
                <div className="text-4xl font-bold text-gray-600">{orderCounts.completed}</div>
              </div>
              <div className="text-sm font-semibold text-gray-700">Completed Today</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">{order.id}</CardTitle>
                    <p className="text-gray-700 font-semibold">{order.customer}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock size={14} />
                      {order.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getStatusColor(order.status)} text-white flex items-center gap-1 mb-2`}>
                      {getStatusIcon(order.status)}
                      {getStatusText(order.status)}
                    </Badge>
                    <p className="text-2xl font-bold text-orange-600">₹{order.total.toFixed(0)}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Order Items:</h4>
                    <ul className="text-gray-700 space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3 pt-4">
                    {order.status === "new" && (
                      <Button 
                        size="sm" 
                        onClick={() => updateOrderStatus(order.id, "preparing")}
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Clock size={16} className="mr-1" />
                        Start Preparing
                      </Button>
                    )}
                    {order.status === "preparing" && (
                      <Button 
                        size="sm" 
                        onClick={() => updateOrderStatus(order.id, "ready")}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <CheckCircle size={16} className="mr-1" />
                        Mark Ready
                      </Button>
                    )}
                    {order.status === "ready" && (
                      <Button 
                        size="sm" 
                        onClick={() => updateOrderStatus(order.id, "dispatched")}
                        className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <CheckCircle size={16} className="mr-1" />
                        Mark Dispatched
                      </Button>
                    )}
                    {order.status === "dispatched" && (
                      <Badge variant="outline" className="text-gray-600 border-gray-300">
                        Order Completed
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenDashboard;
