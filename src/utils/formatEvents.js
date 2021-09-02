import moment from 'moment'
import formatDaysOfWeek from './formatDaysOfWeek';
import formatGroupId from './formatGroupId';

export default function formatAvailabilities(params) {
  return params.map((param) => {
    const { name, day_of_week, available_at, available_until } = param;
    if (!name || !day_of_week || !available_at || !available_until) {
      return null
    }

    let groupId = formatGroupId(name)
    let daysOfWeek = formatDaysOfWeek(day_of_week);

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
