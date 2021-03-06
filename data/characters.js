db.getCollection('characters').drop();

characters = [{
  name: 'Al',
  age: 20,
  abilites: {
    style: 'warrior',
    xp: 700,
    type: 'physical'
  }
}, {
  name: 'Sweiz',
  age: 19,
  abilites: {
    style: 'bestial',
    xp: 550,
    type: 'physical'
  }
}, {
  name: 'Drue',
  age: 40,
  abilities: {
    style: 'tanker',
    xp: 600,
    type: 'physical'
  },
  {
    name: 'Erick',
    age: 23,
    abilities: {
      style: 'assasin',
      xp: 450,
      type: 'mermaid'
    },
  }
}]

db.getCollection('characters').insert(characters);