import React from 'react';
import { Link } from 'react-router-dom';

import { clearItems } from '../redux/slices/basketSlice';
import { useSelector, useDispatch } from 'react-redux';

import { BasketItem, BasketEmpty } from '../components';

import closeIcon from '../assets/img/icons8-close.svg';
import '../assets/scss/style.scss';

const Basket = () => {
  const { totalCount, items, deliveryCost } = useSelector(state => state.basket);
  const dispath = useDispatch();

  const [popupPay, setPopupPay] = React.useState(false);
  const [popupInfo, setPopupInfo] = React.useState(false);
  const [timeActive, setTimeActive] = React.useState(0);

  const choiseTime = ['10:00 - 13:00', '13:00 - 17:00', '17:00 - 21:00', '21:00 - 00:00'];
  const totalOrder = +totalCount + +deliveryCost;

  const onClickChoiseTime = (i) => {
    setTimeActive(i)
  }

  const showPopup = () => {
    document.body.style.overflow = "hidden"
    setPopupPay(!popupPay)
  }

  const hiddenPopup = () => {
    document.body.style.overflow = "auto"
    setPopupPay(false)
    setPopupInfo(false);
  }

  const payPtoducts = () => {
    setPopupInfo(!popupInfo);
  }

  const productsPaid = () => {
    document.body.style.overflow = "auto"
    setPopupPay(false)
    setPopupInfo(false);
    dispath(clearItems())
  }

  const onClickClearBasket = () => {
    if (window.confirm('Ты действительно хочешь очистить корзину?')) {
      dispath(clearItems())
    }
  }

  return (
    items.length === 0 ? <BasketEmpty /> :
      <>
        <div className='content-basket' >
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
            <div className="total-basket__row">
              <div className="total-basket__count">Всего вещей: <span>{items.length} шт.</span></div>
              <div className="total-basket__count">Стоимость доставки: <span>{totalCount > 20 ? 'Доставка бесплатно!' : deliveryCost + ' $'}</span></div>
            </div>
            <div className="total-basket__price">Сумма заказа: <span>{totalCount > 20 ? totalCount : totalOrder} $</span></div>
          </div>
          <div className='content-basket__bottom'>
            <Link to={'/'} className='content-basket__return'>Вернуться назад</Link>
            <button type='button' onClick={showPopup} className='content-basket__pay'>Оплатить сейчас</button>
          </div>
        </div>
        {
          popupPay &&
          <div className='popup'>
            <div className='popup__body'>
              <div className='popup__content'>
                <div className='popup__info'>
                  <div className='popup__title'>Заполните данные</div>
                  <div className="popup__label">К оплате <span>{totalCount > 20 ? totalCount : totalOrder}</span> $</div>
                  <input className='popup__input' type="text" placeholder='Адрес' />
                  <input className='popup__input' type="number" placeholder='Укажите ваш номер телефона' />
                  <input className='popup__input' type="number" placeholder='Номер карты' />
                  <div className="popup__label">Выберете удобное время для доставки:</div>
                  <ul className="popup__list">
                    {
                      choiseTime.map((choiseName, choiseIndex) => (
                        <li
                          onClick={() => onClickChoiseTime(choiseIndex)}
                          className={timeActive === choiseIndex ? 'popup__item popup__item active' : 'popup__item'}
                          key={`${choiseName}_${choiseIndex}`}
                        >
                          {choiseName}
                        </li>
                      ))
                    }
                  </ul>
                  <button onClick={payPtoducts} type='button' className="popup__button button-basket-popup">Оплатить</button>
                </div>
                <img src={closeIcon} onClick={hiddenPopup} className='popup__close close-basket-popup' alt="icon-close" />
              </div>
            </div>
          </div>
        }
        {
          popupInfo &&
          <div className='popup'>
            <div className='popup__body'>
              <div className='popup__content'>
                
                  <div className="popup__info">
                    <div className='popup__title'>Спасибо за ваш заказ!</div>
                    <div className="popup__label">Наш курьер свяжется с вами &#128579;</div>
                  </div>
                  <img src={closeIcon} onClick={productsPaid} className='popup__close close-basket-popup' alt="icon-close" />
              </div>
            </div>
          </div>
        }
      </>
  )
}

export default Basket;