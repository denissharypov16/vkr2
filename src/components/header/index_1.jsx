import React from 'react'
import Container from '../../components/container'
import Heading from '../../components/heading'
import Background1 from "./../../images/header/background-1.jpeg"
import "./header.scss"
import DroneFlying from "./../../images/icons/drone-flying-icon.svg"
import Image from "./../image"

export default function Header(props) {

    const HomeContentFunc = () => {
        return (
            <React.Fragment>
                <div className="header__content-advantage">
                    <div className="advantage__wrap">
                        <div className="advantage__title"> > 4000</div>
                        <div className="advantage__text">единиц техники</div>
                    </div>
                    <div className="advantage__wrap">
                        <div className="advantage__title">20%</div>
                        <div className="advantage__text">экономии средств</div>
                    </div>
                    <div className="advantage__wrap">
                        <div className="advantage__title">2 года гарантии</div>
                        <div className="advantage__text">На любой товар</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    const { bg = Background1, title, children = HomeContentFunc(), classes = "" } = props

    return (
        <React.Fragment>
            <header className={`section-header header--md ${classes}`} style={{ backgroundImage: `url(${bg})`, }} >
                <div className="header-wrapper">
                    <Container>
                        <div className="header__content">
                            <Heading heading={"h1"} classes="header__title" >
                                {
                                    title
                                }
                            </Heading>
                            {
                                children
                            }
                        </div>
                    </Container>
                </div>
            </header>
            <header className={`section-header header--sm ${classes}`} style={{ backgroundImage: `url(${bg})`, }} >
                <div className="header-wrapper">
                    <Container>
                        <div className="header__content--sm"></div>
                    </Container>
                </div>
            </header>
            <div className={classes}>
                <Container>
                    <div className="header__content--sm__content">
                        <Heading heading={"h1"} classes="header__title" >
                            {
                                title
                            }
                        </Heading>
                        {
                            children
                        }
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}