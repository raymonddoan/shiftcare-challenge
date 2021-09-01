import moment from 'moment'

export default function formatAvailabilities(params) {
  return params.map((param) => {
    const { name, day_of_week, available_at, available_until } = param;

    let groupId = "";
    switch (name) {
      case "Christy Schumm":
        groupId = '1'
        break;
      case "Natalia Stanton Jr.":
        groupId = '2'
        break;
      case "Nola Murazik V":
        groupId = '3'
        break;
      case "Elyssa O'Kon":
        groupId = '4'
        break;
      case "Dr. Geovany Keebler":
        groupId = '5'
        break;
      case "Ramy Malik":
        groupId = '6'
        break;
      default:
    }

    let daysOfWeek = [];
    switch (day_of_week) {
      case "Monday":
        daysOfWeek.push('1')
        break;
      case "Tuesday":
        daysOfWeek.push('2')
        break;
      case "Wednesday":
        daysOfWeek.push('3')
        break;
      case "Thursday":
        daysOfWeek.push('4')
        break;
      case "Friday":
        daysOfWeek.push('5')
        break;
      case "Saturday":
        daysOfWeek.push('6')
        break;
      case "Sunday":
        daysOfWeek.push('7')
        break;
      default:
    }

    return {
      groupId: groupId,
      title: `${name} - Unavailable`,
      daysOfWeek: daysOfWeek,
      startTime: moment(available_at, "hh:mm A").format("HH:mm"),
      endTime: moment(available_until, "hh:mm A").format("HH:mm"),
      display: "inverse-background",
      extendedProps: { ...param },
    };
  });
}
