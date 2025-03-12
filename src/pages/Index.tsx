
import React from 'react';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import PrizeInfo from '@/components/PrizeInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-facebook-dark">
                فرصتك للفوز بـ <span className="text-facebook">10,000 جنيه مصري</span>
              </h1>
              <p className="text-xl">
                سجّل الدخول بحساب الفيسبوك الخاص بك للدخول في السحب على الجائزة
                واحصل على فرصة الفوز بفرصة الربح من مؤسسة حياة كريمة.
              </p>
              <div className="bg-facebook/10 p-4 rounded-lg border border-facebook/20">
                <p className="text-sm font-medium">
                  ✨ عرض لفترة محدودة! سجل الآن لضمان مكانك في السحب القادم.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <LoginForm />
            </div>
          </div>
          
          <div className="py-10">
            <PrizeInfo />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
