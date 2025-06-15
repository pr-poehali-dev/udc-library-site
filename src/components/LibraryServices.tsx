import Icon from "@/components/ui/icon";

const LibraryServices = () => {
  const services = [
    {
      icon: "BookCheck",
      title: "Абонемент",
      description:
        "Выдача учебной и научной литературы на дом для студентов и преподавателей",
    },
    {
      icon: "Users",
      title: "Читальный зал",
      description:
        "Комфортные места для работы с литературой, групповые и индивидуальные зоны",
    },
    {
      icon: "Search",
      title: "Справочно-библиографическое обслуживание",
      description:
        "Помощь в поиске информации, составление библиографических списков",
    },
    {
      icon: "Monitor",
      title: "Электронные ресурсы",
      description:
        "Доступ к электронным библиотекам, базам данных и онлайн-ресурсам",
    },
    {
      icon: "Printer",
      title: "Ксерокопирование",
      description:
        "Услуги копирования и сканирования документов и учебных материалов",
    },
    {
      icon: "GraduationCap",
      title: "Методическая помощь",
      description: "Консультации по оформлению курсовых и дипломных работ",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр библиотечных услуг для поддержки учебного процесса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Working Hours */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Режим работы
            </h3>
            <p className="text-gray-600">Мы работаем для вашего удобства</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Calendar" className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">
                  Понедельник - Пятница
                </h4>
              </div>
              <p className="text-2xl font-bold text-blue-600">8:30 - 20:30</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Calendar" className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900">Суббота</h4>
              </div>
              <p className="text-2xl font-bold text-blue-600">9:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryServices;
