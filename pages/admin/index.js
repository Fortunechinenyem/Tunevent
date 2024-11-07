import { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "@/app/Components/EventForm";

const Admin = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events").then((response) => setEvents(response.data.data));
  }, []);

  return (
    <div>
      <h1>Manage Events</h1>
      <EventForm />
      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
