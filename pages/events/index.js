import EventCard from "@/app/Components/EventCard";
import EventForm from "@/app/Components/EventForm";
import RSVPForm from "@/app/Components/RSVPForm";
import TicketButton from "@/app/Components/TicketButton";
import React, { useState } from "react";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const handleCreateEvent = (eventData) => {
    setEvents([...events, { id: events.length + 1, ...eventData }]);
  };

  const handleRSVP = (rsvpData) => {};

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <EventForm onSubmit={handleCreateEvent} />
      <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event}>
            <RSVPForm onRSVP={handleRSVP} />
            <TicketButton eventId={event.id} />
          </EventCard>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
