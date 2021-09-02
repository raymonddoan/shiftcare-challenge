export default function formatDaysOfWeek(day_of_week) {
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
  return daysOfWeek
}
