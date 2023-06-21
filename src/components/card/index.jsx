import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Heading from '../heading'
import Url from '../link'
import Image from "./../image"
import "./cards.scss"
import { Context } from '../../Context'

export default function Card(props) {
    const { card, img, title, body, brand, model, price, array, classes = '', subtitle, path = "/products", button, obj } = props

    const { addItem } = useCart()
    const { NumberFormatterFunc } = useContext(Context)

    switch (card) {
        case "card":
            return (
                <div className='card card__default'>
                    <div className="card__default-top">
                        <div className="card__default-icon">
                            <Image src={img} alt={"Error upload"} />
                        </div>
                        <Heading heading={"h3"} classes={"card__default-title"}>{title}</Heading>
                    </div>
                    <div className="card__default-text">
                        <p>{body}</p>
                    </div>
                </div>
            )

        case "product":
            return (
                <div className="card card__product">
                    <div className="card__product-imageholder">
                        <Image src={img} alt={"Error upload"} />
                    </div>
                    <div className="card__product-desc">
                        <Heading heading={"h3"} classes={"card__product-title"}>{title}</Heading>
                        <ul className='card__product-list'>
                            <li className='card__product-item'>Бренд: {brand}</li>
                            <li className='card__product-item'>Модель: {model}</li>
                        </ul>
                        <p className='card__product-price'>{NumberFormatterFunc(price)}₽</p>

                        <div className="card__product-buttons">
                            {
                                path === "button" ? <div className='counter'>{button}</div> : <Link to={path} className='card__product-button' onClick={() => addItem(obj)} >Добавить в корзину</Link>
                            }
                        </div>
                    </div>

                </div>
            )

        case "news-card":
            return (
                <div className='card news-card'>
                    <div className="news-card__imageholder">
                        <Image src={img} />
                    </div>
                    <div className="news-card__content">
                        <Heading heading={"h3"} classes={"news-card__title"}>{title}</Heading>
                        <div className="news-card__text">
                            {`${body.substr(0, 308)}...`}
                        </div>
                        <Link className='news-card__link' to="/news/">
                            Читать полностью
                        </Link>
                    </div>
                </div>
            )

        case "check-list":
            return (
                <div className='card check-list'>
                    <div className="check-list__top">
                        <Image src={img} />

                        <Heading heading={"h3"} classes={""}>{title}</Heading>
                    </div>
                    <ul className='check-list--list'>
                        {
                            array.map((item, index) => {
                                return (
                                    <li className={`check-list__item ${classes}`} key={index}> {item} </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )

        case "check-list-work":
            return (
                <div className='card check-list-work'>
                    <div className="check-list-work__imageholder">
                        <Image src={img} />

                    </div>

                    <div className="check-list-work__content">
                        <Heading heading={"h3"} classes={""}>{title}</Heading>

                        <ul className='check-list--list'>
                            {
                                array.map((item, index) => {
                                    return (
                                        <li className={`check-list__item ${classes}`} key={index}> {item} </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            )

        case "about":
            return (
                <React.Fragment>
                    <div className='card card-about'>
                        <div className="card-about__imageholder">
                            <Image src={img} />
                        </div>

                        <div className="card-about__wrap">
                            <Heading heading={"h3"}>
                                {title}
                            </Heading>

                            <Heading> {subtitle} </Heading>

                            <p className="card-about__desc"> {body} </p>
                        </div>
                    </div>
                </React.Fragment>
            )
        default:
            console.log("error")
            break;
    }
}
