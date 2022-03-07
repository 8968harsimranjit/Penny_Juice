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
              path='/services'
            />
            <CardItem
              src='https://previews.123rf.com/images/maridav/maridav1505/maridav150500264/40366249-femme-tenant-bo%C3%AEte-de-livraison-de-bouteilles-de-jus-de-fruits-et-de-l%C3%A9gumes-fra%C3%AEchement-press%C3%A9es-%C3%A0-.jpg'
              text='Fast and Easy service'
              path='/products'
            />
            <CardItem
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2015/02/juice-main-1-1451561402.jpg?crop=1xw:0.789xh;center,top&resize=480:*'
              text='Best Quality At Best Price'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;