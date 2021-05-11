import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { Container, HeaderContent, HeroDescription, CardHeader, AllHeader } from './styles';
import { AiOutlineCamera, AiOutlineCalendar } from 'react-icons/ai'
import { FiCoffee } from 'react-icons/fi'
import { CardsContainer } from '../../components/CardsContainer';
import { Card } from '../../components/Card';
import { CardHorizontal } from '../../components/CardHorizontal';
import { Link } from 'react-router-dom';
import { CityHeroImage } from '../../components/CityHeroImage';
import { CityDescriptionAndStats } from '../../components/CityDescriptionAndStats';
import { SectionText } from '../../components/SectionText';


export function City() {
    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <p>Cidade</p>
                    <Button>Acesso restrito</Button>
                </HeaderContent>
            </Container>

            <CityHeroImage
                image="https://images.unsplash.com/photo-1590093804249-491680485e5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                imageAlt="city image"
            />

            <CityDescriptionAndStats
                cityName="Florianopolis"
                cityDescription="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa voluptas dolorem alias in similique tempora quidem quibusdam officiis natus"
                cityFact="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi cupiditate in"
                cityEventsNumber={67}
                cityFoodNumber={21}
                cityTuristicNumber={15}
            />

            <SectionText text="Top Avaliados" />

            <CardsContainer>
                <Link to="/cities/dallas/food/dolce">
                    <Card
                        image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
                        title="Dolce & Company"
                        rating="4.7"
                        category="food"
                    />
                </Link>

                <Link to="/cities/dallas/turistic/dolce">
                    <Card
                        image="https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                        title="Lagoa Conceicao"
                        rating="5.0"
                        category="turistic"
                    />
                </Link>

                <Card
                    image="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="Praia do Campeche"
                    rating="4.9"
                    category="turistic"
                />

                <Card
                    image="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    title="Expo Tattoo Floripa"
                    rating="5.0"
                    category="events"
                />

            </CardsContainer>

            <CardHorizontal
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque cumque maxime assumenda in architecto."
                img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                nome="Praia dos Ingleses"
            />

            <AllHeader>
                <div>
                    <h4>Conheca todos</h4>
                </div>

                <div>
                    <ul>
                        <li>Todos</li>
                        <li>Pontos Turisticos</li>
                        <li>Comida & Bebida</li>
                        <li>Eventos Organizados</li>
                    </ul>
                </div>
            </AllHeader>

            <CardsContainer>
                <Card
                    image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
                    title="Dolce & Company"
                    rating="4.7"
                    category="food"
                />

                <Card
                    image="https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                    title="Lagoa Conceicao"
                    rating="5.0"
                    category="turistic"
                />

                <Card
                    image="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="Praia do Campeche"
                    rating="4.9"
                    category="turistic"
                />

                <Card
                    image="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    title="Expo Tattoo Floripa"
                    rating="5.0"
                    category="events"
                />


                <Card
                    image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
                    title="Dolce & Company"
                    rating="4.7"
                    category="food"
                />

                <Card
                    image="https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                    title="Lagoa Conceicao"
                    rating="5.0"
                    category="turistic"
                />

                <Card
                    image="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    title="Praia do Campeche"
                    rating="4.9"
                    category="turistic"
                />

                <Card
                    image="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                    title="Expo Tattoo Floripa"
                    rating="5.0"
                    category="events"
                />


            </CardsContainer>
        </>
    )
}