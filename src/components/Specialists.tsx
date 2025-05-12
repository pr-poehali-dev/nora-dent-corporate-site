
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Specialists = () => {
  const doctors = [
    {
      id: 1,
      name: 'Петров Андрей Викторович',
      position: 'Стоматолог-терапевт',
      experience: '10 лет',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964',
      specialization: 'Лечение кариеса, реставрация, эндодонтия'
    },
    {
      id: 2,
      name: 'Сидорова Мария Александровна',
      position: 'Стоматолог-ортодонт',
      experience: '8 лет',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974',
      specialization: 'Исправление прикуса, установка брекет-систем'
    },
    {
      id: 3,
      name: 'Козлов Дмитрий Иванович',
      position: 'Стоматолог-хирург',
      experience: '12 лет',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070',
      specialization: 'Удаление зубов, имплантация'
    },
    {
      id: 4,
      name: 'Морозова Ольга Павловна',
      position: 'Стоматолог-ортопед',
      experience: '9 лет',
      photo: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=2070',
      specialization: 'Протезирование, установка коронок и виниров'
    },
    {
      id: 5,
      name: 'Новиков Сергей Алексеевич',
      position: 'Детский стоматолог',
      experience: '7 лет',
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070',
      specialization: 'Детская стоматология, профилактика'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши специалисты</h2>
          <p className="text-gray-600 text-lg">
            Команда высококвалифицированных врачей с большим опытом работы поможет решить любые проблемы с зубами
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {doctors.map((doctor) => (
              <CarouselItem key={doctor.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                  <img 
                    src={doctor.photo} 
                    alt={`Доктор ${doctor.name}`} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                    <p className="text-primary font-medium mb-1">{doctor.position}</p>
                    <p className="text-gray-500 text-sm mb-4">Стаж: {doctor.experience}</p>
                    <p className="text-gray-700 mb-6 flex-grow">{doctor.specialization}</p>
                    <Button variant="outline" className="w-full mt-auto">
                      Записаться на прием
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Познакомиться со всеми специалистами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
