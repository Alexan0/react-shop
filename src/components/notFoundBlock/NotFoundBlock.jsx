import React from 'react';
import { Link } from 'react-router-dom';

import iconShop from '../../assets/img/icon-shop.png'
import style from './NotFound.module.scss';

const NotFoundBlock = () => {
	return (
		<div className={style.wrap}>
			<div className={style.title}><span>404</span> Простите, страница не найдена</div>
			<div className={style.icon}>
				<img src={iconShop} alt="icon" />
			</div>
			<Link to='/' className={style.button}>Вернуться к покупкам</Link>
		</div>
	)
}

export default NotFoundBlock;