import React, { useState } from "react";

const RSVPForm = ({ onRSVP }) => {
  const [rsvpData, setRsvpData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRsvpData({ ...rsvpData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRSVP(rsvpData);
    setRsvpData({ name: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">RSVP for Event</h2>
      <input
        type="text"
        name="name"
        value={rsvpData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        value={rsvpData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        required
      />
      <button
        type="submit"
        className="w-full bg-[#60752f] text-white py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
      >
        RSVP
      </button>
    </form>
  );
};

export default RSVPForm;
