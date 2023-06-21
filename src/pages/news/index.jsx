import React, { useEffect, useState } from 'react'
import Params from '../../components/params'
import SectionTitle from '../../components/section-title'
import Container from '../../components/container'
import "./news.scss"
import News1 from "./../../images/news/1.jpeg"
import News2 from "./../../images/news/2.jpeg"
import News3 from "./../../images/news/3.jpeg"
import Image from '../../components/image'
import Heading from '../../components/heading'
import Url from '../../components/link'

export const newsArray = [
    {
        id: 0,
        image: News1,
        date: "22/04/2019 00:00",
        title: "Опрыскивание растений с беспилотников",
        body: `Опрыскивание с дронов может проводиться как минимум в двух форматах: “классическом авиационном”, когда химикаты распыляются по всему полю, и “точечном”, совмещенным, например, с предварительным осмотром посевов при помощи мультиспектральных камер.`,
        link: "#!"
    },

    {
        id: 1,
        image: News2,
        date: "10/04/2019 00:00",
        title: "Дроны – будущее сельского хозяйства",
        body: `Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА)..`,
        link: "#!"
    },

    {
        id: 2,
        image: News3,
        date: "14/03/2019 00:00",
        title: "Зачем нужны беспилотники в сельском хозяйстве?",
        body: `Использование дронов в земледелии и в целом в сельском хозяйстве - одно из наиболее перспективных направлений применения этой технологии. БЛА могут быть эффективно использованы для планирования и контроля этапов сельскохозяйственного производства, а также для химической обработки посевов и других растений.`,
        link: "#!"
    }
]

export default function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        setNews(newsArray)
    }, [])

    return (
        <React.Fragment>

            <Params />

            <main className='inner News'>

                <Container>

                    <div className="News__titles">
                        <SectionTitle title={"Что у нас нового?"} subtitle={"Новости"} />
                    </div>

                    <div className="News__row">
                        {
                            news.map((newsItem, index) => {
                                const { image, date, title, body, link } = newsItem
                                return (
                                    <div className="News__item" key={index}>
                                        <div className="News__item-wrapper">
                                            <div className="News__imageholder">
                                                <Image src={image} />
                                            </div>

                                            <div className="News__desc">
                                                <p className="News__date">{date}</p>

                                                <Heading heading={"h4"}>{title}</Heading>

                                                <p className='News__text'>{body}</p>

                                                <Url href={link} classes={"News__link"}>
                                                    Читать полностью
                                                </Url>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })
                        }

                        <div className="News__pages-numbers">
                            <button className="News__page active">1</button>
                            <button className="News__page">2</button>
                            <button className="News__page">3</button>
                            <button className="News__page">4</button>
                        </div>

                    </div>

                </Container>

            </main>
        </React.Fragment>
    )
}
