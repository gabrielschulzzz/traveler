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
import { Link, useHistory } from 'react-router-dom';

import { useState } from 'react';
import { AddButton } from '../../components/AddButton';

export function DashboardCity() {
    const [deleteTriggered, setDeletTriggered] = useState(false);
    let history = useHistory();

    function deleteCity() {
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
                        <Link to="/dashboard/city/dallas/edit">
                            <AiOutlineEdit />
                        </Link>
                    </div>
                    <div onClick={() => setDeletTriggered(true)} className="icon icon-remove">
                        <AiOutlineDelete />
                    </div>
                    <Link to="/dashboard/add-place"><AddButton>Adicionar um local</AddButton></Link>
                </div>

            </DashboardHeader>

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
                <Card
                    image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
                    title="Dolce & Company"
                    rating="4.7"
                    category="food"
                    iconDelete
                    iconEdit
                    iconEditLink="/dashboard/city/dallas/place/dolce/edit"
                />

            </CardsContainer>

            <CardHorizontal
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque cumque maxime assumenda in architecto."
                img="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                nome="Praia dos Ingleses"
                iconDelete
                iconEdit
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
                    iconDelete
                    iconEdit
                    iconEditLink="/dashboard/city/dallas/place/dolce/edit"
                />


            </CardsContainer>

            {
                deleteTriggered &&
                <OverlayDelete
                    title="Excluir cidade"
                    text="Tem certeza que quer excluir a cidade de Florianopolis e seus 98 locais?"
                    setDeletTriggered={setDeletTriggered}
                    handleDelete={deleteCity}
                />
            }

        </Container>
    )
}