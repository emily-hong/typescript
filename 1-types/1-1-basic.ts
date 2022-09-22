{
  // 충돌을 피하기위해 {}블록 안에서 작성
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array
   */

  //  type
  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined (값의 유무가 결정되지 않는 상태), 무언가가 있고없을때 사용됨
  let name: undefined; // undefined만 담을수있음 (단독사용안함) 💩
  // name = 'hello'; // 에러발생
  // 사용시
  let age: number | undefined; // 숫자 또는 undefined
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null (값이 비었다고 결정되어있는 상태)
  let person: null; // (단독사용은 잘안함) 💩
  let person2: string | null;

  // unknown 💩 알수없는 상태 (가능하면 쓰지않기)
  // 타입이 어떤것이 들어올지 모르는 상태 (자바스크립트 라이브러리를 사용할때 등)
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩 가능하면 쓰지않기
  // 어떤 타입이든 다 들어올 수 있음
  let anything: any = 0;
  anything = "hello";

  // void
  // 함수에서 아무것도 리턴하지않을때 (생략가능)
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  // 절대 리턴할 수 없다
  // 어플리케이션에서 어떠한 에러를 던질때 또는 while문이 무한일때
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {} // 도달할 수 없는 코드라 흐림
    let neverEnding: never; // 💩
  }

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {
    // 원시타입을 제외한 어떠한 object도 전달할 수 있다
  }
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
