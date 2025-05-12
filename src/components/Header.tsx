
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import NavMenu from '@/components/NavMenu';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              НОРА-ДЕНТ
            </span>
          </Link>
          
          {/* Контактная информация */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+78001234567" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
              <Icon name="Phone" className="h-5 w-5 text-primary" />
              <span className="font-medium">+7 (800) 123-45-67</span>
            </a>
            <a href="https://wa.me/78001234567" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
              <Icon name="MessageSquare" className="h-5 w-5 text-green-500" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
          
          {/* Меню навигации */}
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
