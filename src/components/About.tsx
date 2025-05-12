
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const About = () => {
  const highlights = [
    {
      icon: 'Smile',
      title: '5000+',
      description: 'счастливых пациентов'
    },
    {
      icon: 'Calendar',
      title: '7+ лет',
      description: 'успешной работы'
    },
    {
      icon: 'Users',
      title: '15+',
      description: 'профессиональных врачей'
    },
    {
      icon: 'Star',
      title: '4.9/5',
      description: 'средняя оценка клиники'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О клинике "Нора-Дент"</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Стоматологическая клиника "Нора-Дент" – это современный медицинский центр, оснащенный передовым оборудованием для диагностики и лечения заболеваний полости рта.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Мы начали свою работу в 2016 году и за это время завоевали доверие тысяч пациентов благодаря высокому качеству оказываемых услуг, профессионализму врачей и индивидуальному подходу к каждому клиенту.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Наша философия – делать стоматологию доступной и безболезненной, сохраняя здоровье зубов наших пациентов на долгие годы. Мы постоянно совершенствуемся, внедряя инновационные методики лечения и используя только сертифицированные материалы.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше о клинике
              </Button>
              <Button variant="outline">
                <Icon name="GalleryVerticalEnd" className="mr-2 h-4 w-4" />
                Наши сертификаты
              </Button>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-md h-64">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068" 
                  alt="Интерьер клиники Нора-Дент" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-64 translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070" 
                  alt="Оборудование клиники Нора-Дент" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-64 translate-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa8f0?q=80&w=1974" 
                  alt="Врачи клиники Нора-Дент" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-64 -translate-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974" 
                  alt="Лечение в клинике Нора-Дент" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Icon name={item.icon} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
