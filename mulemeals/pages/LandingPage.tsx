
import React from 'react';
import Button from '../components/Button';
import { AppStep } from '../types';

interface LandingPageProps {
  onNavigate: (step: AppStep) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <section className="text-center space-y-4 pt-4">
        <h2 className="text-4xl font-black text-gray-900 leading-tight">
          Fast, reliable <span className="text-blue-600">on-campus</span> food delivery.
        </h2>
        <p className="text-gray-600 text-lg">
          Hungry but busy? We'll bring your favorite campus eats straight to your door.
        </p>
        <div className="pt-4">
          <Button onClick={() => onNavigate(AppStep.OrderForm)}>
            Order Delivery
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800">Why MuleMeals?</h3>
        <div className="grid gap-4">
          {[
            { 
              icon: 'fa-clock', 
              title: 'Always On Time', 
              desc: 'Late-night or mid-day, we respect your schedule.' 
            },
            { 
              icon: 'fa-graduation-cap', 
              title: 'Student Run', 
              desc: 'Built for students, by students who know campus.' 
            },
            { 
              icon: 'fa-shield-halved', 
              title: 'Safe & Reliable', 
              desc: 'Trusted on-campus delivery every single time.' 
            },
            { 
              icon: 'fa-bolt', 
              title: 'Ultimate Convenience', 
              desc: "Don't leave your room. Let us do the walking." 
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 items-start">
              <div className="mt-1 w-10 h-10 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-6 pb-8">
        <div className="p-8 rounded-3xl bg-blue-900 text-white text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold">Ready to eat?</h3>
          <p className="text-blue-200 opacity-90">Start your order now and get it in under 20 minutes.</p>
          <Button 
            className="bg-white text-blue-900 hover:bg-blue-50 mt-4 shadow-none" 
            onClick={() => onNavigate(AppStep.OrderForm)}
          >
            Start Order
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
