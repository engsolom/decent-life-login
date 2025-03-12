
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Gift, Info, Heart, CheckCircle, Clock } from 'lucide-react';

const PrizeInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-4" dir="rtl">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-facebook">فرصة ربح 10,000 جنيه مصري</h2>
        <p className="text-lg max-w-2xl mx-auto">
          انضم إلى برنامجنا اليوم واحصل على فرصة ربح ما يصل إلى 10,000 جنيه مصري من مؤسسة حياة كريمة.
          حسن مستقبلك مع هذه الفرصة الرائعة.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white facebook-card-shadow hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">كيف تعمل</CardTitle>
            <Info className="h-5 w-5 text-facebook" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              ما عليك سوى تسجيل الدخول باستخدام حساب فيسبوك الخاص بك للتسجيل في هذه الفرصة الحصرية.
              يتم اختيار الفائزين أسبوعياً، ويتم تحويل الجوائز مباشرة إلى حسابك.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white facebook-card-shadow hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">الجائزة</CardTitle>
            <Gift className="h-5 w-5 text-facebook" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              اربح ما يصل إلى 10,000 جنيه مصري كجوائز نقدية. هذا عرض محدود الوقت حصرياً 
              للمقيمين في مصر. يتم اختيار العديد من الفائزين كل أسبوع.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white facebook-card-shadow hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">عن حياة كريمة</CardTitle>
            <Heart className="h-5 w-5 text-facebook" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              تكرس مؤسسة حياة كريمة جهودها لتحسين الحياة من خلال التمكين المالي 
              وتنمية المجتمع في جميع أنحاء مصر.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white p-6 rounded-lg facebook-card-shadow">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-facebook animate-float" />
          <h3 className="text-xl font-bold">لماذا عليك المشاركة</h3>
        </div>
        <ul className="space-y-2 mr-4">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-facebook mt-0.5">•</div>
            <p>فرصة للفوز بـ 10,000 جنيه مصري دون الحاجة إلى شراء</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-facebook mt-0.5">•</div>
            <p>مجاني تماماً للمشاركة - يتطلب فقط تسجيل الدخول بحساب فيسبوك</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-facebook mt-0.5">•</div>
            <p>يتم الإعلان عن الفائزين أسبوعياً على صفحة الفيسبوك الرسمية</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-facebook mt-0.5">•</div>
            <p>دعم مهمة مؤسسة حياة كريمة في مصر</p>
          </li>
        </ul>
        
        <div className="mt-6 p-4 bg-facebook/5 rounded-lg border border-facebook/10">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-facebook" />
            <h4 className="font-semibold">عرض محدود!</h4>
          </div>
          <p className="text-sm">
            هذه الفرصة متاحة لفترة محدودة. سجل الآن لضمان فرصتك في الفوز!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrizeInfo;
