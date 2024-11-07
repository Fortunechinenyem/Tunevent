import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = ({ events }) => {
  const getEventsForDate = (date) =>
    events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );

  return (
    <div className="flex justify-center items-center p-4">
      <Calendar
        tileContent={({ date }) => {
          const dailyEvents = getEventsForDate(date);
          return dailyEvents.length > 0 ? (
            <div className="mt-1 text-xs text-white bg-blue-600 rounded-md p-1">
              {dailyEvents.map((event, index) => (
                <p key={index}>{event.title}</p>
              ))}
            </div>
          ) : null;
        }}
        tileClassName={({ date }) => {
          const hasEvent = getEventsForDate(date).length > 0;
          return hasEvent ? "bg-yellow-200" : null;
        }}
      />
    </div>
  );
};

export default EventCalendar;
