import React from 'react';
import axios from 'axios';
import { useParams ,Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/basketSlice';

import { Loading, NotFoundBlock} from '../components';

import closeIcon from '../assets/img/icons8-close.svg';

const ItemPage = () => {
	const dispath = useDispatch();
	const { id } = useParams();

	const [currentItem, setCurrentItem] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [popup, setPopup] = React.useState(false)

	const onClickAdd = () => {
		dispath(addItem(currentItem));
		showPopup()
	}

	const showPopup = () => {
		document.body.style.overflow = "hidden"
		setPopup(!popup)
	}

	const hiddenPopup = () => {
		setPopup(!popup)
		document.body.style.overflow = "auto"
	}

	const getItem = async () => {
		try {
			const res = await axios.get('https://fakestoreapi.com/products/' + id);
			setCurrentItem(res.data)
			setLoading(false)
		} catch (error) {
			alert('Ошибка загрузки данных, приносим свои извинения')
		}
	}

	React.useEffect(() => {
		getItem();
	}, [id])

	return (
		<>
			{currentItem ?
				loading ? <Loading /> :
					<div className='current-item'>
						<div className="current-item__row">
							<div className="current-item__image">
								<img src={currentItem.image} alt="image" />
							</div>
							<div className="current-item__info">
								<div className="current-item__title">{ currentItem.title}</div>
								<div className="current-item__text">{ currentItem.description}</div>
								<div className="current-item__price">{ currentItem.price} $</div>
								<div className="current-item__buttons">
									<Link to={'/'} className="current-item__button">На главную</Link>
									<button type='button' onClick={onClickAdd} className="current-item__button-pay">Купить</button>
								</div>
							</div>
						</div>
					</div>
				: <NotFoundBlock/>
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

export default ItemPage;