import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import filterAvailabilities from "../../utils/filterAvailabilities";

const Calendar = ({availabilities, selectedCoach}) => {
  const filteredAvailabilities = filterAvailabilities(availabilities, selectedCoach)

  const handleDateSelect = (selectInfo) => {
    let title = window.confirm(`Would you like to book an appointment with ${selectedCoach} at this time ?`)
    let calendarApi = selectInfo.view.calendar
    
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        title: selectedCoach ? `Appointment with ${selectedCoach}` : "Booked Appointment",
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: `title`,
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
      eventClick={(info) => handleEventClick(info)}
    />
  );
};

export default Calendar;
