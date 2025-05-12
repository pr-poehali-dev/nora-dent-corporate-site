
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PopularCategories = () => {
  const categories = [
    {
      title: 'Лечение зубов',
      icon: 'Stethoscope',
      services: ['Лечение кариеса', 'Лечение пульпита', 'Лечение периодонтита', 'Реставрация зубов'],
      link: '/services/treatment'
    },
    {
      title: 'Имплантация',
      icon: 'Bone',
      services: ['Одноэтапная имплантация', 'Двухэтапная имплантация', 'Имплантация All-on-4', 'Синус-лифтинг'],
      link: '/services/implantation'
    },
    {
      title: 'Эстетическая стоматология',
      icon: 'Sparkles',
      services: ['Профессиональное отбеливание', 'Установка виниров', 'Установка люминиров', 'Художественная реставрация'],
      link: '/services/aesthetic'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные категории услуг</h2>
          <p className="text-gray-600 text-lg">
            Наиболее востребованные услуги нашей клиники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 mb-6 bg-primary/10 rounded-full">
                <Icon name={category.icon} className="h-8 w-8 text-primary" fallback="Stethoscope" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              
              <ul className="space-y-3 mb-6">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-center">
                    <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">
                Подробнее
                <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
