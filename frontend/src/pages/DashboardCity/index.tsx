import { AiOutlineArrowLeft, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { Container, AllHeader } from './styles';

import { Button } from '../../components/Button';
import { DashboardHeader } from '../../components/DashboardHeader';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { CityHeroImage } from '../../components/CityHeroImage';
import { CityDescriptionAndStats } from '../../components/CityDescriptionAndStats';
import { SectionText } from '../../components/SectionText';
import { CardsContainer } from '../../components/CardsContainer';
import { Card } from '../../components/Card';
import { CardHorizontal } from '../../components/CardHorizontal';
import { OverlayMessage } from '../../components/OverlayMessage';
import { OverlayDelete } from '../../components/OverlayDelete';
import { Link, useHistory, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { AddButton } from '../../components/AddButton';
import axios from 'axios';

interface RouteParams {
    slug: string;
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

export function DashboardCity() {
    const [currentCity, setCurrentCity] = useState({} as currentCityType)
    const [food, setFood] = useState(0);
    const [turistic, setTuristic] = useState(0);
    const [events, setEvents] = useState(0);
    const [deleteTriggered, setDeletTriggered] = useState(false);

    const { city } = useParams<RouteParams>();

    let history = useHistory();

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

    async function deleteCity() {
        await axios.delete(`http://localhost:3333/cities/${city}`)

        history.push("/dashboard")
        setDeletTriggered(false)
    }

    return (
        <Container>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <div className="icons-right">
                    <div className="icon icon-edit">
                        <Link to={{
                            pathname: `/dashboard/city/${city}/edit`
                        }}>
                            <AiOutlineEdit />
                        </Link>
                    </div>
                    <div onClick={() => setDeletTriggered(true)} className="icon icon-remove">
                        <AiOutlineDelete />
                    </div>
                    <Link to={{
                        pathname: `/dashboard/city/${city}/add-place`
                    }}>
                        <AddButton>Adicionar um local</AddButton>
                    </Link>
                </div>
            </DashboardHeader>

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
                <Card
                    image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
                    title="Dolce & Company"
                    rating="4.7"
                    category="food"
                    iconDelete
                    iconEdit
                    iconEditLink="/dashboard/city/dallas/place/dolce/edit"
                />

            </CardsContainer> */}

            {/* <CardHorizontal
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque cumque maxime assumenda in architecto."
                img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                nome="Praia dos Ingleses"
                iconDelete
                iconEdit
            /> */}

            <AllHeader>
                <div>
                    <h4>Locais cadastrados</h4>
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
                        <Card
                            image={place.photo}
                            title={place.name}
                            category={place.category}
                            iconDelete
                            iconEdit
                            iconEditLink={`/dashboard/city/${city}/place/${place.id}/edit`}
                        />
                    ))
                }
            </CardsContainer>

            {
                deleteTriggered &&
                <OverlayDelete
                    title="Excluir cidade"
                    text={`Tem certeza que quer excluir a cidade de ${currentCity.name} e seus ${currentCity.places.length} locais?`}
                    setDeletTriggered={setDeletTriggered}
                    handleDelete={deleteCity}
                />
            }

        </Container>
    )
}