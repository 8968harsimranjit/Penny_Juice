import React from 'react';
import './Product.css';
import CardItem from './ProductItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h1 className="heading_2">Welcome to Our Shop!</h1>
          <ul className='cards__items'>
          <CardItem
              src = "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2011/07/14/Food/Images/food019_1310646961.jpg?t=20170517"
              text='Green Watermelon'
              path='/contacts'
            />
            <CardItem
              src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVCph1Dgtut3zNNuv9cs2m_KHALVUFLqllQ&usqp=CAU"
              text='Fresh Orange'
              path='/contact'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src = "https://food.unl.edu/recipes/strawberry-banana-smoothie.jpg"
              text='Strawberry Banana'
              para='A strawberry and banana smoothie is good for you because strawberries are rich in fiber, vitamins and antioxidants. They are among the top 20 most antioxidant-rich fruits. One serving of strawberries (about 8 berries) contains more vitamin C than an orange.Bananas are a good source of fiber, potassium and magnesium. Your body digests the sugar in a banana more slowly than refined sugars, so you get lasting energy, rather than a sugar rush and crash. Naturally-sweet bananas are a healthy way to satisfy your craving for sugar.' 
               path='/contact'
            />
            <CardItem
              src = "https://kitchenconfidante.com/wp-content/uploads/2015/01/Soothing-Hot-Apple-Berry-Ginger-Juice-www.kitchenconfidante.com-6821-500x500.jpg"
              text='Berry'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaSWJpIVlL7NbPUX9MkFRpDV_Ch34YRL1m6QuaS2t5wKYMtVc-49gA1OG8MSp8qDU8OE&usqp=CAU"
              text='Peach Mango'
              path='/contact'
            />
            <CardItem
              src = "https://www.mysequinedlife.com/wp-content/uploads/2014/11/cranberry-apple-margarita-2.jpg"
              text='Cran-Apple'
              path='contact'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5Qvcn4ZijRw6K7Cp9xUrcFDvZ-hCrRNOVw&usqp=CAU"
              text='Fruit Punch'
              path='/contact'
            />
            <CardItem
              src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IYisTZd0rhbHghiKk8IfC4_El6HdsmMlBw&usqp=CAU"
              text='White Grape'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;