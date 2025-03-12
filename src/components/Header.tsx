
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex justify-between items-center bg-white card-shadow" dir="rtl">
      <div className="flex items-center gap-2">
        <Award className="h-8 w-8 text-facebook" />
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-facebook-dark">مؤسسة حياة كريمة</h1>
          <CheckCircle className="h-5 w-5 text-facebook ml-1" />
        </div>
      </div>
      <div className="text-sm md:text-base font-medium text-facebook hidden md:block">
        فرصة ربح 10,000 جنيه مصري
      </div>
    </header>
  );
};

export default Header;
