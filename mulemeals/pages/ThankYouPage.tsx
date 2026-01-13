
import React from 'react';
import Button from '../components/Button';
import { AppStep } from '../types';

interface ThankYouPageProps {
  onReset: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onReset }) => {
  return (
    <div className="animate-in zoom-in-95 duration-500 text-center space-y-8 pt-12">
      <div className="relative inline-block">
        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 relative z-10">
          <i className="fa-solid fa-check text-5xl"></i>
        </div>
        <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-25"></div>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900">Thank you for your order!</h2>
        <p className="text-xl text-blue-600 font-bold">MuleMeals is on the way 🚴‍♂️</p>
        <p className="text-gray-500 max-w-xs mx-auto">
          We've received your information and are getting your food ready. We'll be in touch if we need anything else!
        </p>
      </div>

      <div className="pt-12">
        <Button variant="secondary" onClick={onReset}>
          Return Home
        </Button>
      </div>

      <div className="pt-4 text-gray-400 text-xs italic">
        Questions? Contact us at support@mulemeals.edu
      </div>
    </div>
  );
};

export default ThankYouPage;
