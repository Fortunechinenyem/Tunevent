import React from "react";
import Link from "next/link";

const TicketButton = ({ eventId }) => {
  return (
    <Link
      href={`/events/${eventId}/tickets`}
      className="inline-block bg-[#60752f] text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-400"
    >
      Get Tickets
    </Link>
  );
};

export default TicketButton;
