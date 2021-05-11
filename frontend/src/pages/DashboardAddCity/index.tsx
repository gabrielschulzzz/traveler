import { AiOutlineArrowLeft, AiOutlineCalendar, AiOutlineCamera, AiOutlineCheckCircle } from "react-icons/ai";
import { FiAlertCircle, FiCoffee } from "react-icons/fi";
import { BsPlus } from 'react-icons/bs';

import { CategoryContainer, Container, RadioBox, SuccessAdd } from "./styles";

import { Button } from "../../components/Button";
import { CardForm } from "../../components/CardForm";

import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardNavbar } from "../../components/DashboardNavbar";
import { CardFormHeader } from "../../components/CardFormHeader";
import { Card } from "../../components/Card";
import { CardsRow } from "../Home/styles";
import { CardFormBody } from "../../components/CardFormBody";
import { CardFormFooter } from "../../components/CardFormFooter";
import { CardFormAddress } from "../../components/CardFormAddress";

import { useState } from 'react';
import { Link } from "react-router-dom";
import { CardFormDates } from "../../components/CardFormDates";
import { NextEvent } from "../../components/NextEvent";

export function DashboardAddCity() {
    const [step, setStep] = useState(1);
    const [type, setType] = useState('food');
    const [successAdd, setSuccessAdd] = useState(false);

    return (
        <Container>
            {
                successAdd === false &&
                <>
                    <DashboardNavbar />
                    <DashboardHeader>
                        <Link to="/dashboard">
                            <AiOutlineArrowLeft />
                        </Link>
                        <h2 className="title">Adicionar uma cidade</h2>
                        <div className="right">
                            <p className="step1" onClick={() => setStep(1)}>01</p>
                            <p className="step2" onClick={() => setStep(2)}>02</p>
                        </div>
                    </DashboardHeader>
                </>
            }


            {
                step === 1 && successAdd === false &&
                <CardForm>
                    <CardFormHeader
                        step="01"
                        title="Adicione uma cidade"
                        subtitle="Dados da cidade"
                    />

                    <CardFormBody>
                        <label>Nome da cidade</label>
                        <input type="text" />

                        <label>Foto da cidade</label>

                        <div className="form-foto">
                            <BsPlus />
                            <p>Adicionar uma foto</p>
                        </div>

                        <label>Descricao da cidade</label>
                        <textarea></textarea>
                    </CardFormBody>

                    <CardFormFooter>
                        <div className="footer-left">
                            <FiAlertCircle />
                            <p>Preencha todos os dados com cuidado</p>
                        </div>
                        <Button onClick={() => setStep(2)}>Proximo</Button>
                    </CardFormFooter>
                </CardForm>
            }

            {
                step === 2 && successAdd === false &&
                <CardForm>
                    <CardFormHeader
                        step="02"
                        title="Adicione um local"
                        subtitle="Dados basicos"
                    />

                    <CardFormBody>
                        <label>Nome do local</label>
                        <input type="text" />

                        <label>Foto do local</label>
                        <div className="form-foto">
                            <BsPlus />
                            <p>Adicionar uma foto</p>
                        </div>

                        <label>Selecionar uma categoria</label>
                        <CategoryContainer>
                            <RadioBox onClick={() => setType('food')}>
                                <p><FiCoffee /></p>
                                <h3>Comida e bebida</h3>
                            </RadioBox>

                            <RadioBox onClick={() => setType('turistic')}>
                                <p><AiOutlineCamera /></p>
                                <h3>Pontos Turisticos</h3>
                            </RadioBox>

                            <RadioBox onClick={() => setType('event')}>
                                <p><AiOutlineCalendar /></p>
                                <h3>Eventos Organizados</h3>
                            </RadioBox>
                        </CategoryContainer>

                        {
                            type === 'food' &&
                            <CardFormDates />
                        }

                        {
                            type === 'event' &&
                            <NextEvent />
                        }


                        <CardFormAddress map />

                        <CardFormFooter>
                            <div className="footer-left">
                                <FiAlertCircle />
                                <p>Preencha todos os dados com cuidado</p>
                            </div>
                            <Button onClick={() => setSuccessAdd(true)}><p className="buttonFinish">Concluir cadastro</p></Button>
                        </CardFormFooter>
                    </CardFormBody>
                </CardForm>
            }


            {
                successAdd && <SuccessAdd>
                    <div className="first">
                        <AiOutlineCheckCircle />
                        <h1>Cidade Cadastrada!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni pariatur assumenda eligendi perspiciatis similique. Excepturi nesciunt inventore, adipisci porro fugiat qui fuga reiciendis ex earum iure in asperiores neque!</p>
                        <Link to="/dashboard"><Button>Okay</Button></Link>
                    </div>

                    <div className="second">
                        <CardsRow>
                            <Card
                                image="https://images.unsplash.com/photo-1620095200055-9d1c4f36ba43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                places="1"
                                title="Guadalajara"
                                iconDelete
                                iconEdit
                            />

                            <Card
                                image="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80"
                                title="Dolce & Company"
                                rating="-"
                                category="food"
                                iconDelete
                                iconEdit
                            />
                        </CardsRow>
                    </div>
                </SuccessAdd>
            }


        </Container >
    )
}