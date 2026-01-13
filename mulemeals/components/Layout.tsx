
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white shadow-sm">
      <header className="py-6 px-4 flex flex-col items-center">
        <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-2 shadow-lg">
          <i className="fa-solid fa-mule text-3xl"></i>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-blue-900">MuleMeals</h1>
      </header>
      <main className="flex-1 px-6 pb-12 overflow-y-auto">
        {children}
      </main>
      <footer className="py-6 px-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MuleMeals Delivery
      </footer>
    </div>
  );
};

export default Layout;
