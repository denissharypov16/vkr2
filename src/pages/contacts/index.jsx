import React from 'react'
import "./contact.scss"
import Params from '../../components/params'
import SectionTitle from '../../components/section-title'
import Container from '../../components/container'
import Map from "./../../images/contacts/city-map.jpg"
import Image from '../../components/image'
import Heading from '../../components/heading'
import Drone from "./../../images/icons/drone_flying-2-icon.svg"

export default function Contact() {
    return (
        <React.Fragment>
            <Params />
            <main className='inner'>

                <section className='Contact'>
                    <Container className='Container-left'>
                        <SectionTitle title={"Как с нами связаться"} subtitle={"Контакты"} />
                        
                        <div className="Contact__row">

                            <div className="Contact__content">
                                <Heading heading={"h3"}>AgroScout</Heading>

                                <div className="Contact__info">
                                    <Heading heading={"h4"}>Наш адрес:</Heading>
                                    <Heading>Россия, г. Москва</Heading>
                                </div>

                                <div className="Contact__info">
                                    <Heading heading={"h4"}>Наш адрес:</Heading>
                                    <Heading>Россия, г. Москва</Heading>
                                </div>

                                <div className="Contact__icon">
                                    <Image src={Drone} alt="error" />
                                </div>

                                <div className="Contact__buttons">
                                    <button className="button">
                                        Написать нам
                                    </button>
                                </div>
                            </div>
                            <Image classes={"Contact__map"} src={Map} />
                        </div>
                    </Container>
                </section>
            </main>
        </React.Fragment>
    )
}
