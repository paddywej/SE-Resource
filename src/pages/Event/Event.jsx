import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import "leaflet/dist/leaflet.css";
import bloodDonation from "../../assets/blood-donation.png";
import itOpenHouse from "../../assets/it-open-house.png";
import agriWorkshop from "../../assets/agritech-workshop.png";
import sciOpenHouse from "../../assets/science-open-house.png";
import iaaiConference from "../../assets/iaai-conference.png";
import xcerScience from "../../assets/xcer-science.png";

const events = [
  {
    id: 1,
    title: "Blood Donation",
    date: "Nov 22, 2024",
    time: "11:00 - 15:00",
    details:
      "Inviting students, staff and the general public. Join in doing good by donating blood.",
    location: "Main Auditorium, KMITL",
    image: bloodDonation,
  },
  {
    id: 2,
    title: "Agritech Workshop",
    date: "Nov 29, 2024",
    location: "Faculty of Agricultural Technology, KMITL",
    details: "Future of Agricultural Science.",
    image: agriWorkshop,
  },
  {
    id: 3,
    title: "Science KMITL Open House",
    date: "Nov 30, 2024",
    location: "Faculty of Science, KMITL",
    details: "Explore experiments and meet faculty.",
    image: sciOpenHouse,
  },
  {
    id: 4,
    title: "IAAI International Conference – 2024",
    date: "Dec 11th–13th, 2024",
    details: "Aerospace and aviation symposium.",
    image: iaaiConference,
  },
  {
    id: 5,
    title: "IT Open House 2024",
    date: "Dec 13-14, 2024",
    location: "IT Faculty Building, KMITL.",
    details: "IT Ladkrabang Open House 2024: “Beyond the Star”",
    image: itOpenHouse,
  },
  {
    id: 6,
    title: "Xcer-SCIENCE KMITL",
    date: "Dec 31, 2024",
    details: "Science learning potential development camp",
    image: xcerScience,
  },
];

const Event = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleEventClick = (id) => {
    navigate(`/event${id}`); // Navigate to event-specific page
  };

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

      <div className={"events-container"}>
        <h1 className={"header1-class"}>Upcoming Events</h1>
        <div className="events-grid">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card"
              onClick={() => handleEventClick(event.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
              <div className="event-details">
                <h2>{event.title}</h2>
                <p className="event-date">{event.date}</p>
                {event.time && <p className="event-time">{event.time}</p>}
                {event.location && (
                  <p className="event-location">{event.location}</p>
                )}
                {event.details && (
                  <p className="event-description">{event.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
