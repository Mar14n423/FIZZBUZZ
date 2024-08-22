import { generarFizzBazz, generarSecuencia } from "./FizzBuzz.js";

describe("FizzBazz", () => {
  it("Devolver 1", () => {
    expect(generarFizzBazz(1)).toEqual("1");
  });

  it("Devolver el número", () => {
    expect(generarFizzBazz(2)).toEqual("2");
  });

  });