import { nanoid } from "nanoid";
import "../../../images";

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
