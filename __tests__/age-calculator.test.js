import { test } from "media-typer";
import { describe } from "yargs";
import AgeCalculator from "./../src/age-calculator";

describe("AgeCalculator", () => {

  test("should correctly create an object with five ages", () => {
    const galacticAge = new AgeCalculator(33, 138, 54, 17, 2);
    expect(galacticAge.earthAge).toEqual(33);
    expect(galacticAge.mercuryAge).toEqual(138);
    expect(galacticAge.venusAge).toEqual(54);
    expect(galacticAge.marsAge).toEqual(17);
    expect(galacticAge.jupiterAge).toEqual(2);
  })
})