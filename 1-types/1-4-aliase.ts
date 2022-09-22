{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "emily";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "emily",
    age: 10,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let emilyName: Name;
  // emilyName = "other";
  emilyName = "name";

  type JSON = "json";
  const json: JSON = "json";
}
