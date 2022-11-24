// US
const usFirstNames = ["Emma", "Olivia", "Noah", "Liam", "Sophia", "Mason", "Ava", "Jacob", "William", "Isabella", "Ethan", "Mia", "James", "Alexander", "Michael", "Benjamin", "Elijah", "Daniel", "Aiden", "Logan", "Matthew", "Abigail", "Lucas", "Jackson", "Emily", "David", "Oliver", "Jayden", "Joseph", "Charlotte", "Gabriel", "Samuel", "Carter", "Anthony", "John", "Harper", "Dylan", "Luke", "Henry", "Madison", "Andrew", "Isaac", "Amelia", "Christopher", "Joshua", "Elizabeth", "Sofia", "Wyatt", "Sebastian", "Owen", "Evelyn", "Avery", "Caleb", "Nathan", "Ryan", "Jack", "Hunter", "Levi", "Christian", "Jaxon", "Julian", "Landon", "Chloe", "Ella", "Grayson", "Grace", "Jonathan", "Victoria", "Isaiah", "Aubrey", "Charles", "Thomas", "Aaron", "Scarlett", "EliZoey", "Connor", "Jeremiah", "Cameron", "Addison", "Lily", "Josiah", "Lillian", "Adrian", "Natalie", "Hannah", "Aria", "Layla", "Colton", "Brooklyn", "Jordan", "Brayden", "Nicholas", "Robert", "Angel", "Alexa", "HudsonZoe", "Lincoln", "Penelope", "Jameson", "George"];

const usLastNames = ["Ben", "Charley", "Paul", "Edgar", "Isaac", "Otto", "Luther", "Lawrence", "Ira", "Patrick", "Guy", "Oliver", "Theodore", "Hugh", "Clyde", "Alexander", "August", "Floyd", "Homer", "Jack", "Leonard", "Horace", "Marion", "Philip", "Allen", "Archie", "Stephen", "Chester", "Willis", "Raymond", "Rufus", "Warren", "Jessie", "Milton", "Alex", "Leo", "Julius", "Ray", "Sidney", "Bernard", "Dan", "Jerry", "Calvin", "Perry", "Dave", "Anthony", "Eddie", "Amos", "Dennis", "Clifford", "Leroy", "Wesley", "Alonzo", "Garfield", "Franklin", "Emil", "Leon", "Nathan", "Harold", "Matthew", "Levi", "Moses", "Everett", "Lester", "Winfield", "Adam", "Lloyd", "Mack", "Fredrick", "Jay", "Jess", "Melvin", "Noah", "Aaron", "Alvin", "Norman", "Gilbert", "Elijah", "Victor", "Gus", "Nelson", "Jasper", "Silas", "Jake", "Christopher", "Mike", "Percy", "Adolph", "Maurice", "Cornelius", "Felix", "Reuben", "Wallace", "Claud", "Roscoe", "Sylvester", "Earnest", "Hiram", "Otis", "Simon"];

const usMiddlenames = ["Willard", "Irvin", "Mark", "Jose", "Wilbur", "Abraham", "Virgil", "Clinton", "Elbert", "Leslie", "Marshall", "Owen", "Wiley", "Anton", "Morris", "Manuel", "Phillip", "Augustus", "Emmett", "Eli", "Nicholas", "Wilson", "Alva", "Harley", "Newton", "Timothy", "Marvin", "Ross", "Curtis", "Edmund", "Jeff", "Elias", "Harrison", "Stanley", "Columbus", "Lon", "Ora", "Ollie", "Pearl", "Russell", "Solomon", "Arch", "Asa", "Clayton", "Enoch", "Irving", "Mathew", "Nathaniel", "Scott", "Hubert", "Lemuel", "Andy", "Ellis", "Emanuel", "Joshua", "Millard", "Vernon", "Wade", "Cyrus", "Miles", "Rudolph", "Sherman", "Austin", "Bill", "Chas", "Lonnie", "Monroe", "Byron", "Edd", "Emery", "Grant", "Jerome", "Max", "Mose", "Steve", "Gordon", "Abe", "Pete", "Chris", "Clark", "Gustave", "Orville", "Lorenzo", "Bruce", "Marcus", "Preston", "Bob", "Dock", "Donald", "Jackson", "Cecil", "Barney", "Delbert", "Edmond", "Anderson", "Christian", "Glenn", "Jefferson", "Luke", "Neal"];

const usCities = ["Austin", "Denver", "Colorado Springs", "Fayetteville", "Des Moines", "Minneapolis-St. Paul", "San-Francisco", "Portland", "Seattle", "Raleigh & Durham", "Huntsville", "Madison", "Grand Rapids", "San-Jose", "Nashville", "Asheville", "Boise", "Sarasota", "Washington D.C.", "Charlotte", "Dallas-Fort Worth", "Greenville", "Portland", "Salt Lake City", "Melbourne", "Phoenix", "Boston", "Albany", "Lexington-Fayette", "Houston", "Winston-Salem", "Omaha", "Reno", "San Antonio", "Fort Myers", "San-Diego", "Pensacola", "Indianapolis", "Cincinnati", "Fort Wayne", "Lansing", "Jacksonville", "Manchester", "Harrisburg", "Charleston", "Knoxville", "Hartford", "Lancaster", "Kansas City", "Pittsburgh", "Columbus", "Buffalo", "Richmond", "Syracuse", "Chattanooga", "Tampa", "Atlanta", "Rochester", "Lakeland", "Honolulu", "Milwaukee", "Worcester", "Orlando", "Louisville", "Spokane", "Greensboro", "Columbia", "Oklahoma City", "Dayton", "Anchorage", "Las-Vegas", "Augusta", "Santa-Barbara", "Santa-Rosa", "Myrtle-Beach", "Tucson", "Salem", "Port St. Lucie", "Wichita", "Springfield", "St. Louis", "Sacramento", "Tulsa", "Reading", "Cleveland", "Springfield", "York", "Little Rock", "Birmingham", "New-York City", "Providence", "Detroit", "Allentown", "Toledo", "New-Haven", "Lafayette", "Youngstown", "Scranton", "Daytona Beach", "Baltimore"];

const usStreets = ["Damen", "State", "Lsd grand av", "35th", "Kostner", "Devon", "Vincennes", "Woodlawn", "Lsd columbus dr", "Lawrence", "Irving park", "Stevenson", "Irving park", "Garfield", "Kedzie", "Cicero", "Kennedy", "Eisenhower", "Harrison", "51st", "Dan ryan express", "Devon", "Chicago skyway", "Belmont", "California", "99th", "Pershing", "Peterson", "26th", "99th", "103rd", "Devon", "Belmont", "Bishop ford", "Western", "Ogden", "Kedzie", "119th", "California", "Kennedy", "Devon", "Archer", "Central", "Dan ryan 43rd st", "35th", "Kostner", "Kennedy pulaski rd", "Milwaukee", "Fullerton", "Cicero", "59th", "16th", "Caldwell", "Damen", "Central park", "Ewing", "Madison", "Halsted", "Diversey", "Van buren", "Michigan", "87th", "51st", "Cottage grove", "Caldwell", "Eisenhower western av", "Dan ryan", "Western", "Dan ryan express", "North", "Central park", "87th", "Kedzie", "47th", "Oak park", "State", "Kostner", "Cumberland", "Cullerton", "111th", "I55 pulaski rd", "Western", "Diversey", "Austin", "51st", "Laramie", "79th", "Racine", "103rd", "Laramie", "75th", "75th", "Armitage", "111th", "Lincoln", "Dan ryan express", "59th", "Chicago", "111th", "Racine"];

const usAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



// RU 
const ruFirstNames = ["Александр","Дмитрий","Максим","Сергей","Андрей","Алексей","Артём","Илья","Кирилл","Михаил","Никита","Матвей","Роман","Егор","Арсений","Иван","Денис","Евгений","Даниил","Тимофей","Владислав","Игорь","Владимир","Павел","Руслан","Марк","Константин","Тимур","Олег","Ярослав","Антон","Николай","Глеб","Данил","Савелий","Вадим","Степан","Юрий","Богдан","Артур","Семен","Макар","Лев","Виктор","Елисей","Виталий","Вячеслав","Захар","Мирон","Дамир","Георгий","Давид","Платон","Анатолий","Григорий","Демид","Данила","Станислав","Василий","Федор","Родион","Леонид","Одиссей","Валерий","Святослав","Борис","Эдуард","Марат","Герман","Даниэль","Петр","Амир","Всеволод","Мирослав","Гордей","Артемий","Эмиль","Назар","Савва","Ян","Рустам","Игнат","Влад","Альберт","Тамерлан","Айдар","Роберт","Адель","Марсель","Ильдар","Самир","Тихон","Рамиль","Ринат","Радмир","Филипп","Арсен","Ростислав","Святогор","Яромир"];

const ruLastNames = ["Смирнов","Иванов","Кузнецов","Соколов","Попов","Лебедев","Козлов","Новиков","Морозов","Петров","Волков","Соловьёв","Васильев","Зайцев","Павлов","Семёнов","Голубев","Виноградов","Богданов","Воробьёв","Фёдоров","Михайлов","Беляев","Тарасов","Белов","Комаров","Орлов","Киселёв","Макаров","Андреев","Ковалёв","Ильин","Гусев","Титов","Кузьмин","Кудрявцев","Баранов","Куликов","Алексеев","Степанов","Яковлев","Сорокин","Сергеев","Романов","Захаров","Борисов","Королёв","Герасимов","Пономарёв","Григорьев","Лазарев","Медведев","Ершов","Никитин","Соболев","Рябов","Поляков","Цветков","Данилов","Жуков","Фролов","Журавлёв","Николаев","Крылов","Максимов","Сидоров","Осипов","Белоусов","Федотов","Дорофеев","Егоров","Матвеев","Бобров","Дмитриев","Калинин","Анисимов","Петухов","Антонов","Тимофеев","Никифоров","Веселов","Филиппов","Марков","Большаков","Суханов","Миронов","Ширяев","Александров","Коновалов","Шестаков","Казаков","Ефимов","Денисов","Громов","Фомин","Давыдов","Мельников","Щербаков","Блинов","Колесников"];

const ruMiddlNames = ["Александрович","Алексеевич","Анатольевич","Андреевич","Антонович","Аркадьевич","Артемович","Бедросович","Богданович","Борисович","Валентинович","Валерьевич","Васильевич","Викторович","Витальевич","Владимирович","Владиславович","Вольфович","Вячеславович","Геннадиевич","Георгиевич","Григорьевич","Данилович","Денисович","Дмитриевич","Евгеньевич","Егорович","Ефимович","Иванович","Иваныч","Игнатьевич","Игоревич","Ильич","Иосифович","Исаакович","Кириллович","Константинович","Леонидович","Львович","Максимович","Матвеевич","Михайлович","Николаевич","Олегович","Павлович","Палыч","Петрович","Платонович","Робертович","Романович","Саныч","Северинович","Семенович","Сергеевич","Степанович","Станиславович","Тарасович","Тимофеевич","Федорович","Феликсович","Филиппович","Эдуардович","Юрьевич","Яковлевич","Ярославович","Матвеевич","Михайлович","Николаевич","Олегович","Павлович","Палыч","Петрович","Платонович","Робертович","Романович","Саныч","Северинович","Семенович","Сергеевич","Степанович","Станиславович","Тарасович","Тимофеевич","Федорович","Феликсович","Филиппович","Эдуардович","Юрьевич","Яковлевич","Ярославович","Александрович","Алексеевич","Анатольевич","Андреевич","Антонович","Аркадьевич","Артемович","Бедросович","Богданович","Борисович"];

const ruCities = ["Алушта", "Феодосия", "Ялта", "Севастополь", "Симферополь", "Абакан", "Адлер", "Анапа", "Ангарск", "Архангельск", "Астрахань", "Барнаул", "Белгород", "Благовещенск", "Чебоксары", "Челябинск", "Череповец", "Черняховск", "Чита", "Екатеринбург", "Геленджик", "Иркутск", "Ижевск", "Кабардинка", "Калининград", "Казань", "Кемерово", "Хабаровск", "Ханты-Мансийск", "Кисловодск", "Комсомольск-на-Амуре", "Кострома", "Краснодар", "Красноярск", "Курган", "Курск", "Липецк", "Листвянка", "Магадан", "Магнитогорск", "Махачкала", "Минеральные Воды", "Москва", "Мурманск", "Находка", "Нальчик", "Нижневартовск", "Нижний Новгород", "Ноябрьск", "Норильск", "Новокузнецк", "Новороссийск", "Новосибирск", "Новый Уренгой", "Омск", "Оренбург", "Пенза", "Пермь", "Петропавловск-Камчатский", "Петрозаводск", "Псков", "Пятигорск", "Ростов-на-Дону", "Рязань", "Салехард", "Самара", "Саранск", "Саратов", "Саяногорск", "Сочи", "Санкт-Петербург", "Ставрополь", "Сургут", "Суздаль", "Светлогорск", "Сыктывкар", "Таганрог", "Тольятти", "Томск", "Тюмень", "Уфа", "Ухта", "Улан-Удэ", "Ульяновск", "Великий Новгород", "Владикавказ", "Владимир", "Владивосток", "Волгоград", "Воркута", "Воронеж", "Якутск", "Ярославль", "Йошкар-Ола", "Южно-Сахалинск", "Химки", "Калуга", "Елабуга", "Азов", "Александров"];

const ruStreets = ["Зябриково", "Знаменка", "Жуково", "Житово", "Житниково", "Железово", "Зеленцыно", "Зеленая Нива", "Застенье", "Заречье", "Замушье", "Заледенье", "Урочище Заказник", "Задорье", "Заболотье", "Ескино", "Ерешкино", "Еремейки", "Елизаветино", "Урочище Егурьево", "Егорье", "Ефремово", "Явидово", "Ясная Поляна", "Ясная Поляна", "Якутино", "Якшино", "Яковлево", "Якимово", "Высокое", "Высокое", "Вышгород", "Вялец", "Урочище Вторая Моложа", "Вперед", "Восцы", "Вороново", "Вороново", "Воробьище Вораксиха", "Волосово", "Волошня", "Волочагино", "Владычно", "Вишенки", "Пруд Верховье", "Веревочка", "Велья", "Великоселье", "Велеможье", "Вечерняя Заря", "Васильево", "Упрышкино", "Ульяново", "Улиткино", "Удальцово", "Тверецкий", "Турлаево", "Турково", "Цапушево", "Трясна", "Трясенка", "Тресково", "Трещатина", "Тимошкино", "Тимонино", "Тимофеево", "Теляковка", "Телицыно", "Водохранилище Тарасковское", "Талеты", "Сырково", "Свобода", "Сверчково", "Сутоки", "Сухой Ручей", "Ступнево", "Стукшино", "Струбище", "Строевичи", "Стренево", "Страна Советов", "Степурино", "Степанково", "Урочище Ставрово", "Старое Малиново", "Старое Китово", "Старое", "Стани", "Спирово", "Сотский", "Сосенка", "Сорокино", "Соленька", "Урочище Соколово", "Соколово", "Соколино", "Снегирёво", "Смердово", "Слоновбо", "Соловьев"];

const ruAlphabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



// ES 
const esFirstNames = ["Santiago", "Sebastián", "Matías", "Mateo", "Nicolás", "Alejandro", "Diego", "Samuel", "Benjamín", "Daniel", "Joaquín", "Lucas", "Tomas", "Gabriel", "Martín", "David", "Emiliano", "Jerónimo", "Emmanuel", "Agustín", "Juan Pablo", "Juan José", "Andrés", "Thiago", "Leonardo", "Felipe", "Ángel", "Maximiliano", "Christopher", "Juan Diego", "Adrián", "Pablo", "Miguel Ángel", "Rodrigo", "Alexander", "Ignacio", "Emilio", "Dylan", "Bruno", "Carlos", "Vicente", "Valentino", "Santino", "Julián", "Juan Sebastián", "Aarón", "Lautaro", "Axel", "Fernando", "Ian", "Christian", "Javier", "Manuel", "Luciano", "Francisco", "Juan David", "Iker", "Facundo", "Rafael", "Alex", "Franco", "Antonio", "Luis", "Isaac", "Máximo", "Pedro", "Ricardo", "Sergio", "Eduardo", "Bautista", "Miguel", "Cristóbal", "Kevin", "Jorge", "Alonso", "Anthony", "Simón", "Juan", "Joshua", "Diego Alejandro", "Juan Manuel", "Mario", "Alan", "Josué", "Gael", "Hugo", "Matthew", "Ivan", "Damián", "Lorenzo", "Juan Martín", "Esteban", "Álvaro", "Valentín", "Dante", "Jacobo", "Jesús", "Camilo", "Juan Esteban", "Elías"];

const esLastNames = ["Garcia","Fernandez","Lopez","Martinez","Gonzalez","Rodriguez","Sanchez","Perez","Martin","Gomez","Ruiz","Diaz","Hernandez","Alvarez","Jimenez","Moreno","Munoz","Alonso","Romero","Navarro","Gutierrez","Torres","Dominguez","Gil","Vazquez","Blanco","Serrano","Ramos","Castro","Suarez","Sanz","Rubio","Ortega","Molina","Delgado","Ortiz","Morales","Ramirez","Marin","Iglesias","Santos","Castillo","Garrido","Calvo","Pena","Cruz","Cano","Nunez","Prieto","Diez","Lozano","Vidal","Pascual","Ferrer","Medina","Vega","Leon","Herrero","Vicente","Mendez","Guerrero","Fuentes","Campos","Nieto","Cortes","Caballero","Ibanez","Lorenzo","Pastor","Gimenez","Saez","Soler","Marquez","Carrasco","Herrera","Montero","Arias","Crespo","Flores","Andres","Aguilar","Hidalgo","Cabrera","Mora","Duran","Velasco","Rey","Pardo","Roman","Vila","Bravo","Merino","Moya","Soto","Izquierdo","Reyes","Redondo","Marcos","Carmona","Menendez"];

const esMiddleNames = ["Santiago", "Matías", "Sebastián", "Mateo", "Nicolás", "Alejandro", "Samuel", "Diego", "Daniel", "Benjamín", "Leonardo", "Tomás", "Joaquín", "Gabriel", "Emiliano", "Martín", "Lucas", "Agustín", "David", "Iker", "Juan José", "Maximiliano", "Adrián", "Emmanuel", "Felipe", "Juan Pablo", "Andrés", "Jerónimo/Gerónimo", "Ángel", "Rodrigo", "Bruno", "Alexander", "Thiago", "Pablo", "Ian", "Isaac", "Miguel Ángel", "Fernando", "Javier", "Emilio", "Juan Sebastián", "Alonso", "Aarón", "Rafael", "Esteban", "Juan Diego", "Axel", "Francisco", "Bautista", "Carlos", "Dylan", "Juan", "Julián", "Manuel", "Facundo", "Gael", "Valentino", "Damián", "Santino", "Vicente", "Máximo", "Christopher", "Jorge", "Luciano", "Dante", "Alan", "Cristóbal", "Jesús", "Lorenzo", "Alex", "Juan Esteban", "Patricio", "Pedro", "Juan Manuel", "Matthew", "Antonio", "Iván", "José", "Hugo", "Josué", "Lautaro", "Diego Alejandro", "Miguel", "Franco", "Kevin", "Luis", "Simón", "Elías", "Caleb", "Eduardo", "Ricardo", "Juan David", "Marcos", "Salvador", "Jacobo", "Juan Ignacio", "Camilo", "Mauricio", "Juan Felipe", "Gonzalo"];

const esCities = ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas de Gran Canaria", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "Hospitalet de Llobregat", "Vitoria-Gasteiz", "A Coruña", "Elche/Elx", "Granada", "Terrassa", "Badalona", "Oviedo", "Cartagena", "Sabadell", "Jerez de la Frontera", "Móstoles", "Santa Cruz de Tenerife", "Pamplona", "Almería", "Alcalá de Henares", "Fuenlabrada", "Leganés", "Donostia/San Sebastián", "Getafe", "Burgos", "Albacete", "Santander", "Castellón de la Plana", "Alcorcón", "San Cristóbal de La Laguna", "Logroño", "Badajoz", "Salamanca", "Huelva", "Marbella", "Lleida", "Tarragona", "Dos Hermanas", "Torrejón de Ardoz", "Parla", "Mataró", "León", "Algeciras", "Santa Coloma de Gramenet", "Alcobendas", "Cádiz", "Jaén", "Ourense", "Reus", "Telde", "Girona", "Barakaldo", "Lugo", "Santiago de Compostela", "Roquetas de Mar", "Cáceres", "Las Rozas de Madrid", "San Fernando", "Lorca", "Sant Cugat del Vallès", "San Sebastián de los Reyes", "Cornellà de Llobregat", "El Puerto de Santa María", "Rivas-Vaciamadrid", "Melilla", "Pozuelo de Alarcón", "Guadalajara", "Toledo", "Ceuta", "Chiclana de la Frontera", "Sant Boi de Llobregat", "El Ejido", "Talavera de la Reina", "Torrevieja", "Pontevedra", "Mijas", "Torrent", "Coslada", "Vélez-Málaga", "Arona", "Fuengirola", "Palencia", "Avilés", "Getxo", "Manresa", "Rubí", "Orihuela", "Valdemoro", "Alcalá de Guadaíra"];

const esStreets = ["Avenida", "Barriada", "Barrio", "Bulevar", "Boulevard", "Calle", "Callejón", "Calzada", "Camino", "Carrera", "Carretera", "Carretera", "de", "Acceso", "Circunvalación", "Colonia", "Corredera", "Corredera", "Alta", "Corredera", "Baja", "Costanilla", "Cuesta", "Diagonal", "Eje", "Glorieta", "Malecón", "Muelle", "Pasaje", "Paseo", "Placeta", "Plaza", "Poblado", "Puerta", "Rambla", "Retorno", "Ronda", "Rúa", "Ruta", "Senda", "Transversal", "Travesía", "Urbanización", "Vía", "Viaducto", "Avenida", "Barriada", "Barrio", "Bulevar", "Boulevard", "Calle", "Callejón", "Calzada", "Camino", "Carrera", "Carretera", "Carretera", "de", "Acceso", "Circunvalación", "Colonia", "Corredera", "Corredera", "Alta", "Corredera", "Baja", "Costanilla", "Cuesta", "Diagonal", "Eje", "Glorieta", "Malecón", "Muelle", "Pasaje", "Paseo", "Placeta", "Plaza", "Poblado", "Puerta", "Rambla", "Retorno", "Ronda", "Rúa", "Ruta", "Senda", "Transversal", "Travesía", "Urbanización", "Vía", "Viaducto", "Avenida", "Barriada", "Barrio", "Bulevar", "Boulevard", "Calle", "Callejón", "Calzada", "Camino", "Carrera"];
const esAlphabet = ["Á", "B", "C", "D", "É", "F", "G", "H", "Í", "J", "K", "L", "N", "N", "Ñ", "Ó", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const data = {
    us: {
        firstNames: usFirstNames,
        lastNames: usLastNames,
        middleNames: usMiddlenames,
        country: "United States",
        cities: usCities,
        streets: usStreets,
        phoneCode: "+12",
        house: "House",
        alphabet: usAlphabet
    },
    ru: {
        firstNames: ruFirstNames,
        lastNames: ruLastNames,
        middleNames: ruMiddlNames,
        country: "Россия",
        cities: ruCities,
        streets: ruStreets,
        phoneCode: "+7",
        house: "Дом",
        alphabet: ruAlphabet
    },
    es: {
        firstNames: esFirstNames,
        lastNames: esLastNames,
        middleNames: esMiddleNames,
        country: "España",
        cities: esCities,
        streets: esStreets,
        phoneCode: "+34",
        house: "Lá casa",
        alphabet: esAlphabet
    }
}

exports.data = data;