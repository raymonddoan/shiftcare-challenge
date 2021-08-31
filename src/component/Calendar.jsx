import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      }}
      initialView="dayGridMonth"
      editable={true}
      // selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      eventBackgroundColor="white"
      eventTextColor="blue"
      eventBorderColor="blue"
      events={[
        { title: "event 1", date: "2021-08-01" },
        { title: "event 2", date: "2021-08-02" },
      ]}
    />
  );
};

export default Calendar;
