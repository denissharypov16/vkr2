import React, { useState } from 'react'
// Style
import "./company.scss"

// Components
import Header from "./../../components/header"
import Heading from '../../components/heading'
import Image from "./../../components/image"
import Params from "./../../components/params"
import SectionTitle from '../../components/section-title'
import Card from '../../components/card'
import Container from '../../components/container'
import ArrowOpacity from '../../components/arrow-opacity'

// Images
import Background from "./../../images/about/background.jpg"
import Drone from "./../../images/icons/drone_flying-2-icon.svg"
// import Form from '../../components/form'

export default function Company() {

    const [advantages] = useState([
        {
            id: 0,
            title: "Мы работаем ради вас.",
            text: "Самая новая техника уже у нас."
        },
        {
            id: 1,
            title: "Экономия",
            text: "Мы продаем технику по справедливым ценам."
        },
        {
            id: 2,
            title: "Авторитет.",
            text: "Компания заслужила свою популярность среди множества покупателей."
        }
    ])

    return (
        <React.Fragment>
            <Header title={"О компании Aomiami"} bg={Background} classes={"Company"}>
                <Heading>
                    Наш дружный коллектив занимается продажей техники и консультацией гостей. Если у вас встал трудный выбор - обратитесь к одному из работников, вам обязательно помогут !
                </Heading>
                <div className="Company__drone">
                    <Image src={Drone} />
                </div>

                <div className="Company__advantage">
                    {
                        advantages.map((advantage) => {
                            const { id, title, text } = advantage
                            return (
                                <React.Fragment key={id}>
                                    <div className="advantage__item">
                                        <Heading heading={"h4"} classes={"advantage__title"}>{title}</Heading>
                                        <p className='advantage__text'> {text} </p>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </Header>

            <Params />

            <main className='inner'>
                <section className='Company__desc'>
                    <Container>
                        <div className="Company__text">
                            <p>
                                Наша компания является ведущим онлайн-ритейлером, специализирующимся на продаже высококачественной техники через наш интернет-магазин. Мы предлагаем широкий ассортимент продукции.

                                Наша цель - сделать покупку техники максимально удобной и доступной для наших клиентов. Мы предлагаем удобный интерфейс сайта, который позволяет легко найти нужные товары, ознакомиться с их характеристиками и сравнить различные модели. Мы также предлагаем подробные описания продукции, фотографии и отзывы пользователей, чтобы помочь нашим клиентам принять осознанное решение о покупке.

                                Кроме того, мы гарантируем высокое качество всех продуктов, которые мы продаем.Мы работаем только с надежными производителями и поставщиками, чтобы обеспечить нашим клиентам надежную и долговечную технику.Все наши товары проходят тщательную проверку качества, чтобы убедиться, что они соответствуют самым высоким стандартам. 
                            </p>

                            <ArrowOpacity />
                        </div>
                    </Container>
                </section>
            </main>
        </React.Fragment>
    )
}
