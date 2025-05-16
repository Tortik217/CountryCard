import {nanoid} from 'nanoid';

function Cities() {
  return [
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
  ]
}

export default Cities