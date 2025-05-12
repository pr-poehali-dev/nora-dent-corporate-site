
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const NavMenu = () => {
  const menuItems = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Специалисты', href: '/specialists' },
    { name: 'О клинике', href: '/about' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <>
      {/* Десктопное меню */}
      <nav className="hidden md:flex items-center space-x-6">
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.href}
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            {item.name}
          </Link>
        ))}
        <Button>Записаться на прием</Button>
      </nav>

      {/* Мобильное меню */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Icon name="Menu" className="h-6 w-6" />
            <span className="sr-only">Меню</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] p-0">
          <div className="flex flex-col p-6">
            <div className="mb-8 mt-4">
              <h3 className="text-lg font-semibold mb-4">Меню</h3>
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    className="text-gray-700 hover:text-primary py-2 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Button className="w-full mt-4">Записаться на прием</Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavMenu;
