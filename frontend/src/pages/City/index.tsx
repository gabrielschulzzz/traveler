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
    city: string;
}

interface currentCityPlacesType {
    id: string;
    name: string;
    category: string;
    photo: string;
}

interface currentCityType {
    id: string;
    photo: string;
    name: string;
    fact: string;
    description: string;
    places: currentCityPlacesType[];
}

export function City() {
    const [currentCity, setCurrentCity] = useState({} as currentCityType)
    const [food, setFood] = useState(0);
    const [turistic, setTuristic] = useState(0);
    const [events, setEvents] = useState(0);

    const { city } = useParams<RouteParams>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3333/cities/${city}`,
            );

            setCurrentCity(result.data);

            interface accAttr {
                food: number;
                turistic: number;
                events: number;
            }

            interface placeAttr {
                category: string;
            }


            const places = result.data.places.reduce((acc: accAttr, place: placeAttr) => {
                if (place.category === 'food') {
                    acc.food++
                } else if (place.category === 'turistic') {
                    acc.turistic++
                } else {
                    acc.events++
                }

                return acc;
            }, {
                food: 0,
                turistic: 0,
                events: 0
            })

            setFood(Number(places.food))
            setTuristic(Number(places.turistic));
            setEvents(Number(places.events))
        };

        fetchData();


    }, [city]);

    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <p>{currentCity && currentCity.name}</p>
                    <Link to="/login"><Button>Acesso restrito</Button></Link>
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
                cityEventsNumber={events}
                cityFoodNumber={food}
                cityTuristicNumber={turistic}
            />

            {/* <SectionText text="Top Avaliados" />

            <CardsContainer>
                {
                    currentCity.places && currentCity.places.map((place) => (
                        <Card
                            image={place.photo}
                            title={place.name}
                            category={place.category}
                            iconEditLink={`/dashboard/city/${city}/place/${place.id}/edit`}
                        />
                    ))
                }
            </CardsContainer> */}

            {/* <CardHorizontal
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque cumque maxime assumenda in architecto."
                img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                nome="Praia dos Ingleses"
            /> */}

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
                {
                    currentCity.places && currentCity.places.map((place) => (
                        <Link to={`/cities/${city}/${place.id}`}>
                            <Card
                                image={place.photo}
                                title={place.name}
                                category={place.category}
                            />
                        </Link>
                    ))
                }
            </CardsContainer>
        </>
    )
}