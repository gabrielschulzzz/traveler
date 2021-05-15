import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineCamera, AiOutlineCalendar } from 'react-icons/ai'
import { FiCoffee } from 'react-icons/fi'

import { Container, HeaderContent, HeroDescription, CardHeader, AllHeader } from './styles';

import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { CardsContainer } from '../../components/CardsContainer';
import { Card } from '../../components/Card';
import { CardHorizontal } from '../../components/CardHorizontal';
import { CityHeroImage } from '../../components/CityHeroImage';
import { CityDescriptionAndStats } from '../../components/CityDescriptionAndStats';
import { SectionText } from '../../components/SectionText';

interface RouteParams {
    slug: string;
    city: string;
}

interface currentCityType {
    id: string;
    photo: string;
    name: string;
    fact: string;
    description: string;
}

export function City() {
    const [currentCity, setCurrentCity] = useState({} as currentCityType)
    const { city } = useParams<RouteParams>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3333/cities/${city}`,
            );

            setCurrentCity(result.data);
        };

        fetchData();
    }, [city]);

    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <p>{currentCity && currentCity.name}</p>
                    <Button>Acesso restrito</Button>
                </HeaderContent>
            </Container>

            <CityHeroImage
                image={currentCity.photo}
                imageAlt="city image"
            />

            <CityDescriptionAndStats
                cityName={currentCity.name}
                cityDescription={currentCity.description}
                cityFact={currentCity.fact}
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