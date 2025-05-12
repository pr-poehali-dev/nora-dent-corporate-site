
import React from 'react';

const Map = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-md h-[400px] md:h-[500px]">
          {/* Здесь обычно используется iframe с Google или Яндекс Картами */}
          {/* Для демонстрации используем заглушку */}
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">Карта расположения клиники</h3>
              <p className="text-gray-600 mb-4">
                г. Москва, ул. Примерная, д. 123<br />
                5 минут от м. Примерная
              </p>
              <p className="text-sm text-gray-500">
                (Здесь будет интегрирована интерактивная карта с Яндекс.Карт или Google Maps)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
