import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Calendar, TrendingUp, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const MentalHealth = () => {
  const moodData = [
    { day: "Mon", mood: "😰", level: 45 },
    { day: "Tue", mood: "😊", level: 75 },
    { day: "Wed", mood: "😐", level: 60 },
    { day: "Thu", mood: "😊", level: 80 },
    { day: "Fri", mood: "🙂", level: 70 },
  ];

  const insights = [
    "You feel anxious on Monday mornings",
    "Evening walks boost your mood by 30%",
    "Meditation improves your sleep quality",
  ];

  const recommendations = [
    { title: "Morning Meditation", icon: "🧘", time: "10 mins" },
    { title: "Journal Your Thoughts", icon: "📝", time: "15 mins" },
    { title: "Listen to Calm Music", icon: "🎵", time: "20 mins" },
    { title: "Healthy Breakfast", icon: "🥗", time: "30 mins" },
  ];

  return (
    <div className="min-h-screen gradient-calm p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Mental Health Score</h1>
      </div>

      {/* Score Card */}
      <Card className="glass-card mb-6 border-2 border-secondary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Your Current Score</p>
              <div className="text-5xl font-bold bg-gradient-to-r from-[hsl(270,60%,70%)] to-[hsl(200,70%,65%)] bg-clip-text text-transparent animate-health-pulse">
                72/100
              </div>
            </div>
            <div className="w-24 h-24 rounded-full gradient-secondary flex items-center justify-center animate-glow">
              <span className="text-4xl">😊</span>
            </div>
          </div>
          <Progress value={72} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">Good! You're doing well this week.</p>
        </CardContent>
      </Card>

      {/* Mood Tracker */}
      <Card className="glass-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Weekly Mood Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {moodData.map((data) => (
              <div key={data.day} className="text-center">
                <div className="text-3xl mb-2">{data.mood}</div>
                <div className="text-xs font-semibold mb-1">{data.day}</div>
                <Progress value={data.level} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="glass-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            AI-Generated Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/10">
              <TrendingUp className="w-5 h-5 text-secondary mt-0.5" />
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recommended Activities</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {recommendations.map((rec) => (
            <Button
              key={rec.title}
              variant="outline"
              className="glass-card h-auto p-4 justify-start hover:border-secondary"
            >
              <div className="flex items-center gap-4 w-full">
                <span className="text-3xl">{rec.icon}</span>
                <div className="flex-1 text-left">
                  <div className="font-semibold">{rec.title}</div>
                  <div className="text-xs text-muted-foreground">{rec.time}</div>
                </div>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MentalHealth;
