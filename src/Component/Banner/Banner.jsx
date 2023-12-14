import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import banner2 from '../../assets/banner2.png';
// import banner3 from '../../assets/banner3.png';
// import banner4 from '../../assets/banner4.png';
import img1 from '../../assets/instalacion1.jpeg'
import img2 from '../../assets/instalacion2.jpeg'
import img3 from '../../assets/instalacion3.jpeg'
import img4 from '../../assets/instalacion4.jpeg'
import './banner.css';

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-container"> {/* Contenedor principal */}
    <h1 id='title'>Nuestras Instalaciones</h1>
    
      <Slider {...settings}>
        {/* <div>
          <img src={banner2} alt="Banner 2" className="slider-image" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" className="slider-image" />
        </div>
        <div>
          <img src={banner4} alt="Banner 4" className="slider-image" />
        </div> */}
         <div>
          <img src={img1} alt="Banner 2" className="slider-image" />
        </div>
        <div>
          <img src={img2} alt="Banner 3" className="slider-image" />
        </div>
        <div>
          <img src={img3} alt="Banner 4" className="slider-image" />
        </div>
        <div>
          <img src={img4} alt="Banner 4" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
}
