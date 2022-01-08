import AgeCalculator from "./../src/age-calculator";

describe("AgeCalculator", () => {

  test("should correctly create an object with five ages", () => {
    const ageCalculator = new AgeCalculator(0, 0, 0, 0,0);
    expect(ageCalculator.earthAge).toEqual(0);
    expect(ageCalculator.mercuryAge).toEqual(0);
    expect(ageCalculator.venusAge).toEqual(0);
    expect(ageCalculator.marsAge).toEqual(0);
    expect(ageCalculator.jupiterAge).toEqual(0);
  });

  describe("ageOnEarth", () => {

    test("should assign value of age to earthAge", () => {
      const ageCalculator = new AgeCalculator(33);
      expect(ageCalculator.ageOnEarth(0)).toEqual(33);
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
});