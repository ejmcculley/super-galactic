import AgeCalculator from "./../src/age-calculator";

describe("AgeCalculator", () => {

  test("should correctly create an object with five properties", () => {
    const ageCalculator = new AgeCalculator(0, 0, 0, 0, 0);
    expect(ageCalculator.earthAge).toEqual(0);
    expect(ageCalculator.mercuryAge).toEqual(0);
    expect(ageCalculator.venusAge).toEqual(0);
    expect(ageCalculator.marsAge).toEqual(0);
    expect(ageCalculator.jupiterAge).toEqual(0);
  });

  describe("ageOnEarth", () => {

    test("should assign value of age to earthAge", () => {
      const ageCalculator = new AgeCalculator(33);
      expect(ageCalculator.ageOnEarth()).toEqual(33);
    })
  })
  describe("ageOnMercury", () => {

    test("should use age to calculate mercuryAge", () => {
      const ageCalculator = new AgeCalculator(33)
      expect(ageCalculator.ageOnMercury()).toEqual(137);
    })
  })
  describe("ageOnVenus", () => {

    test("should use age to calculate venusAge", () => {
      const ageCalculator = new AgeCalculator(33)
      expect(ageCalculator.ageOnVenus()).toEqual(53);
    })
  })
  describe("ageOnMars", () => {

    test("should use age to calculate marsAge", () => {
      const ageCalculator = new AgeCalculator(33)
      expect(ageCalculator.ageOnMars()).toEqual(17);
    })
  })
  describe("ageOnJupiter", () => {

    test("should use age to calculate jupiterAge", () => {
      const ageCalculator = new AgeCalculator(33)
      expect(ageCalculator.ageOnJupiter()).toEqual(2);
    })
  })
  describe("lifeLeft", () => {

    test("should show years of life", () => {
      const ageCalculator = new AgeCalculator()
      let age = 30;
      let expectancy = 80;
      expect(ageCalculator.lifeLeft(30, 80)).toEqual(50);
    })
  })
});