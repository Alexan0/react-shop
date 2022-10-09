import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/slices/basketSlice';

import style from './Item.module.scss';

const Item = ({ id, image, title, price, showPopup }) => {
	const dispath = useDispatch();

	const onClickAdd = () => {
		const item = {
			id,
			title,
			image,
			price,
		};
		dispath(addItem(item));
		showPopup()
	}

	return (
		<div className={style.column}>
			<div className={style.item}>
				<Link to={`item/${id}`}>
					<div className={style.image}>
						<img src={image} alt="photo" />
					</div>
				</Link>
				<div className={style.info}>
					<Link to={`item/${id}`}><div className={style.title}>{title}</div></Link>
					<div className={style.price}>{price}$</div>
					<div onClick={onClickAdd} className={style.button}>Купить</div>
				</div>
			</div>
		</div>
	)
}

export default Item;