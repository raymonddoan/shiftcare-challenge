import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({availabilities, selectedCoach}) => {
  // const filteredAvailabilities = availabilities.filter(availability => availability.extendedProps.name.toLowerCase().includes(selectedCoach.toLowerCase()))

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
      slotMaxTime="21:00:00"
      height="auto"
      events={availabilities}
    />
  );
};

export default Calendar;
