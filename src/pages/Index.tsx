
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DoctorProfile from '@/components/DoctorProfile';
import Specialists from '@/components/Specialists';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import PopularCategories from '@/components/PopularCategories';
import Footer from '@/components/Footer';

// Обновляем мета-данные для SEO
document.title = "Нора-Дент | Стоматологическая клиника в Москве";
// Для полноценного SEO нужно бы использовать helmet или другие решения для работы с метатегами

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <DoctorProfile />
        <Specialists />
        <Services />
        <Gallery />
        <About />
        <Reviews />
        <ContactForm />
        <Map />
        <PopularCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
