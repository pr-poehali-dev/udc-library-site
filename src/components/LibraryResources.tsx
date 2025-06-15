import Icon from "@/components/ui/icon";

const LibraryResources = () => {
  const resources = [
    {
      icon: "BookOpen",
      title: "Педагогическая литература",
      description: "Учебники по педагогике, психологии, методике преподавания",
      count: "5,500+ изданий",
    },
    {
      icon: "ScrollText",
      title: "Методические материалы",
      description:
        "Методические разработки, программы, пособия преподавателей ПИ",
      count: "800+ материалов",
    },
    {
      icon: "Newspaper",
      title: "Периодические издания",
      description: "Педагогические журналы, вестники образования",
      count: "35+ наименований",
    },
    {
      icon: "FileText",
      title: "Диссертации и авторефераты",
      description: "Выпускные квалификационные работы студентов ПИ",
      count: "250+ работ",
    },
  ];

  const databases = [
    {
      name: "ЭБС Юрайт",
      description: "Учебники по педагогике, психологии, методике",
      icon: "Database",
    },
    {
      name: "Педагогическая библиотека",
      description: "Специализированные ресурсы для педагогов",
      icon: "GraduationCap",
    },
    {
      name: "КонсультантПлюс",
      description: "Образовательное законодательство РФ",
      icon: "Scale",
    },
    {
      name: "Электронный каталог СВФУ",
      description: "Поиск по всем фондам университета",
      icon: "BookMarked",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ресурсы библиотеки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Богатый фонд печатных и электронных ресурсов для учебы и
            исследований
          </p>
        </div>

        {/* Print Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Печатный фонд
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={resource.icon} className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {resource.description}
                </p>
                <div className="text-purple-600 font-semibold text-sm">
                  {resource.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Electronic Resources */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Электронные ресурсы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {databases.map((db, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name={db.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {db.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{db.description}</p>
                    <div className="flex items-center text-green-600 font-medium">
                      <span>Перейти к ресурсу</span>
                      <Icon name="ExternalLink" className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Нужна помощь в поиске?</h3>
          <p className="text-blue-100 mb-6">
            Наши библиотекари помогут найти необходимые материалы и научат
            работать с электронными ресурсами
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Задать вопрос библиотекарю
          </button>
        </div>
      </div>
    </section>
  );
};

export default LibraryResources;
