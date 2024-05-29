import heroes, { owner } from '../data/heroes';

const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id)
}
//console.log(getHeroById(3))

const getHeroByOwner =  (owner) => {
  return heroes.filter( (value) => value.owner === owner );
}
//console.log(getHeroByOwner('Marvel'))

export { getHeroById };