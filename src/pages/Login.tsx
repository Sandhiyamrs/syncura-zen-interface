import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Brain, Activity } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store username in localStorage for personalization
    localStorage.setItem("syncuraUsername", formData.username);
    navigate("/home");
  };

  return (
    <div className="min-h-screen gradient-calm flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background medical patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <Brain className="w-32 h-32" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: "2s" }}>
          <Activity className="w-40 h-40" />
        </div>
      </div>

      <div className="glass-card p-8 w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary animate-health-pulse mb-4">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[hsl(150,60%,55%)] to-[hsl(200,70%,65%)] bg-clip-text text-transparent mb-2">
            Welcome to Syncura 💫
          </h1>
          <p className="text-muted-foreground">Your holistic health companion</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              className="glass-card border-2"
            />
          </div>

          {!isLogin && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="glass-card border-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  required
                  className="glass-card border-2"
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="glass-card border-2"
            />
          </div>

          <Button type="submit" className="w-full gradient-primary text-white font-semibold">
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          {isLogin && (
            <Button variant="link" type="button" className="w-full text-sm">
              Forgot Password?
            </Button>
          )}

          <div className="text-center">
            <Button
              variant="link"
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
