import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../assets/button left.png';
import rightArrow from '../../assets/button right.png';
import "./NewsSlider.css"; 
import news1 from "../../assets/news1.jpg"
import news2 from "../../assets/news1-2.png"
import news3 from "../../assets/news3.jpg"
import news4 from "../../assets/news4.jpg"
import news5 from "../../assets/news5.jpg"
import news6 from "../../assets/news6.jpg"

const NewsSlider = () => {
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
      name: 'International AI Hackathon',
      img: news1,
      review: 'KMITL, the University of Queensland, and NIA co-organized the 2024 AI Hackathon.',
      nav : "/news1"
    },
    {
      name: 'Direct Admission 2025',
      img: news2,
      review: 'The Direct Admission 1-1 (Early Round) for the 2025 academic year is officially open!',
      nav : "/news2"
    },
    {
      name: 'Computer Game Talk',
      img: news3,
      review: 'Navigating the Future of Gaming in the UK and Thailand.',
      nav : "/news3"
    },
    {
      name: 'Double Degree at Glasgow',
      img: news4,
      review: 'The Double Degree collaboration between KMITL and the U. of Glasgow.',
      nav : "/news4"
    },
    {
      name: 'Double Degree at Queensland',
      img: news5,
      review: 'The Double Degree collaboration between KMITL and the U. of Queensland.',
      nav : "/news5"
    },
    {
      name: 'University Roadshow',
      img: news6,
      review: 'University Roadshow at K-Engineering International Education Fair 2024',
      nav : "/news6"
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

export default NewsSlider;
