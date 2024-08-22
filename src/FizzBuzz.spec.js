import generarFizzBuzz from "./FizzBuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero para uno que no tiene reglas como el nro 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("deberia generar el mismo numero para otro numero que no tiene reglas como el nro 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("generar fizz para el numero 3",()=> {
    expect(generarFizzBuzz(3)).toEqual("Fizz");
  });

});
