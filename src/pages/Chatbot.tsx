import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Syncura AI assistant. How can I help you with your health today?",
    },
  ]);
  const [input, setInput] = useState("");

  const suggestedQueries = [
    "I have a fever 🤒",
    "Feeling anxious 😰",
    "Sleep issues 😴",
    "Headache relief 💊",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: "I understand you're concerned about this. Based on your symptoms, I recommend: 1) Rest and hydration 2) Monitor your temperature 3) Consider consulting a doctor if symptoms persist. Would you like me to help you book a consultation?",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen gradient-calm p-6 flex flex-col">
      {/* Header */}
      <div className="glass-card p-4 mb-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center animate-glow">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Syncura AI Assistant</h1>
          <p className="text-sm text-muted-foreground">Available 24/7 for you</p>
        </div>
      </div>

      {/* Suggested Queries */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Quick queries:</p>
        <div className="flex flex-wrap gap-2">
          {suggestedQueries.map((query) => (
            <Button
              key={query}
              variant="outline"
              size="sm"
              onClick={() => setInput(query)}
              className="glass-card"
            >
              {query}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card
              className={`max-w-[80%] ${
                message.role === "user"
                  ? "gradient-primary text-white"
                  : "glass-card"
              }`}
            >
              <CardContent className="p-4">
                <p className={message.role === "user" ? "text-white" : ""}>{message.content}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="glass-card p-4 flex gap-2">
        <Input
          placeholder="Type your health concern..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 glass-card"
        />
        <Button onClick={handleSend} className="gradient-primary text-white">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
