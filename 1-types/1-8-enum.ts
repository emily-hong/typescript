{
  /**
   * enum
   * 다른 언어들에서는 흔히 쓰이지만
   * 타입스크립트에서는 사용하기를 권장하지 않는다. (타입이 정확하게 보장되지 않기 때문)
   * 여러가지 관련된 상수의 값들을 한곳에 모아서 정의할 수 있게 해주는 타입
   * javascript에서는 지원하지 않기 때문에 타입스크립트에서 지원한다
   */
  // JavaScript
  const MAX_NUM = 0;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNHESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TupeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday = 1, // 1부터 시작
    Tuesday, // 1
    WednesDay, // 2
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  console.log(Days.Tuesday);
  console.log(Days.Saturday);

  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 타입스크립트에서 enum 사용하여 아무 값이나 할당해도 에러가 발생하지 않고 이슈없이 동작한다.
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Wednesday";
  // enum은 충분히  union 타입으로 대채하여 사용할 수 있다.
}
