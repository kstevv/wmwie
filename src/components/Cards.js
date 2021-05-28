import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <div>
        <ul className='cards__items'>
          <li>Sort by:</li>
          <li>Newest</li>
          <li>Popular</li>
          <li>Lowest Price</li>
          <li>Highest Price</li>
        </ul>
      </div>*/}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                src='images/light-up-beard-christmas-ornaments.jpeg'
                title='BEARDAMENTS Beard Lights'
                text='Get into the holiday spirit by decking out your fuzzy panty dropper with these eye-catching beard ornaments. Your beard will look downright fabulous complemented with these bright and festive holiday baubles that come in red, green, silver, and gold.'
                label='$14.99'
                path='/services'
              />
              <CardItem
                src='images/self-lighting-pipe.jpg'
                title='Self Lighting Pipe'
                text='If you’re looking for the ultimate on-the-go pipe, check out Solopipe. This excellently designed pipe comes with a sliding bowl cover as well as an adjustable butane lighter so that you can conveniently and quickly spark up when you’re on the move.'
                label='$40.00'
                path='/products'
              />
              <CardItem
                src='images/mini-claw-machine.jpg'
                title='Mini Claw Machine'
                text='Enjoy a classic arcade game at home with this desktop candy claw machine. Simply fill it up with your favorite candy and small toys, and go to town by clawing up the contents within! And best of all, it’s not rigged, so you can actually enjoy picking stuff up!'
                label='$39.99'
                path='/sign-up'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/light-up-beard-christmas-ornaments.jpeg'
              title='BEARDAMENTS Beard Lights'
              text='Get into the holiday spirit by decking out your fuzzy panty dropper with these eye-catching beard ornaments. Your beard will look downright fabulous complemented with these bright and festive holiday baubles that come in red, green, silver, and gold.'
              label='$40.00'
              path='/services'
            />
            <CardItem
              src='images/self-lighting-pipe.jpg'
              title='Self Lighting Pipe'
              text='If you’re looking for the ultimate on-the-go pipe, check out Solopipe. This excellently designed pipe comes with a sliding bowl cover as well as an adjustable butane lighter so that you can conveniently and quickly spark up when you’re on the move.'
              label='$40.00'
              path='/products'
            />
            <CardItem
              src='images/mini-claw-machine.jpg'
              title='Mini Claw Machine'
              text='Enjoy a classic arcade game at home with this desktop candy claw machine. Simply fill it up with your favorite candy and small toys, and go to town by clawing up the contents within! And best of all, it’s not rigged, so you can actually enjoy picking stuff up!'
              label='$39.99'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/light-up-beard-christmas-ornaments.jpeg'
              title='BEARDAMENTS Beard Lights'
              text='Get into the holiday spirit by decking out your fuzzy panty dropper with these eye-catching beard ornaments. Your beard will look downright fabulous complemented with these bright and festive holiday baubles that come in red, green, silver, and gold.'
              label='$14.99'
              path='/services'
            />
            <CardItem
              src='images/self-lighting-pipe.jpg'
              title='Self Lighting Pipe'
              text='If you’re looking for the ultimate on-the-go pipe, check out Solopipe. This excellently designed pipe comes with a sliding bowl cover as well as an adjustable butane lighter so that you can conveniently and quickly spark up when you’re on the move.'
              label='$40.00'
              path='/products'
            />
            <CardItem
              src='images/mini-claw-machine.jpg'
              title='Mini Claw Machine'
              text='Enjoy a classic arcade game at home with this desktop candy claw machine. Simply fill it up with your favorite candy and small toys, and go to town by clawing up the contents within! And best of all, it’s not rigged, so you can actually enjoy picking stuff up!'
              label='$39.99'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
