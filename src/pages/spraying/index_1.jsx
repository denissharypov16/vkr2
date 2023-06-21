import Header from "../../components/header"
import Heading from "../../components/heading"
import "./spraying.scss"
import BgSpraying from "./../../images/spraying/bg-image.jpg"
import Params from "./../../components/params"

import React, { useEffect, useState } from 'react'
import SectionTitle from "../../components/section-title"
import Container from "../../components/container"
import ArrowOpacity from "../../components/arrow-opacity"
import Card from "../../components/card"
import Wallet from "./../../images/icons/card/wallet-icon.svg"
import Efficacy from "./../../images/icons/card/dron-icon.svg"
import Time from "./../../images/icons/card/time-icon.svg"
import Spray from "./../../images/icons/card/spray-icon.svg"
import Tractor from "./../../images/icons/card/tractor-icon.svg"
import Fly from "./../../images/icons/card/fly-icon.svg"
import Work1 from "./../../images/img/img-2.png"
import Work2 from "./../../images/img/img-3.png"
import Form from "../../components/form"


export const CheckListObject = {
    advantage: [
        {
            title: "Экономия",
            data: [
                "Снижение расхода препаратов до 30%",
                "Проведение работ без уплотнения почвы +5-10% к урожаю",
                "Обработка высоких культур без повреждений",
                "Операционные издержки— экономия на использовании ГСМ, заработной платы и обслуживании техники"
            ],
            img: Wallet,
            status: true
        },

        {
            title: "Эффективность",
            data: [
                "Работаем по любой геометрии поля",
                "Возможность работать на влажных грунтах, на крутых склонах, под линиями электропередач, вблизи населенных пунктов и водоемов",
                "Большее количество капель на единицу площади",
                "Отсутствует необходимость подвоза большого количества воды",
                "Обработка листа со всех сторон"
            ],
            img: Efficacy,
            status: true
        },

        {
            title: "Оперативность",
            data: [
                "Возможность защиты ваших растений до 1000 га за рабочую смену",
                "Круглосуточный режим работы",
                "Плановые и внеплановые обработки по требованию"
            ],
            img: Time,
            status: true
        }
    ],

    flaws: [
        {
            title: "Ручные опрыскиватели",
            data: [
                "Низкая скорость обработки",
                "Низкая производительность труда",
                "Опасно для здоровья"
            ],
            img: Spray,
            status: false
        },

        {
            title: "Опрыскивание трактором",
            data: [
                "Нежелательное уплотнение почвы",
                "Не обрабатывают поля со сложным рельефом",
                "Большой расход воды и химикатов",
                "Невозможность работы в рисовых чеках"
            ],
            img: Tractor,
            status: false
        },

        {
            title: "Опрыскивание авиацией",
            data: [
                "Необходимость согласования работ",
                "Скорость обработки одним БПЛА до 30 га/час",
                "Высокая стоимость"
            ],
            img: Fly,
            status: false
        }
    ],

    work: [
        {
            title: "Стандартная форсунка:",
            data: [
                "Размер капли 250-400 микрон",
                "Большой расход воды",
                "Скатывание капли на землю"
            ],
            img: Work1,
            status: false
        },

        {
            title: "Форсунка УМО",
            data: [
                "Размер капли 80-150 микрон",
                "Более эффективное проникновение рабочего раствора",
                "Препарат оседает на листьях и стеблях не попадая в почву"
            ],
            img: Work2,
            status: true
        },
    ]
}

export default function Spraying() {

    const [advantage, setAdvantage] = useState([])
    const [flaws, setFlaws] = useState([])
    const [work, setWork] = useState([])

    useEffect(() => {
        setAdvantage(CheckListObject.advantage)
        setFlaws(CheckListObject.flaws)
        setWork(CheckListObject.work)
    }, [])

    return (
        <React.Fragment>
            <Header bg={BgSpraying} classes={"Spraying"} title={"Опрыскивание полей Дронами"}>
                <Heading>
                    Внесение  средств защиты  при помощи БПЛА повышают урожай, экономят время и находят самые эффективные решения по обработке полей.
                </Heading>
            </Header>

            <Params />

            <main className="inner Spraying-inner">
                <section className="About-service">
                    <Container>
                        <div className="About-service__titles">
                            <SectionTitle title={"Об Услуге"} subtitle={"Ультрамалообъемное опрыскивание дронами"} />
                        </div>

                        <div className="About-service__text">
                            <p>
                                Внесение средств защиты растений (СЗР) с помощью дронов является более точным по сравнению с традиционными способы внесения, позволяет обработку поля на этапах развития, когда доступ наземных опрыскивателей не возможен, а также позволяет точечную обработку очагов болезней.
                            </p>

                            <ArrowOpacity />
                        </div>
                    </Container>
                </section>

                <section className={"Advantage"}>
                    <Container>
                        <div className="Advantage__titles">
                            <SectionTitle title={"Положительные стороны"} subtitle={"Преимущества опрыскивания с помощью БПЛА"} />
                        </div>

                        <div className="Advantage__row">

                            {
                                advantage.map((item, id) => {
                                    const { title, data, status, img } = item

                                    return (
                                        <React.Fragment key={id} >
                                            <Card card={"check-list"} img={img} title={title} array={data} classes={status ? "" : "false"} />
                                        </React.Fragment>
                                    )
                                })
                            }


                        </div>
                    </Container>
                </section>

                <section className="Flaws">
                    <Container>
                        <div className="Flaws__titles">
                            <SectionTitle title={"Негативные  стороны"} subtitle={"Недостатки традиционных методов опрыскивания"} />
                        </div>

                        <div className="Flaws__row">
                            {
                                flaws.map((item, id) => {
                                    const { title, data, status, img } = item

                                    return (
                                        <React.Fragment key={id} >
                                            <Card card={"check-list"} img={img} title={title} array={data} classes={status ? "" : "false"} />
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </Container>
                </section>

                <section className="Work">
                    <Container>
                        <div className="Work__titles">
                            <SectionTitle title={"Как это работает"} subtitle={" Дробление капли форсункой"} />
                        </div>

                        <div className="Work__row">
                            {
                                work.map((item, id) => {
                                    const { title, data, status, img } = item

                                    return (
                                        <React.Fragment key={id} >
                                            <Card card={"check-list-work"} img={img} title={title} array={data} classes={status ? "" : "false"} />
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </Container>
                </section>

                <Form />
            </main>
        </React.Fragment>
    )
}
