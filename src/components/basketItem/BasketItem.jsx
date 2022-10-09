import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/basketSlice';

import style from './BasketItem.module.scss';

const BasketItem = ({ id, title, image, price }) => {
	const dispath = useDispatch();

	const onClickRemoveItem = () => {
		if (window.confirm('Ты действительно хочешь удалить этот товар?')) {
			dispath(removeItem(id))
		}
	}
	return (
		<div className={style.item}>
			<Link to={`/item/${id}`} className={style.image}>
				<img src={image} alt="image-item" />
			</Link>
			<Link to={`/item/${id}`} className={style.title}>{title.length >= 30 ? title.slice(0, 30) + '...' : title}</Link>
			<div className={style.price}>{price}$</div>
			<button onClick={onClickRemoveItem} type='button' className={style.delete}>Удалить</button>
		</div>
	)
}

export default BasketItem;