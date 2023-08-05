export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picNumber: string;
  picture: string;
  types: string[];
  created: Date;

  constructor(
    hp: number = 100,
    cp: number = 10,
    picNumber: string = '460',
    picture: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${picNumber}.png`,
    types: string[] = ['Normal'],
    created: Date = new Date()
  ) {
    this.hp = hp;
    this.cp = cp;
    this.picNumber = picNumber;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}