
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1E88E5]/90 to-[#26A69A]/90 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068" 
          alt="Стоматологический кабинет" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Здоровые зубы и красивая улыбка на всю жизнь
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Стоматологическая клиника "Нора-Дент" – команда профессионалов, использующая современное оборудование и передовые технологии для вашего здоровья и красоты
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Записаться на прием
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Узнать стоимость
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold text-white">7+</p>
              <p className="text-white/80">лет работы</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold text-white">5000+</p>
              <p className="text-white/80">довольных клиентов</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold text-white">99%</p>
              <p className="text-white/80">положительных отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
