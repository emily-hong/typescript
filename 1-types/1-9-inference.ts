{
  /**
   * Type Inference (타입추론)
   */
  let text = "hello";
  // text = 1; // 타입스크립트에서 자동으로 string으로 유추한다

  // 파라미터는 암묵적으로 any 타입으로 명시하기 때문에 타입을 정해준다.
  function print(message = "hello") {
    // default string 할당 방법
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
  // 타입추론보다는 되도록 타입을 직접 명시해서 쓰는 것이 좋다.
}
