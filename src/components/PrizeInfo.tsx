
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Gift, Info, Heart } from 'lucide-react';

const PrizeInfo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 px-4">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-decent">EGP 10,000 Profit Opportunity</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Join our program today and get a chance to win up to EGP 10,000 from Decent Life Foundation.
          Improve your future with this incredible opportunity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white card-shadow hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">How It Works</CardTitle>
            <Info className="h-5 w-5 text-decent" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Simply log in with your Facebook account to register for this exclusive opportunity. 
              Winners are selected weekly, and prizes are transferred directly to your account.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white card-shadow hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">The Prize</CardTitle>
            <Gift className="h-5 w-5 text-decent" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Win up to EGP 10,000 in cash prizes. This is a limited-time offer exclusively 
              for Egyptian residents. Multiple winners are chosen every week.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white card-shadow hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-lg font-medium">About Decent Life</CardTitle>
            <Heart className="h-5 w-5 text-decent" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Decent Life Foundation is dedicated to improving lives through financial 
              empowerment and community development across Egypt.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white p-6 rounded-lg card-shadow">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-decent animate-float" />
          <h3 className="text-xl font-bold">Why You Should Participate</h3>
        </div>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-decent mt-0.5">•</div>
            <p>Chance to win EGP 10,000 with no purchase necessary</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-decent mt-0.5">•</div>
            <p>Completely free to enter - only requires Facebook login</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-decent mt-0.5">•</div>
            <p>Weekly winners announced on our official Facebook page</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="h-5 w-5 text-decent mt-0.5">•</div>
            <p>Support the mission of Decent Life Foundation in Egypt</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrizeInfo;
