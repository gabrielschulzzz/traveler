import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';

import { DashboardHeader } from '../../components/DashboardHeader';
import { CardsContainer } from '../CitiesList/styles';
import { Card } from '../../components/Card';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { OverlayDelete } from '../../components/OverlayDelete';
import { AddButton } from '../../components/AddButton';
import axios from 'axios';

interface CityAttributes {
    id: string;
    description: string;
    photo: string;
    name: string;
    fact: string;
    places: string[];
}


export function DashboardCityList() {
    const [cities, setCities] = useState([]);

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
        <Container>
            <DashboardNavbar />

            <DashboardHeader>
                <h1>Cidades</h1>
                <Link to="/dashboard/add-city"><AddButton>Adicionar uma cidade</AddButton></Link>
            </DashboardHeader>

            <CardsContainer>
                {
                    cities ? cities.map((city: CityAttributes) => (
                        <Link to={{
                            pathname: `/dashboard/city/${city.id}`
                        }}>
                            <Card
                                image={city.photo}
                                places={String(city.places.length)}
                                title={city.name}
                                iconDelete
                                iconEdit
                                iconEditLink={`/dashboard/city/${city.id}/edit`}
                            />
                        </Link>
                    )) : ''
                }

            </CardsContainer>

        </Container>
    )
}