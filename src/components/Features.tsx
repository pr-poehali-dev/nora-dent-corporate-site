
import React from 'react';
import Icon from '@/components/ui/icon';

const Features = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Предоставляем письменную гарантию на все виды лечения и протезирования'
    },
    {
      icon: 'Stethoscope',
      title: 'Опытные врачи',
      description: 'Наши специалисты имеют многолетний опыт работы и постоянно совершенствуют свои навыки'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Современное оборудование',
      description: 'Используем только сертифицированное оборудование и материалы от ведущих производителей'
    },
    {
      icon: 'Clock',
      title: 'Без очередей',
      description: 'Прием строго по записи, ценим ваше время и не заставляем ждать'
    },
    {
      icon: 'Banknote',
      title: 'Доступные цены',
      description: 'Честные и прозрачные цены без скрытых платежей и доплат'
    },
    {
      icon: 'Truck',
      title: 'Удобное расположение',
      description: 'Клиника находится в 5 минутах от метро с удобной транспортной доступностью'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему пациенты выбирают нас</h2>
          <p className="text-gray-600 text-lg">
            Мы делаем всё, чтобы обеспечить максимальный комфорт и качество лечения для каждого пациента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-5">
                <Icon name={feature.icon} className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
