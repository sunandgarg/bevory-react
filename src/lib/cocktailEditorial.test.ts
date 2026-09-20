import { describe, expect, it } from "vitest";
import { annotateIndianIngredients, buildCocktailEditorial, ouncesToMl } from "./cocktailEditorial";

describe("cocktail editorial normalization", () => {
  it("converts common ounce measures to practical millilitres", () => {
    expect(ouncesToMl("2 oz gin, 0.75 fl oz lime and 0.25 oz syrup"))
      .toBe("60 ml gin, 22.5 ml lime and 7.5 ml syrup");
  });

  it("adds useful Hindi ingredient names once", () => {
    expect(annotateIndianIngredients("Mint, black salt and cumin"))
      .toBe("mint (Pudina), black salt (Kala namak) and cumin (Jeera)");
    expect(annotateIndianIngredients("mint (Pudina)"))
      .toBe("mint (Pudina)");
  });

  it("derives only method details supported by the current recipe", () => {
    const result = buildCocktailEditorial({
      base_spirit: "Gin",
      ingredients: ["2 oz gin", "0.5 oz lime juice", "Mint"],
      instructions: "Shake with ice. Strain into a chilled coupe. Garnish with mint.",
    });
    expect(result.ingredients).toEqual(["60 ml gin", "15 ml lime juice", "mint (Pudina)"]);
    expect(result.glassware).toBe("Chilled coupe glass");
    expect(result.ice).toBe("Cubed ice for mixing; serve without ice");
    expect(result.garnish).toBe("mint");
  });
});
