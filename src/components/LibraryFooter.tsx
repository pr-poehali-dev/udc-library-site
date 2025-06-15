import Icon from "@/components/ui/icon";

const LibraryFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Контактная информация
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">г. Якутск, ул. Белинского, 58</p>
                  <p className="text-gray-300">корп. 1, 1 этаж</p>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">+7 (4112) 49-68-88</p>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">library.pi@s-vfu.ru</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Пн-Чт:</span>
                <span className="text-white">9:00-18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Пятница:</span>
                <span className="text-white">9:00-17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Сб, Вс:</span>
                <span className="text-white">выходной</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <Icon name="AlertCircle" className="h-4 w-4 inline mr-2" />
                Обеденный перерыв: 13:00-14:00
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.s-vfu.ru"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                  Сайт СВФУ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                  Электронный каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                  ЭБС Юрайт
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                  Правила пользования
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Абонемент
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Читальный зал
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Межбиблиотечный абонемент
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Консультации
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Icon name="BookOpen" className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Учебная библиотека ПИ СВФУ</p>
                <p className="text-sm text-gray-400">
                  Центр знаний и образования
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Северо-Восточный федеральный университет
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LibraryFooter;
