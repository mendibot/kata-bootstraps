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
});
