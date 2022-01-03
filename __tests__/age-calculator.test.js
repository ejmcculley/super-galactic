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

  describe("galacticeAge", () => {

    test("should assign value of age to earthAge", () => {
      const galacticAge = (age) => {
      expect(galacticAge(age)).toEqual(this.earthAge);
      }
    })
    test("should take age value to calculate mercuryAge", () => {
      const galacticAge = (age) => {
      expect(galacticAge(age)).toEqual(this.mercuryAge);
      }
    })
  })
});