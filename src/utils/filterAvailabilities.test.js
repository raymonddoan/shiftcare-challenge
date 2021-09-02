import filterAvailabilities from "./filterAvailabilities";

describe('filterAvailabilities fn', () => {
  test('should correctly filter out results based on the searched params', () => {
    const input = [
      {
        groupId: 1,
        title: `Unavailable`,
        daysOfWeek: ["2"],
        startTime: "15:00",
        endTime: "19:00",
        display: "inverse-background",
        extendedProps: {
          "name": "Warren Buffett",
          "timezone": "Australia/Sydney",
          "day_of_week": "Tuesday",
          "available_at": " 3:00PM",
          "available_until": " 7:00PM"
        },
      },
      {
        groupId: 2,
        title: `Unavailable`,
        daysOfWeek: ["1"],
        startTime: "08:00",
        endTime: "16:00",
        display: "inverse-background",
        extendedProps: {
          "name": "Steve Jobs",
          "timezone": "Australia/Sydney",
          "day_of_week": "Monday",
          "available_at": " 8:00AM",
          "available_until": " 4:00PM"
        },
      },
    ]

    const output = [
      {
        groupId: 2,
        title: `Unavailable`,
        daysOfWeek: ["1"],
        startTime: "08:00",
        endTime: "16:00",
        display: "inverse-background",
        extendedProps: {
          "name": "Steve Jobs",
          "timezone": "Australia/Sydney",
          "day_of_week": "Monday",
          "available_at": " 8:00AM",
          "available_until": " 4:00PM"
        },
      },
    ]

    expect(filterAvailabilities(input, "Steve Jobs")).toEqual(output)
  })
  
})