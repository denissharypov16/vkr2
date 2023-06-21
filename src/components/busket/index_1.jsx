import React, { useContext, useEffect, useState } from 'react';
import './busket.scss';
import { useCart } from 'react-use-cart';
import Heading from '../heading';
import Close from './../../images/icons/close-menu.svg';
import Image from '../image';
import Container from '../container';
import Delete from './../../images/icons/delete-default-icon.svg';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import BusketDronde from './../../images/icons/busket-drone.png';

export default function Busket() {
    const { busketStatus, BusketFunc, NumberFormatterFunc } = useContext(Context);
    const [price, setPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const CheckEmptyFunc = () => {
        if (isEmpty) {
            return (
                <React.Fragment>
                    <div className="Busket__empty">
                        <Image src={BusketDronde} classes={'Busket__empty-image'} />
                        <div className="Busket__empty-desc">
                            <Heading heading={'h3'}>Корзина пуста</Heading>
                            <Link to={'/catalog'} className="Busket__empty-link">
                                Продолжить покупки
                            </Link>
                        </div>
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                {/* Product List */}
                <ul className="Busket__list">
                    {items.map((item) => {
                        const { id, title, brand, price, quantity, img } = item;
                        return (
                            <React.Fragment key={id}>
                                <li className="Busket__item">
                                    <div className="Busket__imageholder">
                                        <Image src={img} />
                                    </div>

                                    <div className="item__desc">
                                        <Heading heading={'h4'}>{title}</Heading>
                                        <Heading>Артикуль: {brand}</Heading>
                                    </div>

                                    <div className="item__wrap">
                                        <div className="counter">
                                            <button
                                                className="counter__button button-decreament"
                                                onClick={() =>
                                                    updateItemQuantity(id, quantity - 1)
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="count">{quantity}</span>
                                            <button
                                                className="counter__button button-increament"
                                                onClick={() =>
                                                    updateItemQuantity(id, quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>

                                        <p className="price">
                                            {NumberFormatterFunc(price * quantity)} ₽
                                        </p>

                                        <button
                                            className="remove-icon"
                                            onClick={() => removeItem(id)}
                                        >
                                            <Image src={Delete} alt={'error'} />
                                        </button>
                                    </div>
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
                {/* // Product List */}

                <div className="Busket__bottom">
                    <Link to={'/catalog'} className="Busket__link">
                        Продолжить покупки
                    </Link>

                    <div className="Busket__bottom-wrap">
                        <div className="total-price">
                            <span>Всего:</span>{' '}
                            <b className="price">{NumberFormatterFunc(price)} ₽</b>
                        </div>

                        <button
                            className="Busket__button"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    const handleFormSubmit = () => {
        // отправка формы
        setIsModalOpen(false);
        setIsConfirmationOpen(true);
    };

    useEffect(() => {
        let totalPrice = 0;
        items.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        setPrice(totalPrice);
    }, [items]);

    return (
        <div className={`Busket ${busketStatus ? '' : 'hidden'} `}>
            <Container>
                <div className="Busket__wrap">
                    <div className="Busket__content">
                        {/* Top */}
                        <div className="Busket__top">
                            <Heading heading={'h3'}>Корзина</Heading>

                            <button className="close" onClick={() => BusketFunc()}>
                                <Image src={Close} alt={'error'} />
                            </button>
                        </div>
                        {/* //Top */}

                        {CheckEmptyFunc()}

                        {isModalOpen && (
                            <div className="modal">
                                <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                  <Image src={Close} alt={'error'} />
                {/*&times;*/}
              </span>
                                    <h1 className="modal__head-text">
                                        Введите вашу почту. Мы свяжемся с вами для оформления заказа.
                                    </h1>
                                    <input className="modal__input" type="text" placeholder="Ваша почта" />
                                    <button className="modal__btn btn__send" type="submit" onClick={handleFormSubmit}>
                                        Отправить заявку
                                    </button>
                                </div>
                            </div>
                        )}

                        {isConfirmationOpen && (
                            <div className="confirmation">
                                <p>Спасибо за вашу заявку!</p>
                                <button onClick={() => setIsConfirmationOpen(false)} className="confirmation__btn btn__close">
                                    Закрыть
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}