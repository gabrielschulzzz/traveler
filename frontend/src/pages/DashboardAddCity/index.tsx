import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FiAlertCircle, FiCoffee } from "react-icons/fi";
import { BsPlus } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineCalendar, AiOutlineCamera, AiOutlineCheckCircle } from "react-icons/ai";
import { CategoryContainer, Container, RadioBox, SuccessAdd } from "./styles";

import { CardsRow } from "../Home/styles";
import { Button } from "../../components/Button";
import { CardForm } from "../../components/CardForm";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardNavbar } from "../../components/DashboardNavbar";
import { CardFormHeader } from "../../components/CardFormHeader";
import { Card } from "../../components/Card";
import { CardFormBody } from "../../components/CardFormBody";
import { CardFormFooter } from "../../components/CardFormFooter";
import { CardFormAddress } from "../../components/CardFormAddress";
import { CardFormDates } from "../../components/CardFormDates";
import { NextEvent } from "../../components/NextEvent";


export function DashboardAddCity() {
    const [step, setStep] = useState(1);
    const [cityName, setCityName] = useState('');
    const [cityPhoto, setCityPhoto] = useState('');
    const [cityDescription, setCityDescription] = useState('');
    const [cityFact, setCityFact] = useState('');
    const [placeName, setPlaceName] = useState('');
    const [placePhoto, setPlacePhoto] = useState('');
    const [type, setType] = useState('food');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');
    const [successAdd, setSuccessAdd] = useState(false);

    async function createNewCity() {
        try {
            const newCity = await axios.post('http://localhost:3333/cities', {
                name: cityName,
                description: cityDescription,
                fact: cityFact,
                photo: cityPhoto
            })

            await axios.post('http://localhost:3333/places', {
                name: placeName,
                city: newCity.data.id,
                photo: placePhoto,
                category: type,
                cep,
                rua: street,
                bairro: district,
                numero: number,
            })
        } catch (error) {
            console.log(error)
        } finally {
            setSuccessAdd(true)
        }
    }

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
                        <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />

                        <label>Foto da cidade</label>
                        <input type="text" value={cityPhoto} onChange={(e) => setCityPhoto(e.target.value)} />

                        {/* <div className="form-foto">
                            <BsPlus />
                            <p>Adicionar uma foto</p>
                        </div> */}

                        <label>Descricao da cidade</label>
                        <textarea
                            value={cityDescription}
                            onChange={(e) => setCityDescription(e.target.value)}>
                        </textarea>

                        <label>Curiosidade da cidade</label>
                        <textarea value={cityFact} onChange={(e) => setCityFact(e.target.value)}></textarea>
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
                        <input type="text" value={placeName} onChange={(e) => setPlaceName(e.target.value)} />

                        <label>Foto do local</label>
                        <input type="text" value={placePhoto} onChange={(e) => setPlacePhoto(e.target.value)} />
                        {/* <div className="form-foto">
                            <BsPlus />
                            <p>Adicionar uma foto</p>
                        </div> */}

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


                        <CardFormAddress
                            cep={cep}
                            setCep={setCep}
                            street={street}
                            setStreet={setStreet}
                            district={district}
                            setDistrict={setDistrict}
                            number={number}
                            setNumber={setNumber}
                            map
                        />

                        <CardFormFooter>
                            <div className="footer-left">
                                <FiAlertCircle />
                                <p>Preencha todos os dados com cuidado</p>
                            </div>
                            <Button
                                onClick={() => createNewCity()}>
                                <p className="buttonFinish">Concluir cadastro</p></Button>
                        </CardFormFooter>
                    </CardFormBody>
                </CardForm>
            }


            {
                successAdd && <SuccessAdd>
                    <div className="first">
                        <AiOutlineCheckCircle />
                        <h1>Cidade Cadastrada!</h1>
                        <Link to="/dashboard">
                            <Button>
                                Voltar a dashboard
                            </Button>
                        </Link>
                    </div>

                    <div className="second">
                        <CardsRow>
                            <Card
                                title={cityName}
                                image={cityPhoto}
                                places="1"
                            />

                            <Card
                                title={placeName}
                                image={placePhoto}
                                rating="-"
                                category={type}
                            />
                        </CardsRow>
                    </div>
                </SuccessAdd>
            }


        </Container >
    )
}