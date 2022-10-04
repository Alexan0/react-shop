import React from 'react';
import { Link } from 'react-router-dom';

import iconShop from '../../assets/img/icon-shop.png'
import style from './BasketEmpty.module.scss'

const BasketEmpty = () => {
	return (
		<div className={style.wrap}>
			<div className={style.title}>Упссс, кажется ваша корзина пуста</div>
			<div className={style.icon}>
				<img src={iconShop} alt="icon" />
			</div>
			<Link to='/' className={style.button}>Вернуться к покупкам</Link>
		</div>
	)
}

export default BasketEmpty;