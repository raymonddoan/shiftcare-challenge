import formatDaysOfWeek from "./formatDaysOfWeek";

describe("formatDaysOfWeek function", () => {
  test('should return an array of a string', () => {
    expect(formatDaysOfWeek("Monday")).toStrictEqual(["1"])
  })

  test('should return an empty array if incorrect string passed', () => {
    expect(formatDaysOfWeek("My Birthday")).toStrictEqual([])
  })
})
