export default class AgeCalculator { 
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  ageOnEarth = (age) => earthAge = age;
  ageOnMercury = (age) => mercuryAge = Math.floor((parseInt(age) * 365.26)/87.97);
}