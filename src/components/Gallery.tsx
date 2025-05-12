
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'implantation', name: 'Имплантация' },
    { id: 'veneers', name: 'Виниры' },
    { id: 'whitening', name: 'Отбеливание' },
    { id: 'orthodontics', name: 'Ортодонтия' }
  ];

  const works = [
    {
      id: 1,
      category: 'veneers',
      title: 'Установка виниров',
      before: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974',
      after: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=2009',
      description: 'Установка 6 керамических виниров на фронтальную группу зубов'
    },
    {
      id: 2,
      category: 'implantation',
      title: 'Имплантация передних зубов',
      before: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935',
      after: 'https://images.unsplash.com/photo-1545048554-143d1370f7eb?q=80&w=1965',
      description: 'Восстановление 3 передних зубов с помощью имплантатов Straumann'
    },
    {
      id: 3,
      category: 'whitening',
      title: 'Профессиональное отбеливание',
      before: 'https://images.unsplash.com/photo-1607548681397-5eb9f1e7a091?q=80&w=1965',
      after: 'https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=2070',
      description: 'Отбеливание зубов по технологии Zoom на 8-10 тонов'
    },
    {
      id: 4,
      category: 'orthodontics',
      title: 'Исправление прикуса',
      before: 'https://images.unsplash.com/photo-1579160055556-250e053d35ec?q=80&w=2070',
      after: 'https://images.unsplash.com/photo-1613758235402-745466bb7ebe?q=80&w=1964',
      description: 'Коррекция прикуса с помощью керамических брекетов'
    },
    {
      id: 5,
      category: 'implantation',
      title: 'Полная имплантация',
      before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974',
      after: 'https://images.unsplash.com/photo-1581584541483-f38e2a2410d8?q=80&w=1974',
      description: 'Восстановление полного зубного ряда с помощью системы "All-on-4"'
    },
    {
      id: 6,
      category: 'veneers',
      title: 'Композитные виниры',
      before: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1974',
      after: 'https://images.unsplash.com/photo-1595952387004-27bd633de3d8?q=80&w=1974',
      description: 'Установка композитных виниров для коррекции формы и цвета зубов'
    }
  ];

  // Фильтруем работы для каждой категории
  const getWorksByCategory = (categoryId) => {
    if (categoryId === 'all') {
      return works;
    }
    return works.filter(work => work.category === categoryId);
  };

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры наших работ</h2>
          <p className="text-gray-600 text-lg">
            Реальные результаты наших пациентов до и после лечения
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getWorksByCategory(category.id).map(work => (
                  <div key={work.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="grid grid-cols-2 gap-2 p-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">До</p>
                        <AspectRatio ratio={3/4} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={work.before} 
                            alt={`До - ${work.title}`} 
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">После</p>
                        <AspectRatio ratio={3/4} className="bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={work.after} 
                            alt={`После - ${work.title}`} 
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                      <p className="text-gray-600 text-sm">{work.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button>
            Смотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
