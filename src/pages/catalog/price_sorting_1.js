//вариант с фильтрацией по возрастанию цены
import React, { useEffect, useState } from 'react';
import "./catalog.scss";
import { productsArray } from '../../db';
import "./model_sorting";

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
    const [selectedSorting, setSelectedSorting] = useState("all"); // добавляем selectedSorting state

    useEffect(() => {
        setProducts(sortProductsByPriceDesc(productsArray)); // сортируем продукты при их загрузке
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
                                            <input type="checkbox" id="checkbox__opt__1" />
                                            <p className="side__text"> Apple </p>
                                        </div>
                                    </li>
                                    <li className="side__item__xiaomi">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__2" />
                                            <p className="side__text"> Xiaomi </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__3" />
                                            <p className="side__text"> Samsung </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__4" />
                                            <p className="side__text"> Huawei </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            <input type="checkbox" id="checkbox__opt__5" />
                                            <p className="side__text"> Все </p>
                                        </div>
                                    </li>
                                </ol>

                                <form
                                    className="Catalog__filter"
                                    onSubmit={(e) => e.preventDefault()}>
                                    <Heading heading={"h4"}> Быстрая сортировка </Heading>
                                    <label className="label">
                                        <select
                                            className="Catalog__select"
                                            id="Catalog_select"
                                            value={selectedSorting} // добавляем значение selectedSorting
                                            onChange={(e) => setSelectedSorting(e.target.value)} // обрабатываем изменение значения select
                                            >
                                            <option value="all" className={"Catalog__sorting price__sorting__all"}>
                                                Все
                                            </option>
                                            <option value="asc" className={"Catalog__sorting price__sorting__asc"}>
                                                По возрастанию
                                            </option>
                                            <option value="desc" // добавляем значение "desc" для сортировки по убыванию цены
                                                className={"Catalog__sorting price__sorting__desc"}>
                                                По убыванию
                                            </option>
                                        </select>
                                    </label>
                                    <Heading heading={"h4"}> Цена </Heading>
                                    <label className="label label--wrap">
                                        <input type="number" className="input__number" placeholder="От" />
                                        <input type="number" className="input__number" placeholder="До" />
                                        <button type='submit'>Фильтровать</button>
                                    </label>
                                </form>
                            </aside>

                            <div className="product__cards" id="product__cards">
                                {products
                                    .filter((category) => category.category !== "often bought")
                                    .sort((a, b) =>
                                        selectedSorting === "asc" // сортируем по возрастанию цены, если выбрано "asc"
                                            ? a.price - b.price
                                            : selectedSorting === "desc" // сортируем по убыванию цены, если выбрано "desc"
                                                ? b.price - a.price
                                                : 0 // не сортируем, если выбрано "all"
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



//Начальный вариант
import React, { useEffect, useState } from 'react';
// Import
import "./catalog.scss";
import { productsArray } from '../../db';
// import ProductCards from "./price_sorting";
import "./model_sorting";
// import "./option_color-change"

// Components
import Header from '../../components/header';
import Heading from '../../components/heading';
import Image from '../../components/image';
import Params from "./../../components/params";
import Container from '../../components/container';
import SectionTitle from '../../components/section-title';
import Card from '../../components/card';

// Images
import Background from "./../../images/catalog/bg-image.jpeg";
import Time from "./../../images/icons/card/time-icon.svg";
import Fly from "./../../images/icons/card/fly-icon.svg";
import Width from "./../../images/icons/catalog/width-icon.svg";
import Drone3 from "./../../images/icons/card/drone-3-icon.svg";


export default function Catalog() {
    const [advantages] = useState([
        {
            id: 0,
            text: "Гарантия на 12 месяцев ",
            icon: Time
        },
        {
            id: 1,
            text: "Одна из самых быстрых моделей ",
            icon: Fly
        },
        {
            id: 3,
            text: "Диагональ экрана 6.1",
            icon: Width
        },
    ]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsArray);
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
                                <p className="advantage__text"> {text} </p>
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
                            <SectionTitle title={"Наши предложения"}/>
                        </div>



                        {/*сортировка чекбоксом по модели*/}
                        <div className="Catalog-products__row">
                            <aside className="Catalog-products__side">
                                <Heading heading={"h4"}> Категории </Heading>
                                {/* List */}
                                <ol className="side__list">
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            {/*<Image classes={"side__icon"} src={Drone3} />*/}
                                            <input type="checkbox" id="checkbox__opt__1"/>
                                            <p className="side__text"> Apple </p>
                                        </div>
                                    </li>
                                    <li className="side__item__xiaomi">
                                        <div className="side__item-wrap">
                                            {/*<Image classes={"side__icon"} src={Drone3} />*/}
                                            <input type="checkbox" id="checkbox__opt__2"/>
                                            <p className="side__text"> Xiaomi </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            {/*<Image classes={"side__icon"} src={Drone3} />*/}
                                            <input type="checkbox" id="checkbox__opt__3"/>
                                            <p className="side__text"> Samsung </p>
                                        </div>
                                    </li>
                                    <li className="side__item">
                                        <div className="side__item-wrap">
                                            {/*<Image classes={"side__icon"} src={Drone3} />*/}
                                            <input type="checkbox" id="checkbox__opt__4"/>
                                            <p className="side__text"> Huawei </p>
                                        </div>
                                    </li>
                                </ol>





                                {/*Сортировка комбобоксом по цене*/}
                                {/* // List */}
                                <form className="Catalog__filter" onSubmit={(e) => e.preventDefault()}>
                                    <Heading heading={"h4"}> Быстрая сортировка </Heading>
                                    <label className="label">
                                        <select className="Catalog__select" id="Catalog_select">
                                            <option value="all" className={"Catalog__sorting  price__sorting__all"}>Все</option>
                                            <option value="all" className={"Catalog__sorting  price__sorting__asc"}>По возрастанию</option>
                                            <option value="all" className={"Catalog__sorting  price__sorting__desc"}>По убыванию</option>
                                        </select>
                                        <div className="icon"></div>
                                    </label>
                                    <Heading heading={"h4"}> Цена </Heading>
                                    <label className="label label--wrap">
                                        <input type="number" className="input__number" placeholder="От" />
                                        <input type="number" className="input__number" placeholder="До" />
                                        <button type='submit'>Фильтровать</button>
                                    </label>
                                </form>
                            </aside>





                            <div className="product__cards" id="product__cards">
                                {products
                                    .filter((category) => category.category !== "often bought")
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

//варинат с берндированием через радио чекбоксы
import React, { useEffect, useState } from 'react';
import "./catalog.scss";
import { productsArray } from '../../db';
import "./model_sorting";

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

    const uniqueBrands = productsArray.reduce((brands, product) => {
        if (!brands.includes(product.brand)) {
            brands.push(product.brand);
        }
        return brands;
    }, []);

    const [selectedBrand, setSelectedBrand] = useState("all");
    const [selectedSorting, setSelectedSorting] = useState("all");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(sortProductsByPriceDesc(productsArray));
    }, []);

    const handleChangeBrand = (event) => {
        setSelectedBrand(event.target.value);
    }

    const filteredProducts = products.filter(product => {
        if (selectedBrand === "all") {
            return true;
        } else {
            return product.brand === selectedBrand;
        }
    })

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
                                    {uniqueBrands.map((brand, index) => {
                                        return (
                                            <li className="side__item" key={index}>
                                                <div className="side__item-wrap">
                                                    <input
                                                        type="radio"
                                                        id={`checkbox__opt__${index}`}
                                                        name="brand"
                                                        value={brand}
                                                        checked={selectedBrand === brand}
                                                        onChange={handleChangeBrand} />
                                                    <p className="side__text">{brand}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ol>

                                <form
                                    className="Catalog__filter"
                                    onSubmit={(e) => e.preventDefault()}>
                                    <Heading heading={"h4"}> Быстрая сортировка </Heading>
                                    <label className="label">
                                        <select
                                            className="Catalog__select"
                                            id="Catalog_select"
                                            value={selectedSorting}
                                            onChange={(e) => setSelectedSorting(e.target.value)}
                                        >
                                            <option value="all" className={"Catalog__sorting price__sorting__all"}>
                                                Все
                                            </option>
                                            <option value="asc" className={"Catalog__sorting price__sorting__asc"}>
                                                По возрастанию
                                            </option>
                                            <option value="desc" className={"Catalog__sorting price__sorting__desc"}>
                                                По убыванию
                                            </option>
                                        </select>
                                    </label>
                                    <Heading heading={"h4"}> Цена </Heading>
                                    <label className="label label--wrap">
                                        <input type="number" className="input__number" placeholder="От" />
                                        <input type="number" className="input__number" placeholder="До" />
                                        <button type='submit'>Фильтровать</button>
                                    </label>
                                </form>
                            </aside>
                            <div className="product__cards" id="product__cards">
                                {filteredProducts
                                    .filter((category) => category.category !== "often bought")
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


//вариант через чекбоксы
import React, { useEffect, useState } from 'react';
import "./catalog.scss";
import { productsArray } from '../../db';
import "./model_sorting";

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
                                    <Heading heading={"h4"}> Быстрая сортировка </Heading>
                                    <label className="label">
                                        <select
                                            className="Catalog__select"
                                            id="Catalog_select"
                                            value={selectedSorting}
                                            onChange={(e) => setSelectedSorting(e.target.value)}
                                        >
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
                                    <Heading heading={"h4"}> Цена </Heading>
                                    <label className="label label--wrap">
                                        <input type="number" className="input__number" placeholder="От" />
                                        <input type="number" className="input__number" placeholder="До" />
                                        <button type='submit'>Фильтровать</button>
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