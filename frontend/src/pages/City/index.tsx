import { useContext, useEffect, useState } from 'react';
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
import { AuthContext } from '../../context/AuthContext';
import { Footer } from '../../components/Footer';

interface RouteParams {
    city: string;
}

interface currentCityPlacesType {
    id: string;
    name: string;
    category: string;
    photo: string;
}

interface highlightType {
    id: string;
    photo: string;
    name: string;
    description: string;
}

interface currentCityType {
    id: string;
    photo: string;
    name: string;
    fact: string;
    description: string;
    places: currentCityPlacesType[];
    highlight: highlightType | null;
}

export function City() {
    const { user } = useContext(AuthContext)

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
                    {
                        user ? <Link to="/user/dashboard"><Button>Dashboard</Button></Link>
                            : <Link to="/login"><Button>Acesso restrito</Button></Link>
                    }
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

            {
                currentCity.highlight &&
                <Link to={`/cities/${city}/${currentCity.highlight.id}`}>
                    <CardHorizontal
                        description={currentCity.highlight.description}
                        img={currentCity.highlight.photo}
                        nome={currentCity.highlight.name}
                    />
                </Link>
            }

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

            <Footer />
        </>
    )
}