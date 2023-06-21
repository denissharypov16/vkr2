    import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'

import "./product.scss"
import Params from '../../components/params'
import Container from '../../components/container'
import Heading from '../../components/heading'
import Image from '../../components/image'
import Card from '../../components/card'
import { productsArray } from '../../db'

// Image
import Fuel from "./../../images/icons/catalog/fuel-icon.svg"
import IP67 from "./../../images/icons/catalog/IP67-icon.svg"
import RTK from "./../../images/icons/catalog/RTK-icon.svg"
import Width from "./../../images/icons/catalog/width-icon.svg"
import Droneone from "./../../images/icons/card/droneone-icon.svg"
import Tree from "./../../images/icons/card/tree-icon.svg"
import Delivery from "./../../images/icons/delivery-icon.svg"
import Drone6 from "./../../images/icons/drone-6-icon.svg"
import Wallet from "./../../images/icons/card/wallet-icon.svg"
import Security from "./../../images/icons/security-icon.svg"
import Delete from "./../../images/icons/delete-icon.svg"
import SectionPic1 from "./../../images/products/product-4.jpeg"
import SectionPic2 from "./../../images/products/product-5.jpeg"
import SectionPic3 from "./../../images/products/product-6.jpeg"
import SectionPic4 from "./../../images/products/product-8.png"
import SectionPic5 from "./../../images/products/product-9.png"
import SectionPic6 from "./../../images/products/product-10.png"
import SectionPic7 from "./../../images/products/product-11.png"
import { Context } from '../../Context'

export default function Products() {

  const { title } = useParams()

  const { items, updateItemQuantity, addItem, removeItem } = useCart()

  const { NumberFormatterFunc, BusketFunc, notify } = useContext(Context)

  const [TotalPrice, setTotalPrice] = useState(0)
  const [accardion, setAccardion] = useState([])

  const AccardionList = [
    {
      id: 0,
      title: "Летательный аппарат",
    },

    {
      id: 1,
      title: "Основные характеристики",
    },

    {
      id: 2,
      title: "Функции БПЛА",
    },

    {
      id: 3,
      title: "Комплектация",
    },
    {
      id: 4,
      title: "Отдельно приобретаются",
    }
  ]

  useEffect(() => {
    setTotalPrice(0)
    setAccardion(AccardionList)
  }, [])

  return (
    <React.Fragment>
      <Params />

      <main className="inner">
        <section className="Product">
          <Container>
            <div className="Product__row">
              <div className="Product__images">
                {
                  items.map((item) => {

                    return item.title === title ? <React.Fragment key={item.id}>
                      <Image src={item.img} />
                      <Image src={item.img} classes={"small"} />
                      <Image src={item.img} classes={"small"} />
                      <Image src={item.img} classes={"small"} />
                    </React.Fragment> : ""
                  })
                }
              </div>
              <div className="Product__content">
                <div className="Product__titles">
                  <Heading heading={"h3"}> {title} </Heading>
                  <Heading>Артикуль: 12358</Heading>
                </div>

                <ul className="Product__list">
                  <li className='Product__item'>
                    <Image classes="Product__item-icon" src={Fuel} />
                    <p className='Product__item-text'>Ёмкость аккумулятора 4000Mah</p>
                  </li>

                  <li className='Product__item'>
                    <Image classes="Product__item-icon" src={Tree} />
                    <p className='Product__item-text'>Камера 12Мп</p>
                  </li>

                  <li className='Product__item'>
                    <Image classes="Product__item-icon" src={Width} />
                    <p className='Product__item-text'>Диагональ 6.1</p>
                  </li>

                  <li className='Product__item'>
                    <Image classes="Product__item-icon" src={IP67} />
                    <p className='Product__item-text'>Воднепроницаемость</p>
                  </li>
                </ul>

                <div className="Product__charactery">
                  <Heading heading={"h5"}>Все характеристики</Heading>

                  <div className="Product__charactery-wrap">
                    <p className="price">
                      {
                        items.map((item) => {
                          return item.title === title ? NumberFormatterFunc(item.price * item.quantity) : null
                        })
                      }
                      ₽
                    </p>

                    <div className="counter">
                      {
                        items.map((item) => {
                          return item.title === title ? <React.Fragment key={item.id}>
                            <button className='counter__button button-decreament' onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                            <span className="count">
                              {
                                item.quantity
                              }
                            </span>
                            <button className='counter__button button-increament' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                          </React.Fragment> : ""
                        })
                      }

                    </div>
                  </div>

                  <div className="Product__buttons">
                    {
                      items.map((item) => {
                        return item.title === title ? <React.Fragment key={item.id}>
                          <button className='Product__button' onClick={() => addItem(item)}>Добавить в корзину</button>
                          <button className='Product__button button-transparent' onClick={BusketFunc}>Купить в 1 клик</button>
                        </React.Fragment> : null
                      })
                    }
                  </div>
                </div>


              </div>
            </div>
          </Container>
        </section>

        <section className='Charactery'>
          <Container>
            <ul className="Product__charactery-list">
              <li className='Product__charactery-item'>
                <Card card={"card"} img={Delivery} title={"Бесплатная доставка"} body={"Купить квадрокоптер - получить бесплатную доставку"} />
              </li>

              <li className='Product__charactery-item'>
                <Card card={"card"} img={Drone6} title={"Пробный первый полет"} body={"Краткое обучение и техника безопасности"} />
              </li>

              <li className='Product__charactery-item'>
                <Card card={"card"} img={Wallet} title={"Гарантия лучшей цены"} body={"Лучшая цена от официального производителя "} />
              </li>

              <li className='Product__charactery-item'>
                <Card card={"card"} img={Security} title={"Официальная гарантия"} body={"На всю продукцию представленную в магазине"} />
              </li>
            </ul>
          </Container>
        </section>

        <section className='Often-bought'>
          <Container>
            <Heading heading={"h3"}>С этим товаром часто покупают </Heading>

            <div className="Often-bought__row">
              <div className="Often-bought__card">
                <Heading>Ваш товар</Heading>
                {
                  items.map((item) => {

                    return title === item.title ? <React.Fragment key={item.id}>
                      <Card card={"product"}
                        img={item.img}

                        title={item.title}

                        brand={item.brand}

                        model={item.model}

                        price={(item.price * item.quantity)}

                        path={"button"}

                        button={<React.Fragment>
                          <button className='counter__button button-decreament' onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                          <span className="count">
                            {
                              item.quantity
                            }
                          </span>
                          <button className='counter__button button-increament' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        </React.Fragment>}
                      />
                    </React.Fragment> : null
                  })
                }

              </div>
              {/* 
                @HayotbekIT todo 
              */}
              {
                productsArray.filter(category => { return category.category === "often bought" }).map((product) => {

                  return (
                    <React.Fragment key={product.id}>
                      <div className="Often-bought__card bought">
                        <button className='bought__delete-button' onClick={() => removeItem(product.id)}>
                          <Image src={Delete} />
                        </button>
                        <Card card={"product"}
                          img={product.img}

                          title={product.title}

                          brand={product.brand}

                          model={product.model}

                          price={(product.price * product.quantity)}

                          path={"button"}

                          button={<React.Fragment>
                            <button onClick={() => { notify(); addItem(product) }}>Добавить </button>
                          </React.Fragment>}
                        />
                      </div>
                    </React.Fragment>
                  )
                })
              }

              <div className="Often-bought__card price">
                <p className='purchase-price'> {TotalPrice}₽ </p>
                <button className='Product__button price__button'>Добавить в корзину</button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </React.Fragment>
  )
}
