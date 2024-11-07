import React, { useState } from "react";

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
      imageUrl: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Create New Event
      </h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Event Title"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Event Description"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        required
      ></textarea>
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        className="w-full bg-[#60752f] text-white py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
