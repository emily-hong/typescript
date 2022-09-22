{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 3, 4];

  // readonly 변경할 수 없다
  function printArray(fruits: readonly string[]) {}

  // Tuple (사용권장 X)
  // 가독성이 떨어진다
  // 대채 -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
