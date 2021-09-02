export default function filterAvailabilities(availabilities, selectedCoach) {
  return availabilities.filter(availability => availability.extendedProps.name.includes(selectedCoach))
}
