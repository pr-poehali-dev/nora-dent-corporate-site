
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Анна К.',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864',
      rating: 5,
      date: '15.04.2024',
      text: 'Отличная клиника! Делала здесь профессиональную чистку зубов и лечила кариес. Врач Мария Александровна очень внимательная и аккуратная. Процедуры прошли безболезненно, результатом довольна.',
      source: 'Яндекс Карты'
    },
    {
      id: 2,
      name: 'Дмитрий В.',
      photo: null,
      rating: 5,
      date: '02.04.2024',
      text: 'Обратился в клинику по рекомендации друзей для установки имплантата. Хирург Козлов Д.И. профессионально выполнил свою работу. Процедура прошла быстро и совершенно безболезненно. Очень доволен результатом!',
      source: 'Яндекс Карты'
    },
    {
      id: 3,
      name: 'Елена П.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961',
      rating: 4,
      date: '25.03.2024',
      text: 'Посещала клинику для исправления прикуса. Врач-ортодонт подобрала мне элайнеры, очень удобные и практически незаметные. Ношу уже 3 месяца, результат превосходит ожидания! Клиника современная, персонал вежливый.',
      source: 'Google Отзывы'
    },
    {
      id: 4,
      name: 'Игорь С.',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787',
      rating: 5,
      date: '18.03.2024',
      text: 'Лечу зубы только в Нора-Дент уже несколько лет. Нравится подход врачей и качество работы. Недавно делал профессиональное отбеливание, результат потрясающий! Теперь улыбаюсь с удовольствием. Рекомендую!',
      source: 'Яндекс Карты'
    },
    {
      id: 5,
      name: 'Ольга М.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788',
      rating: 5,
      date: '10.03.2024',
      text: 'Приводила своего сына (6 лет) к детскому стоматологу. Очень боялась, что будет плакать и капризничать, но врач Сергей Алексеевич нашел подход к ребенку. Лечение прошло спокойно, сын даже спрашивает, когда снова пойдем к "доброму доктору".',
      source: 'Google Отзывы'
    },
    {
      id: 6,
      name: 'Александр К.',
      photo: null,
      rating: 4,
      date: '01.03.2024',
      text: 'Делал протезирование в клинике Нора-Дент. Врач Морозова О.П. профессионально провела все необходимые процедуры. Протез сидит идеально, не чувствую дискомфорта. Единственное - немного пришлось подождать готовности протеза.',
      source: 'Яндекс Карты'
    }
  ];

  // Функция для отображения звездочек рейтинга
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon 
          key={i} 
          name="Star" 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы пациентов</h2>
          <p className="text-gray-600 text-lg">
            Мнения наших пациентов говорят о нас лучше любой рекламы
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
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          {review.photo ? (
                            <AvatarImage src={review.photo} alt={review.name} />
                          ) : null}
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {review.name.split(' ')[0][0]}{review.name.split(' ')[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <div className="flex mt-1">
                            {renderRating(review.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm">{review.date}</div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{review.text}</p>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <Icon name="MapPin" className="h-4 w-4 mr-1" />
                      <span>Источник: {review.source}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>

        <div className="text-center mt-12">
          <Button variant="outline" className="mr-4">
            <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
            Яндекс Карты
          </Button>
          <Button variant="outline">
            <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
            Google Отзывы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
