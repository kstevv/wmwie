import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div>
          <div className='cards__item__link' >
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Travel'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h3 className='cards__item__title'>{props.title}</h3>
              <p className='cards__item__text'>{props.text}</p>
            </div>
            <Link className="btn btn-primary purchaseBtn" to={props.path}>Check It Out</Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
