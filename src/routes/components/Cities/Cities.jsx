import { nanoid } from "nanoid";
function Cities() {
  return [
    {
      id: nanoid(5),
      title: "Abkhazia",
      cities: [
        {
          id: nanoid(5),
          title: "Gagra",
          peopleCount: 12364,
          area: 772.4,
          dateOfFoundation: 1903,
          history: `Гагра появилась в XIX веке. Но первое царство 
          на территории города появилось в XVII веке до нашей 
          эры — Колхида, которое было одним из древних государств 
          на Черноморском побережье Кавказа. Там жили колхи — 
          племена южного и юго-восточного Причерноморья.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
        {
          id: nanoid(5),
          title: "Sukhumi",
          peopleCount: 65530,
          area: 372,
          dateOfFoundation: 1848,
          history: `Первые поселения на территории города появились ещё в 
          древнем каменном веке в эпоху нижнего палеолита, около 300 тысяч 
          лет назад.История города насчитывает более 2500 лет. Это один из 
          древнейших городов мира.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
        {
          id: nanoid(5),
          title: "Gudauta",
          peopleCount: 38650,
          area: 1640,
          dateOfFoundation: 1926,
          history: `Расположен в 37 км к северо-западу от Сухума, на берегу 
          Гудаутской бухты Чёрного моря. Гудаута лежит на возвышенном плато в 
          зоне влажных субтропиков, по территории города протекает река Гудоу. 
          Является приморским климатическим курортом.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
      ],
    },
    {
      id: nanoid(5),
      title: "India",
      cities: [
        {
          id: nanoid(5),
          title: "Mumbai",
          peopleCount: 21300000,
          area: 603.4,
          dateOfFoundation: 1947,
          history: `Мумбаи — один из важнейших экономических и культурных 
          центров Индии; представляет собой город больших контрастов, где 
          роскошь и богатство соседствует с нищетой.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
        {
          id: nanoid(5),
          title: "Agra",
          peopleCount: 1760285,
          area: 372,
          dateOfFoundation: 1526,
          history: `Агра в Индии – город, главный символ которого знаком 
          каждому без исключения. Именно сюда съезжаются миллионы туристов для 
          того, чтобы своими глазами увидеть одно из новых семи чудес света – 
          знаменитый Тадж-Махал. Однако это далеко не единственный исторический
           памятник, который находится на территории города.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
        {
          id: nanoid(5),
          title: "Bangalore",
          peopleCount: 6537124,
          area: 741,
          dateOfFoundation: 1537,
          history: `Бангалор богат на достопримечательности. Одной из главных по праву 
          считается Бангалорский дворец. Его строительство было начато в 1862 и закончилось 
          в 1944 году. В 1884 году дворец был куплен Магараджей Майсура — Чамараей Водеяром.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
      ],
    },
    {
      id: nanoid(5),
      title: "Russia",
      cities: [
        {
          id: nanoid(5),
          title: "Moscow",
          peopleCount: 13100000,
          area: 2511,
          dateOfFoundation: 1147,
          history: `Москва – столица России, многонациональный город на Москве-реке 
          в западной части страны. В его историческом центре находится средневековая 
          крепость Кремль – резиденция российского президента. На ее территории можно 
          посетить Оружейную палату, где выставляются драгоценные предметы, принадлежавшие 
          царской семье. За северо-восточной стеной Кремля раскинулась Красная площадь – 
          символический центр России. Здесь можно увидеть Мавзолей В. И. Ленина, Государственный 
          исторический музей и собор Василия Блаженного с красочными луковичными куполами`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
        {
          id: nanoid(5),
          title: "Saint-Petersburg",
          peopleCount: 5600000,
          area: 1439,
          dateOfFoundation: 1703,
          history: `Санкт-Петербург — Мекка культурных, исторических и архитектурных памятников . 
          Основанный царем Петром I (Великим) как «окно в Европу» России, он носит неофициальный статус 
          культурной столицы России и самого европейского города, отличие, которое он стремится сохранить 
          в своем извечном соперничестве с Москвой.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
        {
          id: nanoid(5),
          title: "Kazan",
          peopleCount: 1329825,
          area: 515,
          dateOfFoundation: 1005,
          history: `Это крупнейший город Приволжского федерального округа и один из крупнейших 
          городов России. Здесь находится множество исторических и культурных достопримечательностей. 
          В Казани есть Казанский Кремль, который является объектом Всемирного наследия ЮНЕСКО. Город 
          также известен под брендом “Третья столица России”.`,
          imgOfAttractions: [
            { title: "gagra-1", src: "/images/gagra-1.jpg", alt: "Gagra" },
            { title: "gagra-2", src: "/images/gagra-2.jpg", alt: "Gagra" },
          ],
        },
      ],
    },
  ];
}

export default Cities;

/*[
    {
      id: nanoid(5),
      title: 'Tokyo',
      peopleCount: 123456,
      area: 1234,
      dateOfFoundation: 1986,
      history: 'Qwerty',
      imgOfAttractions: ''
    },
    {
      id: nanoid(5),
      title: 'Pekin',
      peopleCount: 123456,
      area: 1234,
      dateOfFoundation: 1986,
      history: 'Qwerty',
      imgOfAttractions: ''
    },{
      id: nanoid(5),
      title: 'Shanhai',
      peopleCount: 123456,
      area: 1234,
      dateOfFoundation: 1986,
      history: 'Qwerty',
      imgOfAttractions: ''
    },{
      id: nanoid(5),
      title: 'Mumbai',
      peopleCount: 123456,
      area: 1234,
      dateOfFoundation: 1986,
      history: 'Qwerty',
      imgOfAttractions: ''
    },
  ] */
