export default class AgeCalculator { 
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  ageOnEarth = () => this.earthAge;
  ageOnMercury = () => this.mercuryAge = Math.floor((parseInt(this.earthAge) * 365.26)/87.97);
  ageOnVenus = () => this.venusAge = Math.floor((parseInt(this.earthAge) * 365.26)/224.7);
  ageOnMars = () => this.marsAge = Math.floor((parseInt(this.earthAge) * 365.26)/687);
  ageOnJupiter = () => this.jupiterAge = Math.floor((parseInt(this.earthAge) * 365.26)/4380);
}