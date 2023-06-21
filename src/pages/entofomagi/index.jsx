import React from 'react'
import Header from "./../../components/header"
import Ladybug from "./../../images/entofomagi/ladybug.jpeg"
import Heading from '../../components/heading'
import "./entofomagi.scss"
import Soy from "./../../images/entofomagi/icons/soy-icon.svg"
import Beet from "./../../images/entofomagi/icons/beet-icon.svg"
import Rape from "./../../images/entofomagi/icons/rape-icon.svg"
import Sunflower from "./../../images/entofomagi/icons/sunflower-icon.svg"
import Corn from "./../../images/entofomagi/icons/corn-icon.svg"
import Fruits from "./../../images/entofomagi/icons/fruits-icon.svg"
import Params from '../../components/params'
import Container from '../../components/container'
import SectionTitle from '../../components/section-title'
import Card from '../../components/card'
import Ruble from "./../../images/icons/card/savings-icon.svg"
import Economy from "./../../images/icons/card/wallet-icon.svg"
import Effect from "./../../images/icons/card/drone-icon.svg"
import Efficiency from "./../../images/icons/card/dron-icon.svg"
import Step from '../../components/step'
import Image from '../../components/image'
import Protection from "./../../images/entofomagi/protection.jpeg"
import Batterfly from "./../../images/icons/card/batterfly-icon.svg"
import Lacewing from "./../../images/entofomagi/lacewing.jpeg"
import Protection2 from "./../../images/entofomagi/protection2.jpeg"
import Form from '../../components/form'
import SectionDesc from '../../components/section-desc'

export const benefitsData = [
  {
    id: 0,
    desc: "до 90% сои",
    image: Soy
  },
  {
    id: 1,
    desc: "до 85 % сахарной свеклы",
    image: Beet
  },
  {
    id: 2,
    desc: "до 70 % рапса",
    image: Rape
  },
  {
    id: 3,
    desc: "до 85 % подсолнуха",
    image: Sunflower
  },
  {
    id: 4,
    desc: "до 80 % кукурудзы",
    image: Corn
  },
  {
    id: 5,
    desc: "до 90 % овощных и плодовых культур",
    image: Fruits
  }
]

export const SectionBodyFunc = (props) => {

  const { textOne, textTwo, textThree, image, title = `Трихограмма эффективна против таких вредителей:` } = props

  return (
    <div className='Section-body'>
      <div className="Section-body__row">
        <div className="Section-body__imageholder">
          <Image src={image} />
        </div>
        <div className="Section-body__content">
          <div className="Section-body__text">
            <p>
              {
                textOne
              }
            </p>

            <p>
              {
                textTwo
              }
            </p>

            <p>
              {
                textThree
              }
            </p>
          </div>
          <div className="Section-body__wrapper">
            <div className="Section-body__wrapper-top">
              <div className="Section-body__wrapper-icon">
                <Image src={Batterfly} />
              </div>
              <Heading heading={"h3"} classes={"Section-body__wrapper-title"} > {title} </Heading>
            </div>
            <ul className="Section-body__wrapper-check__list">
              <li>Совки</li>
              <li>Мотыльки</li>
              <li>Плодожорки</li>
              <li>Огневки</li>
              <li>Листовертки</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Entofomagi() {
  return (
    <React.Fragment>

      <Header bg={Ladybug} title="Высокоэффективные Энтомофаги" classes="Entofomagi Entofomagi--md">

        <Heading heading="p" classes="header__subtitle">
          Внесение  энтофагов  при помощи БПЛА увеличивает эффективность защиты растений до 90%
        </Heading>

        <div className="Entofomagi__benefits">
          {
            benefitsData.map((item, index) => {
              const { desc, image } = item
              return (
                <React.Fragment key={index}>
                  <div className="benefits__item">
                    <div className="benefits__icon">
                      <img src={image} alt="Error" />
                    </div>
                    <p className="benefits__text">{desc}</p>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>

      </Header>
      <Params />
      <main className="inner Entofomagi--inner">
        <section className='Service'>
          <Container>
            <SectionTitle title={"Об Услуге"} subtitle={"Энтомофаги"} />

            <SectionDesc className='Service__desc'>
              Компания AGROSCOUT за время научной работы  совместно с ведущими  НИИ страны разработала высокоэффективный метод защиты посевов от вредителей с использованием энтомофагов.  Самый современный технопарк в стране, позволяет нам точно и быстро вносить трихограмму, златоглазку и габробракон на любых посевных площадях, включая труднодоступные участки, без применения тяжелой техники.
            </SectionDesc>
          </Container>
        </section>

        <section className='Advantage'>
          <Container>
            <div className="Advantage__titles">
              <SectionTitle title={"Плюсы использования"} subtitle={"Приемущества внесения энтомофаги"} />
            </div>

            <div className="Advantage__row">
              <Card card={"card"} img={Ruble} title={"Доступная цена"} body={"Низкая стоимость по сравнению с расходами на химическую обработку растений."} />

              <Card card={"card"} img={Economy} title={"Экономия"} body={"Низкие затраты на внесение трихограмм, златоглазки и габробракону по сравнению с трационными методами обработки"} />

              <Card card={"card"} img={Effect} title={"Эффективность"} body={"Высокая эффективность, снижение потерь урожайности в результате обработки с/х культур более чем на 90%."} />

              <Card card={"card"} img={Efficiency} title={"Оперативность"} body={"За 6 0 минут полета дрон со специальным дозатором обрабатывает до 100 гектаров."} />

              <Card card={"card"} img={Efficiency} title={"Широкий спектр действия"} body={"Двукратное внесение позволяет уничтожать несколько поколений вредителей."} />

              <Card card={"card"} img={Efficiency} title={"Равномерное распределение"} body={"Внесение с БПЛА гарантирует внедрение особей трихограммы, златогласки, габробракрну равномерно на всех участках поля"} />
            </div>
          </Container>
        </section>

        <section className='Solve'>
          <Container>
            <div className="Solve__titles">
              <SectionTitle title={"Проблемы которые мы решаем"} subtitle={"С помощью энтомофагов мы решаем следующие проблемы:"} />
            </div>

            <div className="Solve__row">
              <Step classes='step-one' number={"1"} body={"Уничтожение опылителей (пчелы, шмели)."} />

              <Step classes='step-two' number={"2"} body={"Потеря урожая от работы тяжелой техники"} />

              <Step classes='step-three' number={"3"} body={"уничтожения природных энтомофагов (златоглазки, божьи коровки и т.д"} />

              <Step classes='step-four' number={"4"} body={"Уничтожение на посевах таких вредителей как совки, огневки, кукурузные и стеблевые мотельки, тля, клещи."} />

              <Step classes='step-five' number={"5"} body={"Дефицита воды для опрыскивания"} />

              <Step classes='step-six' number={"6"} body={`Резистентности у вредителей к химическим препаратам, что ведет за собой увеличение инсектицидной нагрузки, соответственно увеличение бюджета на защиту растений.`} />
            </div>
          </Container>
        </section>

        <section className="Protection">
          <Container>
            <div className="Protection__titles">
              <SectionTitle title={"Эффективная защита"} subtitle={"Трихограмма"} />
            </div>
            <div className="Protection__text">
              <p>
                Трихограмма — мелкое насекомое, которое будучи личинкой, питается яйцами паразитов. Современные комплексы БПЛА (дроны) могут использоваться не только для сбора информации, но и для высокоэффективной и экономичной борьбы с вредителями урожая с помощью распыления трихограммы. Трихограмму можно вносить для защиты от совок, кукурузного мотылька, лугового мотылька и других чешуекрылых вредителей. Она паразитирует на яйцах более 70 видов вредителей.
              </p>
            </div>

            <SectionBodyFunc image={Protection}
              textOne={`
                Расселение трихограммы на полях России  рекомендуется проводить как в стандартные сроки внесения, в которые наблюдается максимальная активность всех видов вредителей, так и при видимом появлении вредителей. В этом случае можно добиться максимальной эффективности с минимальным вредом для культур.
              `}

              textTwo={`
                Для расселения трихограммы используется специальная автоматизированная система,  которая устанавливается на дроны мультироторного типа. 
              `}

              textThree={`
                За 60 минут полета дрон со специальным дозатором обрабатывает до 100 гектаров. Эффективность комплексной защиты растений с помощью энтомофагов достигает 90%.
              `}

            />
          </Container>
        </section>

        <section className='Lacewing'>
          <Container>
            <div className="Lacewing__titles">
              <SectionTitle title={"Премениние златоглазки"} subtitle={"Златоглазка"} />
            </div>
            <div className="Lacewing__text">
              <p>
                Каждая личинка златоглазки за жизнь способна уничтожить до 400 особей тли, более 2000 паутинных клещей, порядка 300 яиц колорадского жука, так же златоглазка пожирает гусениц первого возраста стеблевого мотылька, моли.
              </p>
            </div>

            <SectionBodyFunc image={Lacewing} title={"Златоглазка эффективна против таких вредителей:"}
              textOne={`При своевременном внесении и соблюдении всех технологических процессов при производстве и транспортировке, златоглазка эффективно защищает растение от вредителей и повышает урожайность.`}

              textTwo={"Златоглазка уничтожает 76 видов вредителей и 11 видов клещей. Наиболее эффективна в борьбе с очагами заражения тлей, к лещами, стеблевым мотыльком."}

              textThree={"Вносится златоглазка с помощью дрона, дозировка составляет 1000 яиц на один гектар. За 6 0 минут полета дрон со специальным дозатором обрабатывает до 100 гектаров. Эффективность комплексной защиты растений с помощью энтомофагов достигает 90%."}
            />
          </Container>
        </section>

        <section className="Protection Protection--refactoring">
          <Container>
            <div className="Protection__titles">
              <SectionTitle title={"Эффективная защита"} subtitle={"Габробракон"} />
            </div>
            <div className="Protection__text">
              <p>
                Габробракон — это насекомое способно защитить поля от более 60 видов вредителей, включая самых опасных для посевов мотыльков, плодожорок и огневок. Особенно эффективно габробракон работает на злаковых культурах, сое, плодовых деревьях и виноградниках.
              </p>
            </div>

            <SectionBodyFunc image={Protection2}
              textOne={`
                Данный вид наездников паразитирует на гусеницах совок, стеблевого мотылька, карадрины, листоверток и различных чешуекрылых, поэтому исполь зование габробракона в нашей стране весьма целесообразно и перспективно.
              `}

              textTwo={`
                Габробракон высокопродуктивен: достаточно 1000 взрослых особей энтомофага, чтобы защитить от потерь урожая 1 ГА земель.
              `}

              textThree={`
                За 60 минут полета дрон со специальным дозатором обрабатывает до 100 гектаров. Эффективность комплексной защиты растений с помощью энтомофагов достигает 90%*
              `}

              title={"Габробракон эффективный против таких вредителей:"}

            />
          </Container>
        </section>

        <section className='Step'>
          <Container>
            <div className="Step__titles">
              <SectionTitle title={"Этапы работы"} subtitle={"Как это работает"} />
            </div>

            <div className="Step__row">
              <Step step={"work"} number={1} body={`Исследуем состояние посевов  и популяцию вредителей`} />

              <Step step={"step-block"} body={`определяем необходимые энтомофаги`} />

              <Step step={"work"} number={2} body={`Определяем наиболее эффективные энтомофаги и график их внесения`} />

              <Step step={"step-block"} body={`вносим энтомофагов при помощи БПЛА`} classes={"padding-refactoring"} />

              <Step step={"step-block"} body={`исследуем посевы`} />



              <Step step={"work"} number={3} body={`Выращиваем необходимую популяцию энтомофагов в собственной лаборатории`} />

              <Step step={"step-block"} body={`выращиваем энтомофагов`} />

              <Step step={"work"} number={4} body={`Вносим энтомофаги по уникальной схеме на поля при помощи дронов`} />
            </div>
          </Container>
        </section>
        <Form />
      </main>

    </React.Fragment>
  )
}