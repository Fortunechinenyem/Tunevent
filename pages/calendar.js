import EventCalendar from "@/app/Components/EventCalendar";
import React from "react";

const sampleEvents = [
  { title: "Tech Meetup", date: "2024-12-15" },
  { title: "Workshop", date: "2024-12-20" },
];

export default function Calendar() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-4">Event Calendar</h1>
      <EventCalendar events={sampleEvents} />
    </div>
  );
}
