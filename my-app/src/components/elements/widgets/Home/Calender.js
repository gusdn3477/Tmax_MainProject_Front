import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";

export default function Calender() {
  //  {
  //   title: "event 1",
  //   start: "2021-11-14T10:00:00",
  //   end: "2021-11-14T12:00:00",
  // },
  // {
  //   title: "event 2",
  //   start: "2021-11-16T13:00:00",
  //   end: "2021-11-16T18:00:00",
  // },
  // { title: "event 3", start: "2021-11-17", end: "2021-11-20" },
  // {
  //   title: "event 4",
  //   start: "2021-11-14",
  //   end: "2021-11-14",
  // },
  //   const events = [
  //     {
  //       title: "event 1",
  //       start: "2021-11-14T10:00:00",
  //       end: "2021-11-14T12:00:00",
  //     },
  //     {
  //       title: "event 2",
  //       start: "2021-11-16T13:00:00",
  //       end: "2021-11-16T18:00:00",
  //     },
  //     { title: "event 3", start: "2021-11-17", end: "2021-11-20" },
  //     {
  //       title: "event 4",
  //       start: "2021-11-14",
  //       end: "2021-11-14",
  //     },
  //   ];

  const [events, setEvents] = useState([]);
  //   const [tempEvents, setTempEvents] = useState([]);

  //localhost:8000/job-service/jobsall/4b18192d-22d6-4183-959e-225112966c8c
  useEffect(() => {
    fetch(`job-service/jobsall/${localStorage.getItem("corpNo")}`)
      .then((res) => {
        return res.json();
      })
      .then((events) => {
        console.log(events);
        setEvents(events);
      });
  }, []);

  //const tempEvents = [];
  // const tempEvents = [];

  //   useEffect(() => {
  //     fetch(`job-service/${localStorage.getItem("corpNo")}/jobs`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((events) => {
  //         while(events)
  //       });
  //   }, []);

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: "dayGridMonth,timeGridWeek,timeGridDay new",
        }}
        customButtons={{
          new: {
            text: "new",
            click: () => console.log("new event"),
          },
        }}
        events={events}
        eventColor="#596fc5"
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </div>
  );
}
