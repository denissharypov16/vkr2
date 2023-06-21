import React from 'react'
import "./menu.scss"
import Home from "./../../../images/icons/navigation-icon/home-icon.svg"
import Drones from "./../../../images/icons/navigation-icon/drones-icon.svg"
import News from "./../../../images/icons/navigation-icon/news-icon.svg"
import Company from "./../../../images/icons/navigation-icon/company-icon.svg"
import Phone from "./../../../images/icons/navigation-icon/phone-icon.svg"
import WA from "./../../../images/icons/whatsapp-icon.svg"
import Telegram from "./../../../images/icons/telegram-icon.svg"
import Wechat from "./../../../images/icons/wechat-icon.svg"
import { Link } from 'react-router-dom'

export default function NavbarMenu(props) {
  const { classes } = props

  const navItems = [
    {
      id: 1,
      icon: Home,
      text: "Главная",
      link: "/"
    },
    {
      id: 5,
      icon: Drones,
      text: "Каталог продукции",
      link: "/catalog/"
    },
    {
      id: 7,
      icon: Company,
      text: "О компании",
      link: "/company/"
    }
  ]
  return (
    <ul className={'NavbarMenu ' + classes}>
      {
        navItems.map((navItem) => {
          const { id, icon, text, link } = navItem
          return (
            <li className='NavbarMenu__item' key={id} >
              <Link to={link} className='NavbarMenu__link'>
                <div className="NavbarMenu__icon">
                  <img src={icon} alt={text} />
                </div>
                <div className="NavbarMenu__text">{text}</div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
