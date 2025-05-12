
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Syringe',
      title: 'Лечение зубов',
      description: 'Современное лечение кариеса, пульпита и других заболеваний с использованием качественных материалов',
      link: '/services/treatment'
    },
    {
      icon: 'Teeth',
      title: 'Протезирование',
      description: 'Восстановление зубного ряда с помощью коронок, мостов и съемных протезов из современных материалов',
      link: '/services/prosthetics'
    },
    {
      icon: 'Sparkles',
      title: 'Эстетическая стоматология',
      description: 'Профессиональное отбеливание зубов, установка виниров и реставрация для идеальной улыбки',
      link: '/services/aesthetics'
    },
    {
      icon: 'Ruler',
      title: 'Ортодонтия',
      description: 'Исправление прикуса с помощью брекет-систем, элайнеров и других ортодонтических конструкций',
      link: '/services/orthodontics'
    },
    {
      icon: 'Drill',
      title: 'Имплантация',
      description: 'Установка имплантатов с последующим протезированием для полного восстановления зубного ряда',
      link: '/services/implantation'
    },
    {
      icon: 'Baby',
      title: 'Детская стоматология',
      description: 'Бережное лечение и профилактика стоматологических заболеваний у детей в комфортной обстановке',
      link: '/services/pediatric'
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 text-lg">
            Полный спектр стоматологических услуг для здоровья и красоты вашей улыбки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <Icon name={service.icon} className="h-7 w-7 text-primary" fallback="Stethoscope" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Подробнее
                  <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            Посмотреть все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
