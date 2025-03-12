
import React from 'react';
import { Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-8 bg-white border-t">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-decent" />
            <span className="text-lg font-semibold text-decent-text">Decent Life Foundation</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2023 Decent Life Foundation. All rights reserved.</p>
            <p className="mt-1">
              This offer is valid for Egyptian residents only. Terms and conditions apply.
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-muted-foreground text-center">
            DISCLAIMER: This promotion is not affiliated with or endorsed by Facebook. 
            All Facebook logos and trademarks are property of Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
