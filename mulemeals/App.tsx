
import React, { useState } from 'react';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';
import { AppStep, OrderData, INITIAL_ORDER_DATA } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.Home);
  const [orderData, setOrderData] = useState<OrderData>(INITIAL_ORDER_DATA);

  const handleNavigate = (nextStep: AppStep) => {
    // Scroll to top on navigation for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(nextStep);
  };

  const handleReset = () => {
    setOrderData(INITIAL_ORDER_DATA);
    setStep(AppStep.Home);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStep = () => {
    switch (step) {
      case AppStep.Home:
        return <LandingPage onNavigate={handleNavigate} />;
      case AppStep.OrderForm:
        return (
          <OrderPage 
            orderData={orderData} 
            setOrderData={setOrderData} 
            onNavigate={handleNavigate} 
          />
        );
      case AppStep.Payment:
        return <PaymentPage onNavigate={handleNavigate} />;
      case AppStep.ThankYou:
        return <ThankYouPage onReset={handleReset} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout>
      {renderStep()}
    </Layout>
  );
};

export default App;
