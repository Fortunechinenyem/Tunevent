import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = ({ events }) => (
  <div>
    <Calendar
      tileContent={({ date }) => {
        const event = events.find(
          (e) => new Date(e.date).toDateString() === date.toDateString()
        );
        return event ? <span>{event.title}</span> : null;
      }}
    />
  </div>
);

export default EventCalendar;
