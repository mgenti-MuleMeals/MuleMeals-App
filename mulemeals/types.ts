
export enum AppStep {
  Home = 'HOME',
  OrderForm = 'ORDER_FORM',
  Payment = 'PAYMENT',
  ThankYou = 'THANK_YOU'
}

export interface OrderData {
  fullName: string;
  email: string;
  phone: string;
  diningHall: string;
  timePlaced: string;
  spaSides: string;
  deliveryLocation: string;
}

export const INITIAL_ORDER_DATA: OrderData = {
  fullName: '',
  email: '',
  phone: '',
  diningHall: '',
  timePlaced: '',
  spaSides: '',
  deliveryLocation: '',
};

export const DINING_HALLS = [
  'Dana Dining Hall',
  'Roberts Dining Hall',
  'Foss Dining Hall',
  'Spa'
];
