import { Button } from '../../components/Button';
import { DashboardHeader } from '../../components/DashboardHeader';
import { Container } from './styles';
import { AiOutlinePlus } from 'react-icons/ai'
import { CardsContainer } from '../CitiesList/styles';
import { Card } from '../../components/Card';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { Link, useHistory } from 'react-router-dom';
import { OverlayDelete } from '../../components/OverlayDelete';
import { useState } from 'react';
import { AddButton } from '../../components/AddButton';


export function DashboardCityList() {
    const [deleteTriggered, setDeleteTriggered] = useState(false);
    let history = useHistory();

    function deleteCity() {
        history.push("/dashboard");
        setDeleteTriggered(false)
    }
    return (
        <Container>
            <DashboardNavbar />

            <DashboardHeader>
                <h1>Cidades</h1>
                <Link to="/dashboard/add-city"><AddButton>Adicionar uma cidade</AddButton></Link>
            </DashboardHeader>

            <CardsContainer>
                <Link to="/dashboard/city/dallas">
                    <Card
                        image="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        places="24"
                        title="Dallas"
                        iconDelete
                        iconEdit
                        iconEditLink="/dashboard/city/dallas/edit"
                    />
                </Link>


            </CardsContainer>

            {
                deleteTriggered &&
                <OverlayDelete
                    title="Excluir cidade"
                    text="Tem certeza que quer excluir a cidade de Florianopolis e seus 98 locais?"
                    setDeletTriggered={setDeleteTriggered}
                    handleDelete={deleteCity}
                />
            }
        </Container>
    )
}