import { convert } from "./convert";

describe("Convierte numeros a string romanos", () => {
  it("recibe 1 y devuelve I", () => {
    const result = convert(1);

    expect(result).toBe("I");
  });
});
