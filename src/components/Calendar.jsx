import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({availabilities, selectedCoach}) => {
  // TODO: Convert into utils function
  const filteredAvailabilities = availabilities.filter(availability => availability.extendedProps.name.includes(selectedCoach))

  const handleDateSelect = (selectInfo) => {
    let title = window.confirm('Would you like to book an appointment at this time ?')
    let calendarApi = selectInfo.view.calendar
    
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        title: "Unavailable",
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek",
      }}
      initialView="timeGridWeek"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      slotMinTime="05:00:00"
      slotMaxTime="19:00:00"
      height="auto"
      events={filteredAvailabilities}

      select={(info) => handleDateSelect(info)}
    />
  );
};

export default Calendar;
