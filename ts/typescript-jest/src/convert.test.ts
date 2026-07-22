import { convert } from "./convert";

describe("Convierte numeros a string romanos", () => {
  it("recibe 1 y devuelve I", () => {
    const result = convert(1);
    expect(result).toBe("I");
  });
  it("recibe 8 y devuelve VIII", () => {
    const result = convert(8);
    expect(result).toBe("VIII");
  });
  it("recibe 20 y devuelve XX", () => {
    const result = convert(20);
    expect(result).toBe("XX");
  });
  it("recibe 21 y devuelve XXI", () => {
    const result = convert(21);
    expect(result).toBe("XXI");
  });
  it("recibe 45 y devuelve XLV", () => {
    const result = convert(45);
    expect(result).toBe("XLV");
  });
  it("recibe 89 y devuelve LXXXIX", () => {
    const result = convert(89);
    expect(result).toBe("LXXXIX");
  });
  it("recibe 389 y devuelve CCCLXXXIX", () => {
    const result = convert(389);
    expect(result).toBe("CCCLXXXIX");
  });
  it("recibe 740 y devuelve DCCXL", () => {
    const result = convert(740);
    expect(result).toBe("DCCXL");
  });
  it("recibe 0 y devuelve Roman sign not found", () => {
    const result = convert(0);
    expect(result).toBe("Roman sign not found");
  });
});
