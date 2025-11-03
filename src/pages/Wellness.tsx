import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Smile, Coffee, Moon } from "lucide-react";

const Wellness = () => {
  const categories = [
    {
      title: "Stress Relief",
      icon: Sparkles,
      color: "from-purple-400 to-pink-400",
      activities: ["Breathing Exercises", "Guided Meditation", "Progressive Relaxation"],
    },
    {
      title: "Anxiety Support",
      icon: Heart,
      color: "from-blue-400 to-cyan-400",
      activities: ["Grounding Techniques", "Thought Journal", "Mindfulness Practice"],
    },
    {
      title: "Self-Care",
      icon: Smile,
      color: "from-green-400 to-teal-400",
      activities: ["Gratitude Journal", "Hobby Time", "Social Connection"],
    },
    {
      title: "Energy Boost",
      icon: Coffee,
      color: "from-orange-400 to-yellow-400",
      activities: ["Morning Routine", "Healthy Snacks", "Power Nap"],
    },
    {
      title: "Better Sleep",
      icon: Moon,
      color: "from-indigo-400 to-purple-400",
      activities: ["Sleep Hygiene", "Bedtime Routine", "Relaxation Music"],
    },
  ];

  const quotes = [
    "Your mental health is a priority, not an option.",
    "Small steps every day lead to big changes.",
    "Be gentle with yourself, you're doing the best you can.",
  ];

  return (
    <div className="min-h-screen gradient-calm p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Wellness Universe 🌸</h1>
        <p className="text-muted-foreground">Your space for holistic wellbeing</p>
      </div>

      {/* Motivational Quote */}
      <Card className="glass-card mb-6 border-2 border-primary/20">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-8 h-8 mx-auto mb-3 text-primary animate-float" />
          <p className="text-lg font-medium italic">"{quotes[0]}"</p>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title} className="glass-card hover:scale-105 transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {category.activities.map((activity) => (
                    <div
                      key={activity}
                      className="p-3 rounded-lg bg-card hover:bg-accent/10 transition-colors cursor-pointer"
                    >
                      <p className="text-sm font-medium">{activity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Wellness;
