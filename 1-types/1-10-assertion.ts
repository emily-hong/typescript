{
  /**
   * Type Assertions π©
   * νμμ λ°±νΌμΌνΈ μλ μ¬μ©
   *
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 5
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // !: undefined κ° μλλΌκ³  μ₯λ΄ν λ, νμ μ λ§ νμ ν λλ§ μ¬μ©νλ€.
  numbers.push(2); // π±

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }
}
