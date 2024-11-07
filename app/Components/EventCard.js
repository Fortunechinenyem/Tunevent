import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image
        src={event.imageUrl}
        alt={event.title}
        width={400}
        height={250}
        className="rounded-lg object-cover"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        {event.title}
      </h2>
      <p className="text-sm text-gray-500">
        {event.date} | {event.location}
      </p>
      <p className="text-gray-700 mt-2">{event.description}</p>
      <Link
        href={`/events/${event.id}`}
        className="inline-block mt-4 bg-[#60752f] text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:bg-yellow-400"
      >
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
