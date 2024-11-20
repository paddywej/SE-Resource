import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import event1 from "../../assets/blood-donation.png";
import event2 from "../../assets/agritech-workshop.png";
import event3 from "../../assets/science-open-house.png";
import event4 from "../../assets/iaai-conference.png";
import event5 from "../../assets/it-open-house.png";
import event6 from "../../assets/xcer-science.png";
import leftArrow from '../../assets/button left.png';
import rightArrow from '../../assets/button right.png';
import "./EventSlider.css"; 

const EventSlider = () => {
  const navigate = useNavigate();

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <img src={leftArrow} className="slick-prev" alt="Previous" />,
    nextArrow: <img src={rightArrow} className="slick-next" alt="Next" />,
  };
  

  const data = [
    {
      name: 'Blood Donation',
      img: event1,
      review: 'Inviting everyone to join in doing good by donating blood.',
      nav : "/event1"
    },
    {
      name: 'Agritech Workshop',
      img: event2,
      review: 'Inviting students to attend the Faculty of Agriculture Open House.',
      nav : "/event2"
    },
    {
      name: 'Science KMITL Open House',
      img: event3,
      review: "Inviting students to attend the Faculty of Science Open House.",
      nav : "/event3"
    },
    {
      name: 'IAAI International Conference – 2024',
      img: event4,
      review: 'Aerospace & aviation symposium.',
      nav : "/event4"
    },
    {
      name: 'IT Open House 2024',
      img: event5,
      review: 'IT Ladkrabang Open House 2024: “Beyond the Star.”',
      nav : "/event5"
    },
    {
      name: 'Xcer-SCIENCE KMITL',
      img: event6,
      review: 'Science learning potential development camp.',
      nav : "/event6"
    },
  ];

  return (
    <div className="slider-container2">
      <div className="slider-wrapper">
        <Slider {...settings2}>
          {data.map((d) => (
            <div key={d.name} className="news-slide">
              <div className="slide-header">
                <img src={d.img} alt="" className="slide-image" />
              </div>
              <div className="slide-content">
                <p className="slide-title">{d.name}</p>
                <p className="slide-review">{d.review}</p>
                <button 
                  className="slide-button" 
                  onClick={() => navigate(d.nav)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventSlider;
