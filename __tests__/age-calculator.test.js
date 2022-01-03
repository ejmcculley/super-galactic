import AgeCalculator from "./../src/age-calculator";

describe("AgeCalculator", () => {

  test("should correctly create an object with five ages", () => {
    const ageCalculator = new AgeCalculator(33, 138, 54, 17, 2);
    expect(ageCalculator.earthAge).toEqual(33);
    expect(ageCalculator.mercuryAge).toEqual(138);
    expect(ageCalculator.venusAge).toEqual(54);
    expect(ageCalculator.marsAge).toEqual(17);
    expect(ageCalculator.jupiterAge).toEqual(2);
  });

  describe("ageOnEarth", () => {

    test("should assign value of age to earthAge", () => {
      const ageOnEarth = (age) => {
      expect(ageOnEarth(age)).toEqual(this.earthAge);
      }
    })
  })
  describe("ageOnMercury", () => {

    test("should use age to calculate mercuryAge", () => {
      const ageOnMercury = (age) => {
      expect(ageOnMercury(age)).toEqual(this.mercuryAge);
      }
    })
  })
});