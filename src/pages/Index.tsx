import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} className="text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
              Элитная Недвижимость
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors">Объекты</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-gray-800/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent animate-fade-in">
              Найдите идеальную недвижимость
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Профессиональные услуги по продаже, покупке и аренде элитной недвижимости
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 animate-scale-in">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Введите район или адрес..." 
                    className="h-12 text-lg border-gray-300 focus:border-blue-500"
                  />
                </div>
                <select className="px-4 h-12 border border-gray-300 rounded-lg text-gray-700 focus:border-blue-500">
                  <option>Тип недвижимости</option>
                  <option>Квартира</option>
                  <option>Дом</option>
                  <option>Коммерческая</option>
                </select>
                <select className="px-4 h-12 border border-gray-300 rounded-lg text-gray-700 focus:border-blue-500">
                  <option>Цена от</option>
                  <option>1-3 млн</option>
                  <option>3-5 млн</option>
                  <option>5-10 млн</option>
                  <option>10+ млн</option>
                </select>
                <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Объектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2000+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Успешных сделок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Популярные объекты</h2>
            <p className="text-xl text-gray-600">Эксклюзивная недвижимость премиум-класса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/edbeffb3-5c73-49eb-84d4-b6ad0b9a7ff4.jpg" 
                  alt="Элитный жилой комплекс"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">Новостройка</Badge>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <Icon name="Heart" size={20} className="text-gray-600 hover:text-red-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Элитный жилой комплекс</CardTitle>
                <CardDescription className="flex items-center text-gray-600">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Центральный район
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">от 8,5 млн ₽</span>
                  <span className="text-gray-600">85 м²</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Icon name="Bed" size={16} className="mr-1" />
                    3 комн.
                  </span>
                  <span className="flex items-center">
                    <Icon name="Bath" size={16} className="mr-1" />
                    2 с/у
                  </span>
                  <span className="flex items-center">
                    <Icon name="Car" size={16} className="mr-1" />
                    Паркинг
                  </span>
                </div>
                <Button className="w-full bg-gray-800 hover:bg-gray-900">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="/img/a65ad7da-1067-45c6-b943-342125c59bfd.jpg" 
                  alt="Современный дом"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Готов к заселению</Badge>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <Icon name="Heart" size={20} className="text-gray-600 hover:text-red-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Современный загородный дом</CardTitle>
                <CardDescription className="flex items-center text-gray-600">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Элитный коттеджный поселок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">от 25 млн ₽</span>
                  <span className="text-gray-600">220 м²</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <Icon name="Bed" size={16} className="mr-1" />
                    5 комн.
                  </span>
                  <span className="flex items-center">
                    <Icon name="Bath" size={16} className="mr-1" />
                    3 с/у
                  </span>
                  <span className="flex items-center">
                    <Icon name="Trees" size={16} className="mr-1" />
                    Участок
                  </span>
                </div>
                <Button className="w-full bg-gray-800 hover:bg-gray-900">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Building2" size={48} className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Интерактивная карта</h3>
                    <p className="text-blue-100">Все объекты на карте города</p>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-purple-600">Карта</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Найти на карте</CardTitle>
                <CardDescription>
                  Удобный поиск недвижимости по районам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Map" size={16} className="mr-2" />
                  Открыть карту
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг в сфере недвижимости</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Home" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Продажа недвижимости</h3>
              <p className="text-gray-600 mb-6">Профессиональная помощь в продаже квартир, домов и коммерческой недвижимости</p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Key" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Покупка недвижимости</h3>
              <p className="text-gray-600 mb-6">Поможем найти и купить идеальную недвижимость по выгодной цене</p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="FileText" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Аренда недвижимости</h3>
              <p className="text-gray-600 mb-6">Подбор арендного жилья и коммерческих помещений любого класса</p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Calculator" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Оценка недвижимости</h3>
              <p className="text-gray-600 mb-6">Профессиональная оценка рыночной стоимости любых объектов</p>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Юридическое сопровождение</h3>
              <p className="text-gray-600 mb-6">Полное юридическое сопровождение сделок с недвижимостью</p>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Инвестиции</h3>
              <p className="text-gray-600 mb-6">Консультации по инвестиционным возможностям в недвижимость</p>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                Подробнее
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">О компании</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы - ведущее агентство недвижимости с 15-летним опытом работы на рынке. 
                Наша команда профессионалов поможет вам решить любые вопросы, связанные с недвижимостью.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Специализируемся на элитной недвижимости и предоставляем полный спектр услуг: 
                от поиска и оценки до оформления документов и юридического сопровождения сделок.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Icon name="Award" size={48} className="text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">Лицензированы</div>
                  <div className="text-gray-600 text-sm">Официальная лицензия</div>
                </div>
                <div className="text-center">
                  <Icon name="Users" size={48} className="text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">Команда экспертов</div>
                  <div className="text-gray-600 text-sm">25+ специалистов</div>
                </div>
                <div className="text-center">
                  <Icon name="Clock" size={48} className="text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">24/7 поддержка</div>
                  <div className="text-gray-600 text-sm">Всегда на связи</div>
                </div>
                <div className="text-center">
                  <Icon name="CheckCircle" size={48} className="text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">Гарантия качества</div>
                  <div className="text-gray-600 text-sm">100% надежность</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/edbeffb3-5c73-49eb-84d4-b6ad0b9a7ff4.jpg" 
                alt="Офис компании"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/img/a65ad7da-1067-45c6-b943-342125c59bfd.jpg" 
                alt="Наша команда"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">Готовы помочь вам найти идеальную недвижимость</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Телефон</h3>
              <p className="text-gray-300 mb-2">+7 (495) 123-45-67</p>
              <p className="text-gray-300">+7 (925) 987-65-43</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-300 mb-2">info@realestate.ru</p>
              <p className="text-gray-300">sales@realestate.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Адрес</h3>
              <p className="text-gray-300 mb-2">г. Москва, ул. Тверская, д. 1</p>
              <p className="text-gray-300">БЦ "Элитный", офис 501</p>
            </div>
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white text-center">Оставьте заявку</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400" />
                <Input placeholder="Телефон" className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400" />
                <Input placeholder="Email" className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400" />
                <textarea 
                  placeholder="Сообщение"
                  className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder:text-gray-400 resize-none h-24"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Building2" size={32} className="text-blue-600" />
                <span className="text-xl font-bold">Элитная Недвижимость</span>
              </div>
              <p className="text-gray-400 mb-4">
                Ваш надежный партнер в мире недвижимости. Профессиональный подход к каждому клиенту.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Icon name="Twitter" size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Услуги</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Продажа квартир</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Покупка домов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аренда офисов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оценка недвижимости</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Районы</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Центральный</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресненский</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Хамовники</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Арбат</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Контакты</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@realestate.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Тверская, д. 1
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Пн-Пт: 9:00-21:00
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Элитная Недвижимость. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}