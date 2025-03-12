
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-8 bg-white border-t" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-facebook" />
            <span className="text-lg font-semibold text-facebook-dark">مؤسسة حياة كريمة</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2023 مؤسسة حياة كريمة. جميع الحقوق محفوظة.</p>
            <p className="mt-1">
              هذا العرض صالح للمقيمين في مصر فقط. تطبق الشروط والأحكام.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="p-4 bg-facebook/5 rounded-lg">
            <h3 className="text-lg font-bold text-facebook-dark mb-2 flex items-center">
              <CheckCircle className="h-5 w-5 text-facebook ml-2" /> معلومات عن المصداقية
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              تقدم مؤسسة حياة كريمة فرصة ربح قيمتها 10,000 جنيه مصري للمشاركين المؤهلين. هذه المبادرة جزء من جهود المؤسسة لدعم المواطنين وتحسين جودة الحياة في مصر.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="https://www.hayakarima.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-facebook hover:text-facebook-dark text-sm font-medium transition-colors"
              >
                زيارة الموقع الرسمي <ExternalLink className="h-4 w-4 mr-1" />
              </a>
              <a 
                href="https://www.facebook.com/HayaKarima.eg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-facebook hover:text-facebook-dark text-sm font-medium transition-colors"
              >
                صفحة الفيسبوك الرسمية <ExternalLink className="h-4 w-4 mr-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-muted-foreground text-center">
            تنويه: هذا العرض الترويجي غير مرتبط أو مدعوم من فيسبوك.
            جميع شعارات وعلامات فيسبوك التجارية هي ملك لشركة ميتا بلاتفورمز.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
