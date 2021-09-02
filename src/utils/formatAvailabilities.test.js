import formatAvailabilities from "./formatAvailabilities";

describe("formatAvailabilities fn", () => {
  test("should return null for the object if the object is missing a key", () => {
    const input = [
      {
        name: "Warren Buffett",
        day_of_week: "Tuesday",
        available_at: " 3:00PM",
        available_until: " 7:00PM",
      },
      {
        name: "Steve Jobs",
        timezone: "Australia/Sydney",
        day_of_week: "Monday",
        available_at: " 8:00AM",
        available_until: " 4:00PM",
      },
    ];

    const output = [
      null,
      {
        groupId: "",
        title: `Steve Jobs - Unavailable`,
        daysOfWeek: ["1"],
        startTime: "08:00",
        endTime: "16:00",
        display: "inverse-background",
        extendedProps: {
          name: "Steve Jobs",
          timezone: "Australia/Sydney",
          day_of_week: "Monday",
          available_at: " 8:00AM",
          available_until: " 4:00PM",
        },
      },
    ];
    expect(formatAvailabilities(input)).toStrictEqual(output);
  });
});
