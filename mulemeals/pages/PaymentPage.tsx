
import React from 'react';
import Button from '../components/Button';
import { AppStep } from '../types';

interface PaymentPageProps {
  onNavigate: (step: AppStep) => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in slide-in-from-right duration-300 text-center space-y-8 pt-4">
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 shadow-inner">
        <i className="fa-brands fa-vimeo-v text-4xl"></i>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900 leading-tight">
          Please send your Venmo payment to <span className="text-blue-600">@MuleMeals</span>
        </h2>
        <p className="text-gray-500 text-lg px-2">
          Your delivery process will begin as soon as we receive your payment.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl text-left flex gap-4 items-start shadow-sm">
        <i className="fa-solid fa-circle-info text-yellow-600 mt-1"></i>
        <p className="text-sm text-yellow-800 leading-relaxed font-medium">
          Note: Payment covers the delivery fee and cost of items. Ensure your Venmo note includes your full name.
        </p>
      </div>

      <div className="pt-8">
        <Button onClick={() => onNavigate(AppStep.ThankYou)}>
          Finish Order
        </Button>
        <button 
          onClick={() => onNavigate(AppStep.OrderForm)}
          className="w-full mt-4 text-gray-400 font-semibold text-sm hover:text-gray-600 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
