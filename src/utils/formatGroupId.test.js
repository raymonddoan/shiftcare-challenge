import formatGroupId from "./formatGroupId";

describe("formatGroupId function", () => {
  test('should return a string', () => {
    expect(formatGroupId("Christy Schumm")).toStrictEqual("1")
  })

  test('should return an empty string if incorrect string passed', () => {
    expect(formatGroupId("Elton John")).toStrictEqual("")
  })
})
