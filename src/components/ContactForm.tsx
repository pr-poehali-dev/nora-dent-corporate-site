
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Связаться с нами</h2>
            <p className="text-gray-600 text-lg mb-8">
              Остались вопросы или хотите записаться на прием? Заполните форму, и мы свяжемся с вами в ближайшее время.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Имя" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Интересующая услуга</Label>
                <Input id="service" placeholder="Например: Лечение зубов, Имплантация..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Ваше сообщение или вопрос..." className="min-h-[120px]" />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" required />
                <Label htmlFor="privacy" className="text-sm leading-tight">
                  Я согласен(на) с <a href="/privacy" className="text-primary hover:underline">политикой конфиденциальности</a> и даю согласие на обработку персональных данных
                </Label>
              </div>
              
              <Button type="submit" className="w-full md:w-auto" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-gray-600">5 минут от м. Примерная</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Часы работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Телефон</p>
                    <a href="tel:+78001234567" className="text-primary hover:underline">+7 (800) 123-45-67</a>
                    <p className="text-gray-600 text-sm">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@noradent.ru" className="text-primary hover:underline">info@noradent.ru</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium mb-4">Мы в социальных сетях</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Icon name="Instagram" className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Icon name="Facebook" className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Icon name="Twitter" className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                    <Icon name="Youtube" className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
