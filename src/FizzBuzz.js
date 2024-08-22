function generarFizzBuzz(numero){
    const FIZZ = 3

    if(numero % FIZZ === 0)
    {
        return "Fizz";
    }
    return numero + "";
  }

  export default generarFizzBuzz;