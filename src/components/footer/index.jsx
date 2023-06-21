import React from 'react'
import Container from "./../container"
import "./footer.scss"
import Logo from "./../../images/logo.png"
import Url from '../link'
import Image from '../image'
import VK from "./../../images/icons/vk-icon.svg"
import Instagram from "./../../images/icons/instagram-icon.svg"
import TikTok from "./../../images/icons/tik-tok-icon.svg"
import Social from '../social'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__row">
                    <div className="footer__left">
                        <Url href={"#"} classes={"footer__logo logo"} text={
                            <Image src={Logo} />
                        } />
                        <Url text={"+79231648892"} href={"tel:+79231648892"} classes="footer__link" />

                    </div>
                    <div className="footer__right">
                        <p className='footer__text'>Подписывайтесь на наши соц.сети</p>
                        <div className="footer__socials">
                            <Social href={"https://vk.com/aomiami"} classes={"footer__social-item"} src={VK} />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
