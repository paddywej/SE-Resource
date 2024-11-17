import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import new1 from '../../assets/news.png';
import leftArrow from '../../assets/button left.png';
import rightArrow from '../../assets/button right.png';
import "./NewsSlider.css"; 

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
      name: 'News1',
      img: new1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/news"
    },
    {
      name: 'News2',
      img: new1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/news"
    },
    {
      name: 'News3',
      img: new1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/news"
    },
    {
      name: 'News4',
      img: new1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/news"
    },
    {
      name: 'News5',
      img: new1,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      nav : "/news"
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
