import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/basketSlice';
import { showPopup } from '../../redux/slices/popupSlice';

import style from './Item.module.scss';

const Item = ({id, image, title, price, }) => {
	const dispath = useDispatch();
	const { popup } = useSelector(state => state.popup);

	const onClickAdd = () => {
		const item = {
			id,
			title,
			image,
			price,
		};
		dispath(addItem(item));
		dispath(showPopup(!popup));
	}

	return (
		<div className={style.column}>
			<div className={style.item}>
				<div className={style.image}>
					<img src={image} alt="photo" />
				</div>
				<div className={style.info}>
					<div className={style.title}>{title}</div>
					<div className={style.price}>{price}$</div>
					<div onClick={onClickAdd} className={style.button}>Купить</div>
				</div>
			</div>
		</div>
	)
}

export default Item;