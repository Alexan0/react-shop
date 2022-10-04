import React from 'react';
import { Link } from 'react-router-dom';

import { clearItems } from '../redux/slices/basketSlice';
import { useSelector, useDispatch } from 'react-redux';

import { BasketItem, BasketEmpty } from '../components';

import '../assets/scss/style.scss';

const Basket = () => {
  const { totalCount, items } = useSelector(state => state.basket);
  const dispath = useDispatch();

  const onClickClearBasket = () => {
    if (window.confirm('Ты действительно хочешь очистить корзину?')) {
      dispath(clearItems())
    }
  }

  return (
    items.length === 0 ? <BasketEmpty /> : <div className='content-basket' >
      <div className="content-basket__top">
        <div className="content-basket__title">Корзина</div>
        <button onClick={onClickClearBasket} type='button' className="content-basket__clear">Очистить корзину</button>
      </div>
      <div className='content-basket__items'>
        {
          items.map((item) => (<BasketItem key={`${item.id}_${item.title}`} {...item} />))
        }
      </div>
      <div className="content-basket__total total-basket">
        <div className="total-basket__count">Всего вещей: <span>{items.length} шт.</span></div>
        <div className="total-basket__price">Сумма заказа: <span>{totalCount} $</span></div>
      </div>
      <div className='content-basket__bottom'>
        <Link to={'/'} className='content-basket__return'>Вернуться назад</Link>
        <button type='button' className='content-basket__pay'>Оплатить сейчас</button>
      </div>
    </div>
  )
}

export default Basket;