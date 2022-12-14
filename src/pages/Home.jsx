import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { showItems } from '../redux/slices/showItemsSlice';

import { Item, Loading } from '../components';

import closeIcon from '../assets/img/icons8-close.svg';
import iconShop from '../assets/img/icon-shop.png';
import '../assets/scss/style.scss';

const Home = () => {
  const dispath = useDispatch();
  const { moreItems } = useSelector(state => state.showItems);
  const { searchText } = useSelector(state => state.search);

  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [popup, setPopup] = React.useState(false)

  const showMoreItems = () => {
    dispath(showItems(moreItems))
  }

  const showPopup = () => {
    document.body.style.overflow = "hidden"
    setPopup(!popup)
  }

  const hiddenPopup = () => {
    setPopup(!popup)
    document.body.style.overflow = "auto"
  }

  const getItems = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products?limit=${searchText ? '' : moreItems}`);
      setItem(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(true)
      alert('Ошибка загрузки данных, приносим свои извинения')
    }
  }

  React.useEffect(() => {
    getItems()
  }, [moreItems, searchText])

  const items = item.filter((obj) => {
    if (obj.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true
    } else {
      return false
    }
  })
    .map((obj) => (
      <Item key={`${obj.id}-${obj.title}`} {...obj} showPopup={showPopup} />
    ))

  return (
    <>
      <div className='content-catalog'>
        {
          loading ? <Loading /> : items
        }
        {
          loading ? '' : items.length === 0 && <div className='content-catalog__not-found'>
            <img src={iconShop} alt="icon" />
            <span>К сожалению, такого товара у нас нет</span>
          </div>
        }
      </div>
      {
        !searchText && <div className={loading ? 'content-catalog__button-hidden' : 'content-catalog__button'}>
          <button onClick={showMoreItems} type='button'>Показать еще</button>
        </div>
      }
      {
        popup &&
        <div className='popup'>
          <div className='popup__body'>
            <div className='popup__content'>
              <div className='popup__info'>
                <div className='popup__title'>Товар добавлен в корзину!</div>
                  <Link to={'/basket'} onClick={hiddenPopup} className='popup__button'>Перейте в корзину</Link>
              </div>
                <img src={closeIcon} onClick={hiddenPopup} className='popup__close' alt="icon-close" />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Home;