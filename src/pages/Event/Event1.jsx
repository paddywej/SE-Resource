import React, { useState } from "react";
import "./EventDetails.css";
import "../../pages/HomePage/HomePage.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Contact from "../../components/Contact/Contact";
import bloodDonation from "../../assets/blood-donation.png";
import itOpenHouse from "../../assets/it-open-house.png";
import agriWorkshop from "../../assets/agritech-workshop.png";
import sciOpenHouse from "../../assets/science-open-house.png";
import iaaiConference from "../../assets/iaai-conference.png";
import xcerScience from "../../assets/xcer-science.png";

// Event data
const events = [
    {
      id: 1,
      title: "Blood Donation",
      date: "Nov 22, 2024",
      time: "11:00 - 15:00",
      details: "Inviting students, staff and the general public. Join in doing good by donating blood.",
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

const Event1 = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const event = events[0];  // Event1

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} />

      <div className="event-detail-container">
        <h1>{event.title}</h1>
        <div className="event-details">
          <img src={event.image} alt={event.title} className="event-image" />
          <div className="event-info">
            <p><strong>Date:</strong> {event.date}</p><br></br>
            {event.time && <p><strong>Time:</strong> {event.time}</p>}<br></br>
            {event.location && <p><strong>Location:</strong> {event.location}</p>}<br></br>
            {event.details && <p><strong>Details:</strong> {event.details}</p>}<br></br>
            <p><strong>Safety: </strong>Team of doctors and nurses ready to serve safely.</p><br></br>
            <p><strong>Don't forget to: </strong>Grab lots of snacks and souvenirs!</p><br></br>
          </div>
        </div> 
      </div>
      <Contact handleLoginClick={handleLoginClick} />
    </>
  );
};

export default Event1;
