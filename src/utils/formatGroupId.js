export default function formatGroupId(name) {
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
  return groupId
}
