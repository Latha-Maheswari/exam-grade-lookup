import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const KitchenDashboard = () => {
  const [orders] = useState([
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
      items: ["Grilled Chicken Bowl x1"],
      status: "new",
      time: "2 min ago",
      total: 299
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500";
      case "preparing": return "bg-yellow-500";
      case "ready": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "new": return "New Order";
      case "preparing": return "Preparing";
      case "ready": return "Ready";
      default: return status;
    }
  };

  return (
    <section id="kitchen" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kitchen Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Manage incoming orders and track kitchen operations
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-sm text-gray-600">New Orders</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-sm text-gray-600">In Progress</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <div className="text-sm text-gray-600">Completed Today</div>
              </CardContent>
            </Card>
          </div>

          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-gray-600">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.time}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusText(order.status)}
                    </Badge>
                    <p className="text-lg font-bold mt-2">₹{order.total.toFixed(0)}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">Order Items:</h4>
                  <ul className="text-sm text-gray-600">
                    {order.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2 mt-4">
                  {order.status === "new" && (
                    <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                      Start Preparing
                    </Button>
                  )}
                  {order.status === "preparing" && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Mark Ready
                    </Button>
                  )}
                  {order.status === "ready" && (
                    <Button size="sm" variant="outline">
                      Order Dispatched
                    </Button>
                  )}
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
