
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const services = [
    { name: 'Лечение зубов', href: '/services/treatment' },
    { name: 'Протезирование', href: '/services/prosthetics' },
    { name: 'Имплантация', href: '/services/implantation' },
    { name: 'Ортодонтия', href: '/services/orthodontics' },
    { name: 'Детская стоматология', href: '/services/pediatric' },
    { name: 'Эстетическая стоматология', href: '/services/aesthetic' }
  ];

  const company = [
    { name: 'О клинике', href: '/about' },
    { name: 'Врачи', href: '/doctors' },
    { name: 'Акции', href: '/promotions' },
    { name: 'Цены', href: '/prices' },
    { name: 'Статьи', href: '/blog' },
    { name: 'Отзывы', href: '/reviews' }
  ];

  const legal = [
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Лицензии', href: '/licenses' },
    { name: 'Правовая информация', href: '/legal' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                НОРА-ДЕНТ
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Стоматологическая клиника для всей семьи. Качественное лечение, современное оборудование, опытные врачи.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <span className="text-gray-400">г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href="tel:+78001234567" className="text-gray-400 hover:text-white transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href="mailto:info@noradent.ru" className="text-gray-400 hover:text-white transition-colors">
                  info@noradent.ru
                </a>
              </li>
              <li className="flex items-start">
                <Icon name="Clock" className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <div className="text-gray-400">
                  <p>Пн-Пт: 9:00 - 21:00</p>
                  <p>Сб-Вс: 10:00 - 18:00</p>
                </div>
              </li>
            </ul>
            
            <Button className="mt-6 bg-primary hover:bg-primary/90">
              Записаться на прием
            </Button>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Стоматологическая клиника "Нора-Дент". Все права защищены.
          </div>
          <div className="flex flex-wrap gap-4">
            {legal.map((item, index) => (
              <Link 
                key={index} 
                to={item.href} 
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
