import { useNavigate } from "react-router-dom";
import { Activity, Brain, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("syncuraUsername") || "User";

  const mainCards = [
    {
      title: "Physical Health",
      icon: Activity,
      gradient: "from-[hsl(150,60%,55%)] to-[hsl(200,70%,65%)]",
      path: "/medical-records",
      description: "Track vitals, records & medications",
    },
    {
      title: "Mental Health",
      icon: Brain,
      gradient: "from-[hsl(270,60%,70%)] to-[hsl(200,70%,65%)]",
      path: "/mental-health",
      description: "Mood tracker & wellness insights",
    },
    {
      title: "AI Chatbot",
      icon: MessageCircle,
      gradient: "from-[hsl(200,70%,65%)] to-[hsl(150,60%,55%)]",
      path: "/chatbot",
      description: "24/7 health assistant",
    },
  ];

  return (
    <div className="min-h-screen gradient-calm p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {username} 👋</h1>
        <p className="text-muted-foreground">Let's take care of your wellbeing today</p>
      </div>

      {/* Main Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {mainCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card
              key={card.path}
              onClick={() => navigate(card.path)}
              className="glass-card cursor-pointer hover:scale-105 transition-smooth overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:animate-health-pulse`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          onClick={() => navigate("/doctor-consultation")}
          className="glass-card cursor-pointer hover:scale-105 transition-smooth"
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <div>
              <h4 className="font-semibold">Book Doctor Consultation</h4>
              <p className="text-sm text-muted-foreground">Connect with specialists</p>
            </div>
          </CardContent>
        </Card>

        <Card
          onClick={() => navigate("/wellness")}
          className="glass-card cursor-pointer hover:scale-105 transition-smooth"
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <div>
              <h4 className="font-semibold">Wellness Universe</h4>
              <p className="text-sm text-muted-foreground">Explore self-care resources</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Syncura Watermark */}
      <div className="fixed bottom-4 right-4 opacity-10 pointer-events-none">
        <Activity className="w-32 h-32 animate-float" />
      </div>
    </div>
  );
};

export default Home;
