import React from 'react';
import { SliderItem, Wrapper } from './LayoutBanner.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div className='slider-container'>
        <Slider {...settings}>
          <div>
            <SliderItem src='/images/layout/viual.jpg' />
          </div>
          <div>
            <SliderItem src='/images/layout/viual.jpg' />
          </div>
          <div>
            <SliderItem src='/images/layout/viual.jpg' />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
