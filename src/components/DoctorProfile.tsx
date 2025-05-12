
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DoctorProfile = () => {
  const achievements = [
    'Более 15 лет клинической практики',
    'Кандидат медицинских наук',
    'Член Стоматологической Ассоциации России',
    'Участник международных конференций и семинаров',
    'Автор научных публикаций по современной стоматологии'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#26A69A]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1E88E5]/20 rounded-full z-0"></div>
            
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070" 
                alt="Главный врач клиники Нора-Дент" 
                className="rounded-2xl shadow-lg w-full object-cover max-h-[600px]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Главный врач клиники</h2>
            <h3 className="text-2xl text-primary font-semibold mb-6">Иванова Елена Сергеевна</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Елена Сергеевна – высококвалифицированный специалист с обширным опытом работы в стоматологии. 
              Её подход основан на сочетании современных методик лечения и индивидуального подхода к каждому пациенту. 
              Под её руководством клиника "Нора-Дент" стала одним из ведущих стоматологических центров города.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Достижения и квалификация:</h4>
              <ul className="space-y-2">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircle" className="h-5 w-5 text-[#26A69A] mr-2 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Записаться на консультацию
              </Button>
              <Button variant="outline">
                <Icon name="File" className="mr-2 h-4 w-4" />
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
