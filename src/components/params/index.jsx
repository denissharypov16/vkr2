import React from 'react'
import Home from "../../pages/Home";
import Entofomagi from "../../pages/entofomagi";
import { Link, useLocation, useParams } from 'react-router-dom';
import "./params.scss"
import Container from '../container';
import News from '../../pages/news';
import Spraying from "../../pages/spraying"
import Company from '../../pages/about';
import Catalog from '../../pages/catalog';
import Products from '../../pages/products';
import NotFound from '../../pages/notfound';
import Contact from '../../pages/contacts';

export const paramsArray = [
    {
        id: 0,
        path: "/",
        page: <Home />,
        title: "Главная"
    },

    {
        id: 1,
        path: "/entofomagi/",
        page: <Entofomagi />,
        title: "Энтомофаги"
    },

    {
        id: 2,
        path: "/news/",
        page: <News />,
        title: "Новости"
    },

    {
        id: 3,
        path: "/spraying/",
        page: <Spraying />,
        title: "Опрыскивание"
    },


    {
        id: 5,
        path: "/company/",
        page: <Company />,
        title: "О компании",
    },

    {
        id: 6,
        path: "/catalog/",
        page: <Catalog />,
        title: "Каталог продукции",
    },

    {
        id: 7,
        path: "/products/:title/",
        page: <Products />,
        title: "Каталог продукции",
    },

    {
        id: 8,
        path: "*",
        page: <NotFound />,
        title: "Сайт не найдено",
    },

    {
        id: 9,
        path: "/contacts/",
        page: <Contact />,
        title: "Контакты",
    },
]

export default function Params() {
    const location = useLocation()
    const { title } = useParams()

    if (title) {
        return (
            <section className='Params'>
                <Container>
                    <Link to={"/"} className='Params__link Params__home'>Главная </Link> \

                    <Link to={"/catalog"} className='Params__link Params__home'>Товар</Link> \
                    {
                        title ? <span className='Params__link Params__path'> {title} </span> : ""
                    }
                </Container>
            </section>
        )
    } else {
        return (
            <section className='Params'>
                <Container>
                    <div className="Params__row">
                        <Link to={"/"} className='Params__link Params__home'>Главная </Link> <span>/</span>
                        {
                            paramsArray.map((param) => {
                                return (
                                    <React.Fragment key={param.id}>
                                        {
                                            location.pathname === param.path ? <span className='Params__link Params__path'> {param.title} </span> : ""
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        )
    }
}
