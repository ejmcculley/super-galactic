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

  lifeLeft = function(age, expectancy) { 
    let yearsLeft = (expectancy - age);
    if (yearsLeft > 0) {
    return "Years left to live: " + yearsLeft;
    } else {
      return "Years lived beyond expectancy: " + Math.abs(yearsLeft);
    }
  }
}