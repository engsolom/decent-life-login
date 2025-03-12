import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Mail, Lock, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateInput = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput(identifier)) {
      toast({
        title: "خطأ في الإدخال",
        description: "يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف صالح.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // بيانات وهمية لتسجيل الدخول محليًا
    const dummyUser = {
      email: "test@example.com",
      password: "123456",
    };

    setTimeout(() => {
      if (identifier === dummyUser.email && password === dummyUser.password) {
        toast({
          title: "تم تسجيل الدخول بنجاح!",
          description: "أهلاً بك في موقعنا.",
        });
      } else {
        toast({
          title: "فشل تسجيل الدخول",
          description: "بيانات الدخول غير صحيحة.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto" dir="rtl">
      <CardHeader className="space-y-2">
        <div className="flex justify-center mb-4">
          <Facebook className="h-12 w-12 text-facebook" />
        </div>
        <CardTitle className="text-2xl font-bold text-center text-facebook-dark">
          تسجيل الدخول
        </CardTitle>
        <CardDescription className="text-center">
          أدخل بياناتك لتسجيل الدخول
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pr-10 text-right" type="text" placeholder="البريد الإلكتروني أو رقم الهاتف" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
          </div>
          <div className="relative">
            <Lock className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pr-10 text-right" type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full text-white flex items-center justify-center gap-2" disabled={isLoading}>
            {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            {!isLoading && <ArrowRight className="h-5 w-5 mr-2" />}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-xs text-center text-muted-foreground">
          بتسجيل الدخول، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
