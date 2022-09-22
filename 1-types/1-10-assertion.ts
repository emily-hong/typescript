{
  /**
   * Type Assertions 💩
   * 타입을 백퍼센트 알때 사용
   *
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 5
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // !: undefined 가 아니라고 장담할때, 타입 정말 확신할때만 사용한다.
  numbers.push(2); // 😱

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }
}
