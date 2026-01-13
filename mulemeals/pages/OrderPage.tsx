
import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { AppStep, OrderData, DINING_HALLS } from '../types';

interface OrderPageProps {
  orderData: OrderData;
  setOrderData: React.Dispatch<React.SetStateAction<OrderData>>;
  onNavigate: (step: AppStep) => void;
}

const OrderPage: React.FC<OrderPageProps> = ({ orderData, setOrderData, onNavigate }) => {
  const [errors, setErrors] = useState<Partial<Record<keyof OrderData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrderData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof OrderData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof OrderData];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof OrderData, string>> = {};
    if (!orderData.fullName) newErrors.fullName = "Full name is required";
    if (!orderData.email) newErrors.email = "Email is required";
    if (!orderData.phone) newErrors.phone = "Phone number is required";
    if (!orderData.diningHall) newErrors.diningHall = "Please select a dining hall";
    if (!orderData.timePlaced) newErrors.timePlaced = "Order time is required";
    if (!orderData.deliveryLocation) newErrors.deliveryLocation = "Delivery location is required";
    
    if (orderData.diningHall === 'Spa' && !orderData.spaSides) {
      newErrors.spaSides = "Please list your sides";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNavigate(AppStep.Payment);
    }
  };

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-gray-900">Order Information</h2>
        <p className="text-gray-500">Fill in the details for your delivery.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="space-y-0.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-blue-600 mb-3 px-1">Contact Details</h3>
          <Input 
            label="Full Name" 
            name="fullName" 
            value={orderData.fullName} 
            onChange={handleChange} 
            placeholder="John Doe"
            error={errors.fullName}
          />
          <Input 
            label="Email Address" 
            name="email" 
            type="email" 
            value={orderData.email} 
            onChange={handleChange} 
            placeholder="jdoe@colby.edu"
            error={errors.email}
          />
          <Input 
            label="Phone Number" 
            name="phone" 
            type="tel" 
            value={orderData.phone} 
            onChange={handleChange} 
            placeholder="555-0123"
            error={errors.phone}
          />
        </div>

        <div className="pt-4 space-y-0.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-blue-600 mb-3 px-1">Order Details</h3>
          <Input 
            isSelect 
            label="Dining Hall" 
            name="diningHall" 
            value={orderData.diningHall} 
            onChange={handleChange} 
            options={DINING_HALLS}
            error={errors.diningHall}
          />
          
          {orderData.diningHall === 'Spa' && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <Input 
                label="What sides did you choose?" 
                name="spaSides" 
                value={orderData.spaSides} 
                onChange={handleChange} 
                placeholder="Fries, extra sauce, etc."
                error={errors.spaSides}
              />
            </div>
          )}

          <Input 
            label="Time Order Was Placed" 
            name="timePlaced" 
            type="time" 
            value={orderData.timePlaced} 
            onChange={handleChange}
            error={errors.timePlaced}
          />
          <Input 
            label="Delivery Location" 
            name="deliveryLocation" 
            value={orderData.deliveryLocation} 
            onChange={handleChange} 
            placeholder="Dorm name & room number"
            error={errors.deliveryLocation}
          />
        </div>

        <div className="pt-8">
          <Button type="submit">Next</Button>
          <button 
            type="button" 
            onClick={() => onNavigate(AppStep.Home)}
            className="w-full mt-4 text-gray-400 font-semibold text-sm hover:text-gray-600 transition-colors"
          >
            Cancel Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
