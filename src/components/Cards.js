import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Rainbows of exciting colors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src = "https://cache.desktopnexus.com/thumbseg/2388/2388450-bigthumbnail.jpg"
              text='100% Juice concentrate'
              path='/products'
            />
            <CardItem
              src='https://www.chowhound.com/a/img/resize/169be54d8e7bcfac2d9cb8784fcf3a589cccaaff/2018/08/healthy-homemade-juice-box-recipe-chowhound-670x502.jpg?fit=bounds&width=800'
              text='Healthy Juice for Everyone'
              path='/products'
            />
          </ul>
          <h1 className='heading_2'>What we offer?</h1>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeetbQ0NOdRSrgBfz3xY8xQstJMQHxJdk41Q&usqp=CAU'
              text='Get Juice Concentrates in a variety of Flavors'
              para='Get delicious and nutritious 100% fruit juice from Penny Juice of America. We provide 100% blended fruit juice concentrates that are specially made for kids and meet all the requirements of the FDA with regard to subsidy and nutrition.'
              path='/contact'
            />
            <CardItem
              src='https://previews.123rf.com/images/maridav/maridav1505/maridav150500264/40366249-femme-tenant-bo%C3%AEte-de-livraison-de-bouteilles-de-jus-de-fruits-et-de-l%C3%A9gumes-fra%C3%AEchement-press%C3%A9es-%C3%A0-.jpg'
              text='Fast and Easy service'
              para=' Penny Juice greatly reduces storage and handling requirements. 1 gallon pre-measured mix pitchers available to assure cost control and flavor consistency'
              path='/contact'
            />
            <CardItem
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2015/02/juice-main-1-1451561402.jpg?crop=1xw:0.789xh;center,top&resize=480:*'
              text='Best Quality At Best Price'
              para='15 flavors available including 7 color free flavors. Each case contains 6 - ½ gallon bottles of your choice. We’ve designed them especially for childcare, daycare, preschool, basp and extended daycare.'
              path='/contact'
            />
          </ul>
          <h1 className="heading_2">Visit Our Shop!</h1>
          <ul className='cards__items'>
          <CardItem
              src = "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2011/07/14/Food/Images/food019_1310646961.jpg?t=20170517"
              text='Green Watermelon'
              path='/products'
            />
            <CardItem
              src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVCph1Dgtut3zNNuv9cs2m_KHALVUFLqllQ&usqp=CAU"
              text='Fresh Orange'
              path='/products'
            />
            <CardItem
              src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaSWJpIVlL7NbPUX9MkFRpDV_Ch34YRL1m6QuaS2t5wKYMtVc-49gA1OG8MSp8qDU8OE&usqp=CAU"
              text='Peach Mango'
              path='/products'
            />
            <CardItem
              src = "https://www.mysequinedlife.com/wp-content/uploads/2014/11/cranberry-apple-margarita-2.jpg"
              text='Cran-Apple'
              path='/products'
            />
            
          </ul>
          <ul className='cards__items'>
          
          <CardItem
              src = "https://food.unl.edu/recipes/strawberry-banana-smoothie.jpg"
              text='Strawberry Banana'
              path='/products'
            />
            <CardItem
              src = "https://kitchenconfidante.com/wp-content/uploads/2015/01/Soothing-Hot-Apple-Berry-Ginger-Juice-www.kitchenconfidante.com-6821-500x500.jpg"
              text='Berry'
              path='/products'
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5Qvcn4ZijRw6K7Cp9xUrcFDvZ-hCrRNOVw&usqp=CAU"
              text='Fruit Punch'
              path='/products'
            />
            <CardItem
              src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IYisTZd0rhbHghiKk8IfC4_El6HdsmMlBw&usqp=CAU"
              text='White Grape'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;