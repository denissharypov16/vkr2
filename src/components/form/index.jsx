import React from 'react'
import Container from '../container'
import SectionTitle from '../section-title'
import "./form.scss"

export default function Form({ className }) {
    return (
        <React.Fragment>
            <section className={`Form ${className}`}>
                <Container>
                    <div className="Form__content">
                        <div className="Form__titles">
                            <SectionTitle title={"Напишите нам"} subtitle={"Нужна помошь?"} />
                        </div>
                        <p className="Form__text">
                            Заполните форму  и мы за 5 минут подскажем вам лучшие способы защиты вашего урожая
                        </p>
                        <form className="Form__block">
                            <label>
                                <input type="text" className='input' placeholder='Ваше имя' />
                            </label>

                            <label>
                                <input type="number" className='input' placeholder='Ваш телефон' />
                            </label>

                            <label>
                                <input type="text" className='input' placeholder='Ваш Email' />
                            </label>

                            <p className="Form__text--text Form__text">
                                Политика конфидициальности
                            </p>

                            <button className='Form__block__button'>
                                Отправить
                            </button>
                        </form>

                        <p className="Form__text--text">
                            Политика конфидициальности
                        </p>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
