import React, { useEffect, useState } from 'react';
import "./catalog.scss";
import { productsArray } from '../../db';

import Header from '../../components/header';
import Heading from '../../components/heading';
import Image from '../../components/image';
import Params from "./../../components/params";
import Container from '../../components/container';
import SectionTitle from '../../components/section-title';
import Card from '../../components/card';

import Background from "./../../images/catalog/bg-image.jpeg";
import Time from "./../../images/icons/card/time-icon.svg";
import Fly from "./../../images/icons/card/fly-icon.svg";
import Width from "./../../images/icons/catalog/width-icon.svg";
import Drone3 from "./../../images/icons/card/drone-3-icon.svg";


const sortProductsByPriceDesc = (products) => {
    return [...products].sort((a, b) => b.price - a.price);
};

export default function Catalog() {
    const [advantages] = useState([
        {
            id: 0,
            text: "Гарантия на 12 месяцев",
            icon: Time
        },
        {
            id: 1,
            text: "Одна из самых быстрых моделей",
            icon: Fly
        },
        {
            id: 3,
            text: "Диагональ экрана 6.1",
            icon: Width
        },
    ]);

    const [products, setProducts] = useState([]);
    const [selectedSorting, setSelectedSorting] = useState("all");
    const [selectedBrands, setSelectedBrands] = useState([]); // добавляем selectedBrands state

    useEffect(() => {
        setProducts(sortProductsByPriceDesc(productsArray));
    }, []);

    return (
        <React.Fragment>
            <Header title={"Смартфон Apple iPhone 14 уже у нас!"} bg={Background} classes={"Catalog"}>
                <div className="Catalog__advantage">
                    {advantages.map((advantage) => {
                        const { id, icon, text } = advantage;
                        return (
                            <div className="advantage__item" key={id}>
                                <Image classes={"advantage__icon"} src={icon} />
                                <p className="advantage__text">{text}</p>
                            </div>
                        );
                    })}
                </div>
            </Header>

            <Params />

            <main className="inner">
                <section className="Catalog-products">
                    <Container>
                        <div className="Catalog-products__titles">
                            <SectionTitle title={"Наши предложения"} />
                        </div>

                        <div className="Catalog-products__row">
                            <aside className="Catalog-products__side">
                                <Heading heading={"h4"}> Категории </Heading>
                                <ol className="side__list">
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__1"
                                                   checked={selectedBrands.includes("Apple")} // обрабатываем состояние checkbox для бренда Apple
                                                   onChange={() => {
                                                       setSelectedBrands(brands => brands.includes("Apple")
                                                           ? brands.filter(brand => brand !== "Apple")
                                                           : brands.concat("Apple"))
                                                   }} />
                                            <p className="side__text"> Apple </p>
                                        </div>
                                    </li>
                                    <li className="side__item__xiaomi">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__2"
                                                   checked={selectedBrands.includes("Xiaomi")} // обрабатываем состояние checkbox для бренда Xiaomi
                                                   onChange={() => {
                                                       setSelectedBrands(brands => brands.includes("Xiaomi")
                                                           ? brands.filter(brand => brand !== "Xiaomi")
                                                           : brands.concat("Xiaomi"))
                                                   }} />
                                            <p className="side__text"> Xiaomi </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__3"
                                                   checked={selectedBrands.includes("Samsung")} // обрабатываем состояние checkbox для бренда Samsung
                                                   onChange={() => {
                                                       setSelectedBrands(brands => brands.includes("Samsung")
                                                           ? brands.filter(brand => brand !== "Samsung")
                                                           : brands.concat("Samsung"))
                                                   }} />
                                            <p className="side__text"> Samsung </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__4"
                                                   checked={selectedBrands.includes("Huawei")} // обрабатываем состояние checkbox для бренда Huawei
                                                   onChange={() => {
                                                       setSelectedBrands(brands => brands.includes("Huawei")
                                                           ? brands.filter(brand => brand !== "Huawei")
                                                           : brands.concat("Huawei"))
                                                   }} />
                                            <p className="side__text"> Huawei </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__5"
                                                   checked={selectedBrands.length === 0} // обрабатываем состояние checkbox для выбора всех брендов
                                                   onChange={() => {
                                                       setSelectedBrands(selectedBrands.length > 0 ? [] : ["Apple", "Xiaomi", "Samsung", "Huawei"])
                                                   }} />
                                            <p className="side__text"> Все </p>
                                        </div>
                                    </li>
                                </ol>

                                <form
                                    className="Catalog__filter"
                                    onSubmit={(e) => e.preventDefault()}>
                                    <Heading heading={"h4"}> Цена </Heading>
                                    <label className="label">
                                        <select
                                            className="Catalog__select"
                                            id="Catalog_select"
                                            value={selectedSorting}
                                            onChange={(e) => setSelectedSorting(e.target.value)}>
                                            <option value="all" className={"Catalog__sorting price__sorting__all"}>
                                                Все
                                            </option>
                                            <option value="asc" className={"Catalog__sorting price__sorting__asc"}>
                                                По возрастанию
                                            </option>
                                            <option value="desc"
                                                    className={"Catalog__sorting price__sorting__desc"}>
                                                По убыванию
                                            </option>
                                        </select>
                                    </label>
                                </form>
                            </aside>

                            <div className="product__cards" id="product__cards">
                                {products
                                    .filter((category) => category.category !== "often bought")
                                    .filter(product => selectedBrands.length === 0 || selectedBrands.includes(product.brand)) // фильтруем продукты по бренду
                                    .sort((a, b) =>
                                        selectedSorting === "asc"
                                            ? a.price - b.price
                                            : selectedSorting === "desc"
                                                ? b.price - a.price
                                                : 0
                                    )
                                    .map((product) => {
                                        const { img, title, brand, model, price, id } = product;
                                        return (
                                            <Card
                                                path={`/products/${title}`}
                                                brand={brand}
                                                model={model}
                                                price={price}
                                                title={title}
                                                key={id}
                                                img={img}
                                                card={"product"}
                                                obj={product}
                                            ></Card>
                                        );
                                    })}
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </React.Fragment>
    );
}