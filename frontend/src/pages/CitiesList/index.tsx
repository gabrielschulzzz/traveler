import { useContext, useEffect, useState } from 'react'
import { ImCrying } from 'react-icons/im'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, HeaderContent, PageContainer, CardsContainer, NotFoundContainer } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Card } from "../../components/Card";
import { AuthContext } from '../../context/AuthContext';

interface CityAttributes {
    id: string;
    description: string;
    photo: string;
    name: string;
    fact: string;
    places: string[];
}

export function CitiesList() {
    const { user } = useContext(AuthContext)
    const [cities, setCities] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3333/cities',
            );

            setCities(result.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <Container>
                <HeaderContent>
                    <Logo />
                    <Input placeholder="Qual cidade voce procura?" />
                    {
                        user ? user.name : <Link to="/login"><Button>Acesso restrito</Button></Link>
                    }

                </HeaderContent>
            </Container>

            <PageContainer>
                <h1>Selecione uma cidade</h1>
                <ul>
                    <li>Todas</li>
                    <li>Mais acessadas</li>
                    <li>A-Z <RiArrowDownSLine /></li>
                </ul>
            </PageContainer>

            <CardsContainer>
                {
                    cities ? cities.map((city: CityAttributes) => (
                        <Link to={{
                            pathname: `/cities/${city.id}`
                        }}>
                            <Card
                                key={city.id}
                                image={city.photo}
                                places={String(city.places.length)}
                                title={city.name}
                            />
                        </Link>
                    )) : <NotFoundContainer>
                        <div>
                            <ImCrying />
                            <p>Sem resultados.</p>
                        </div>
                    </NotFoundContainer>
                }
            </CardsContainer>
        </>
    )
}