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
                        <Url text={"+7-861-217 91 18"} href={"tel:+7-861-217 9118"} classes="footer__link" />

                    </div>
                    <div className="footer__right">
                        <p className='footer__text'>Подписывайтесь на наши соц. сети</p>
                        <div className="footer__socials">
                            <Social href={"https://vk.com/"} classes={"footer__social-item"} src={VK} />
                            <Social href={"https://www.instagram.com/"} classes={"footer__social-item"} src={Instagram} />
                            <Social href={"https://www.tiktok.com/"} classes={"footer__social-item"} src={TikTok} />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}