
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Mail, Lock, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful!",
        description: "You're now in the running for the EGP 10,000 prize!",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto card-shadow">
      <CardHeader className="space-y-2">
        <div className="flex justify-center mb-4">
          <Facebook className="h-12 w-12 text-decent" />
        </div>
        <CardTitle className="text-2xl font-bold text-center">Sign in with Facebook</CardTitle>
        <CardDescription className="text-center">
          Login to claim your chance to win EGP 10,000 from Decent Life Foundation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10"
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full login-button text-white flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login with Facebook"}
            {!isLoading && <ArrowRight className="h-5 w-5" />}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="text-decent font-medium hover:underline">
              Sign up for Facebook
            </a>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-xs text-center text-muted-foreground">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
