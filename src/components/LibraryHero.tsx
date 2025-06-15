import Icon from "@/components/ui/icon";

const LibraryHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Учебная библиотека
            <span className="block text-blue-600">
              Педагогического института
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Центр информационных ресурсов и академической поддержки студентов и
            преподавателей СВФУ
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по каталогу библиотеки..."
                className="w-full px-4 py-3 pl-12 pr-16 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                Найти
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">15,000+</div>
              <div className="text-gray-600">Книг в фонде</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2,500+</div>
              <div className="text-gray-600">Читателей</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900">12 часов</div>
              <div className="text-gray-600">Ежедневно</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryHero;
