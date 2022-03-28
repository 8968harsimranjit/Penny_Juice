import React, {useState} from 'react';
import { Products } from './Products';
import{FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Product.css'

const Carousel =({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () =>{
    setCurrent(current === 0 ? length -1 : current -1);
  };

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (
    <section className = 'slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {Products.map((slide, index) => {
       return(
         <div
         className={index=== current ? 'slide active' : 'slide'}
         key={index}
         >
           {index === current && (
             <>
             <img src={slide.image} alt='juice box' className='image' />
             <h1 className='product__name'>{slide.heading}</h1>
            <p  className='product__details'>{slide.text}</p>
             </>
           )}
         </div>
       )
      }
      )}
    </section>
  );
};

export default Carousel;