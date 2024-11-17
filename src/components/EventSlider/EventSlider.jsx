import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import event1 from '../../assets/events-2.PNG';
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
      name: 'Event1',
      img: event1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/events"
    },
    {
      name: 'Event2',
      img: event1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/events"
    },
    {
      name: 'Event3',
      img: event1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/events"
    },
    {
      name: 'Event4',
      img: event1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/events"
    },
    {
      name: 'Event5',
      img: event1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/events"
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
