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
});
