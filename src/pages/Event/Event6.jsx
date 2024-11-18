import React, { useState } from "react";
import "./EventDetails.css";
import "../../pages/HomePage/HomePage.css";
import Navbar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
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

const Event6 = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const event = events[5];  // Event6

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
            {event.details && <p><strong>Details: {event.details}</strong></p>}
            <p>The Faculty of Science at KMITL proudly presents an exciting opportunity for high school students:<br></br>
            Xcer-SCIENCE@KMITL Science Learning Potential Development Camp”
            <br></br><br></br>
            Boost your brainpower and problem-solving skills through hands-on scientific experiments. This preparatory course offers practical experience in university laboratories, guided by dedicated professors and experienced scientists from the Faculty of Science at King Mongkut's Institute of Technology Ladkrabang.
            </p>
            <br></br>
            <li>Open for applications year-round! Form a group of at least 30 participants per activity and enjoy this enriching experience. Upon completion, participants will receive a certificate of achievement.</li><br></br>
            <p>For more information and registration fees, please contact:</p>
            <li>Assoc. Prof. Dr. Karoon Sadaon</li>
            <li>Email: karoon.sa@kmitl.ac.th</li>
            <li>Phone: 087-659-5254</li>
            <li>Website: <a href="http://www.science.kmitl.ac.th" target="_blank" rel="noopener noreferrer">http://www.science.kmitl.ac.th</a></li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event6;
