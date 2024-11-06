import { useState } from "react";
import axios from "axios";

const RSVPForm = ({ eventId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/rsvp", { eventId, name, email });
    alert("RSVP Successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <button type="submit">RSVP</button>
    </form>
  );
};

export default RSVPForm;
