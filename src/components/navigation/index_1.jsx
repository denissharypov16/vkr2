import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../container'
import Image from '../image'
import Logo from "./../../images/logo.png"
import "./navigation.scss"
import Url from "./../link"
import Phone from "./../../images/icons/phone-icon.svg"
import Social from '../social'
import VK from "./../../images/icons/vk-icon.svg"
import Instagram from "./../../images/icons/instagram-icon.svg"
import TikTok from "./../../images/icons/tik-tok-icon.svg"
import Basket from "./../../images/icons/basket-icon.svg"
import Menu from "./../../images/icons/menu-icon.svg"
import CloseMenu from "./../../images/icons/close-menu.svg"
import Phone2 from "./../../images/icons/phone-icon-2.svg"
import NavbarMenu from './menu/menu'
import { Context } from '../../Context'
import BusketActive from './../../images/icons/busket-active-icon.svg'

export default function Navigation() {

    const {BusketFunc, busketStatus} = useContext(Context)
    const [stateMenu, setMenu] = useState(false)
    const SetMenuFunc = () => {
        setMenu(stateMenu => !stateMenu)
    }
    
    return (
        <nav className="Nav">
            <Container>
                <div className="Navigation__row">
                    <div className="Navigation__left">
                        <Link to="/" className='logo'>
                            <Image src={Logo} alt={"Logo Image"} />
                        </Link>

                        <div className="Navigation__link-wrapper">
                            <Url text={"Aonami-shop"} href={"#"} classes="Navigation__link Navigation__link-mobile" />
                        </div>
                    </div>
                    <div className="Navigation__right">
                        <div className="Navigation__social">
                            <Social href={"https://vk.com/"} classes={"Navigation__social-item"} src={VK} />
                        </div>
                        <div className="Navigation__option">
                            <button className="Navigation__option-item" onClick={()=> BusketFunc() } >
                                <Image src={busketStatus ? BusketActive : Basket} alt={"Basket icon"} />
                            </button>
                            <button onClick={SetMenuFunc} className="Navigation__option-item Navigation__option-menu">
                                <Image src={stateMenu ? CloseMenu : Menu} alt={"Menu icon"} />
                                <NavbarMenu classes={stateMenu ? "NavbarMenu-block" : ""} />
                            </button>
                            <Url href={"#!"} classes={"Navigation__option-item Navigation__option-item--mobile"} text={
                                <Image src={Phone2} alt={"Menu icon"} />
                            } />
                        </div>

                    </div>
                </div>
            </Container>
        </nav>
    )
}
