import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

import './ImageSlider.scss';

const ImageSlider = React.memo(({ carouselImages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === carouselImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? carouselImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselImages.map((carouselImage) => {
    const { id, bannerImageUrl, bannerImageAlt } = carouselImage;
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={id}
      >
        <img
          loading='lazy'
          //  src= '../../static/images/offers/offer1.jpg'
          src={bannerImageUrl}
          alt={bannerImageAlt}
          width='100%'
          height='auto'
        />
      </CarouselItem>
    );
  });

  return (
    <div className='carousel-wrap'>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={carouselImages}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
        <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
      </Carousel>
    </div>
  );
});

ImageSlider.propTypes = {
  carouselImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      bannerImageUrl: PropTypes.string.isRequired,
      bannerImageAlt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImageSlider;
