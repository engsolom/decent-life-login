
import React from 'react';
import { Award } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex justify-between items-center bg-white card-shadow">
      <div className="flex items-center gap-2">
        <Award className="h-8 w-8 text-decent" />
        <h1 className="text-xl font-bold text-decent-text">Decent Life Foundation</h1>
      </div>
      <div className="text-sm md:text-base font-medium text-decent hidden md:block">
        EGP 10,000 Profit Opportunity
      </div>
    </header>
  );
};

export default Header;
