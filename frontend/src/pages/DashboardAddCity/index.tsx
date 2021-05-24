import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FiAlertCircle, FiCoffee } from "react-icons/fi";
import { BsPlus } from 'react-icons/bs';
import { AiOutlineArrowLeft, AiOutlineCalendar, AiOutlineCamera, AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai";
import { CategoryContainer, Container, RadioBox, SuccessAdd } from "./styles";
import Dropzone from "react-dropzone";
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
import { CardCategoryPicker } from '../../components/CardCategoryPicker';
import { Step1, Step2 } from '../../components/DashboardHeader/styles';
import { ToastContainer, toast } from 'react-toastify';


export function DashboardAddCity() {
    const [step, setStep] = useState(1);
    const [successAdd, setSuccessAdd] = useState(false);
    const [cityPhotoPreview, setCityPhotoPreview] = useState<any>([]);
    const [placePhotoPreview, setPlacePhotoPreview] = useState<any>([]);
    const notify = () => toast.error("Preencha todos os campos!");

    // city state
    const [cityName, setCityName] = useState('');
    const [cityPhoto, setCityPhoto] = useState('');
    const [cityDescription, setCityDescription] = useState('');
    const [cityFact, setCityFact] = useState('');

    // place state
    const [placeName, setPlaceName] = useState('');
    const [placePhoto, setPlacePhoto] = useState('');
    const [placeTelefone, setPlaceTelefone] = useState('');
    const [placeDescription, setPlaceDescription] = useState('');
    const [type, setType] = useState('food');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');

    const [domingoOpen, setDomingoOpen] = useState(false);
    const [domingoFrom, setDomingoFrom] = useState('');
    const [domingoUntil, setDomingoUntil] = useState('');

    const [segundaOpen, setSegundaOpen] = useState(false);
    const [segundaFrom, setSegundaFrom] = useState('');
    const [segundaUntil, setSegundaUntil] = useState('');

    const [tercaOpen, setTercaOpen] = useState(false);
    const [tercaFrom, setTercaFrom] = useState('');
    const [tercaUntil, setTercaUntil] = useState('');

    const [quartaOpen, setQuartaOpen] = useState(false);
    const [quartaFrom, setQuartaFrom] = useState('');
    const [quartaUntil, setQuartaUntil] = useState('');

    const [quintaOpen, setQuintaOpen] = useState(false);
    const [quintaFrom, setQuintaFrom] = useState('');
    const [quintaUntil, setQuintaUntil] = useState('');

    const [sextaOpen, setSextaOpen] = useState(false);
    const [sextaFrom, setSextaFrom] = useState('');
    const [sextaUntil, setSextaUntil] = useState('');

    const [sabadoOpen, setSabadoOpen] = useState(false);
    const [sabadoFrom, setSabadoFrom] = useState('');
    const [sabadoUntil, setSabadoUntil] = useState('');

    function handleStep2() {
        console.log(cityName, cityDescription, cityFact, cityPhoto)
        if (!cityName || !cityDescription || !cityFact || !cityPhoto) {
            notify()
            return;
        }
        setStep(2)
    }

    function handleFileUploadCity(file: any) {
        setCityPhoto(file);
    }

    function handleFileUploadPlace(file: any) {
        setPlacePhoto(file);
    }

    let newPlace: any;

    async function createNewCity() {
        let cityFormData = new FormData();
        cityFormData.append('name', cityName);
        cityFormData.append('description', cityDescription);
        cityFormData.append('fact', cityFact);
        cityFormData.append('photo', cityPhoto);

        try {
            const newCity = await axios({
                method: "post",
                url: "http://localhost:3333/cities",
                data: cityFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })

            let placeFormData = new FormData();

            if (type === "food") {
                placeFormData.append("name", placeName)
                placeFormData.append("city", newCity.data.id)
                placeFormData.append("description", placeDescription)
                placeFormData.append("telefone", placeTelefone)
                placeFormData.append("photo", placePhoto)
                placeFormData.append("category", type)
                placeFormData.append("cep", cep)
                placeFormData.append("rua", street)
                placeFormData.append("bairro", district)
                placeFormData.append("numero", number)
                placeFormData.append("domingoOpen", String(domingoOpen))
                placeFormData.append("domingoFrom", domingoFrom)
                placeFormData.append("domingoUntil", domingoUntil)
                placeFormData.append("segundaOpen", String(segundaOpen))
                placeFormData.append("segundaFrom", segundaFrom)
                placeFormData.append("segundaUntil", segundaUntil)
                placeFormData.append("tercaOpen", String(tercaOpen))
                placeFormData.append("tercaFrom", tercaFrom)
                placeFormData.append("tercaUntil", tercaUntil)
                placeFormData.append("quartaOpen", String(quartaOpen))
                placeFormData.append("quartaFrom", quartaFrom)
                placeFormData.append("quartaUntil", quartaUntil)
                placeFormData.append("quintaOpen", String(quintaOpen))
                placeFormData.append("quintaFrom", quintaFrom)
                placeFormData.append("quintaUntil", quintaUntil)
                placeFormData.append("sextaOpen", String(sextaOpen))
                placeFormData.append("sextaFrom", sextaFrom)
                placeFormData.append("sextaUntil", sextaUntil)
                placeFormData.append("sabadoOpen", String(sabadoOpen))
                placeFormData.append("sabadoFrom", sabadoFrom)
                placeFormData.append("sabadoUntil", sabadoUntil)

                newPlace = await axios({
                    method: "post",
                    url: "http://localhost:3333/places",
                    data: placeFormData,
                    headers:
                        { "Content-Type": "multipart/form-data" },
                })
            } else if (type === "event") {
                placeFormData.append("name", placeName)
                placeFormData.append("city", newCity.data.id)
                placeFormData.append("description", placeDescription)
                placeFormData.append("telefone", placeTelefone)
                placeFormData.append("photo", placePhoto)
                placeFormData.append("category", type)
                placeFormData.append("cep", cep)
                placeFormData.append("rua", street)
                placeFormData.append("numero", number)
                placeFormData.append("bairro", district)

                newPlace = await axios({
                    method: "post",
                    url: "http://localhost:3333/places",
                    data: placeFormData,
                    headers:
                        { "Content-Type": "multipart/form-data" },
                })
            } else {
                placeFormData.append("name", placeName)
                placeFormData.append("city", newCity.data.id)
                placeFormData.append("description", placeDescription)
                placeFormData.append("telefone", placeTelefone)
                placeFormData.append("photo", placePhoto)
                placeFormData.append("category", type)
                placeFormData.append("numero", number)
                placeFormData.append("cep", cep)
                placeFormData.append("rua", street)
                placeFormData.append("bairro", district)

                newPlace = await axios({
                    method: "post",
                    url: "http://localhost:3333/places",
                    data: placeFormData,
                    headers:
                        { "Content-Type": "multipart/form-data" },
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log(newPlace)
            setSuccessAdd(true)
        }
    }

    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                            <Step1 active={step} className="step1" onClick={() => setStep(1)}>01</Step1>
                            <Step2 active={step} className="step2" onClick={() => handleStep2()}>02</Step2>
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
                        <Dropzone
                            onDrop={acceptedFiles => {
                                handleFileUploadCity(acceptedFiles[0])
                                setCityPhotoPreview(acceptedFiles.map(file => Object.assign(file, {
                                    preview: URL.createObjectURL(file)
                                })));
                            }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {cityPhotoPreview.length > 0
                                            ? cityPhotoPreview.map((file: { preview: string | undefined; }) => (
                                                <div className="form-foto">
                                                    <div>
                                                        <AiOutlineEdit />
                                                    </div>
                                                    <img src={file.preview} alt="" />
                                                </div>
                                            ))
                                            : <div className="form-foto">
                                                <BsPlus />
                                                <p>Arraste uma imagem ou clique</p>
                                            </div>
                                        }
                                    </div>
                                </section>
                            )}
                        </Dropzone>

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
                        <Button onClick={handleStep2}>Proximo</Button>
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
                        <Dropzone
                            onDrop={acceptedFiles => {
                                handleFileUploadPlace(acceptedFiles[0])
                                setPlacePhotoPreview(acceptedFiles.map(file => Object.assign(file, {
                                    preview: URL.createObjectURL(file)
                                })));
                            }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {placePhotoPreview.length > 0
                                            ? placePhotoPreview.map((file: { preview: string | undefined; }) => (
                                                <div className="form-foto">
                                                    <div>
                                                        <AiOutlineEdit />
                                                    </div>
                                                    <img src={file.preview} alt="" />
                                                </div>
                                            ))
                                            : <div className="form-foto">
                                                <BsPlus />
                                                <p>Arraste uma imagem ou clique</p>
                                            </div>
                                        }
                                    </div>
                                </section>
                            )}
                        </Dropzone>

                        <label>Descricao do local</label>
                        <textarea value={placeDescription} onChange={(e) => setPlaceDescription(e.target.value)}></textarea>

                        <CardCategoryPicker
                            type={type}
                            setType={setType}
                        />

                        {
                            type === 'food' &&
                            <CardFormDates
                                setDomingoOpen={setDomingoOpen}
                                domingoOpen={domingoOpen}
                                setDomingoFrom={setDomingoFrom}
                                domingoFrom={domingoFrom}
                                setDomingoUntil={setDomingoUntil}
                                domingoUntil={domingoUntil}

                                segundaOpen={segundaOpen}
                                setSegundaOpen={setSegundaOpen}
                                setSegundaFrom={setSegundaFrom}
                                segundaFrom={segundaFrom}
                                setSegundaUntil={setSegundaUntil}
                                segundaUntil={segundaUntil}

                                tercaOpen={tercaOpen}
                                setTercaOpen={setTercaOpen}
                                setTercaFrom={setTercaFrom}
                                tercaFrom={tercaFrom}
                                setTercaUntil={setTercaUntil}
                                tercaUntil={tercaUntil}

                                quartaOpen={quartaOpen}
                                setQuartaOpen={setQuartaOpen}
                                setQuartaFrom={setQuartaFrom}
                                quartaFrom={quartaFrom}
                                setQuartaUntil={setQuartaUntil}
                                quartaUntil={quartaUntil}

                                quintaOpen={quintaOpen}
                                setQuintaOpen={setQuintaOpen}
                                setQuintaFrom={setQuintaFrom}
                                quintaFrom={quintaFrom}
                                setQuintaUntil={setQuintaUntil}
                                quintaUntil={quintaUntil}

                                sextaOpen={sextaOpen}
                                setSextaOpen={setSextaOpen}
                                setSextaFrom={setSextaFrom}
                                sextaFrom={sextaFrom}
                                setSextaUntil={setSextaUntil}
                                sextaUntil={sextaUntil}

                                sabadoOpen={sabadoOpen}
                                setSabadoOpen={setSabadoOpen}
                                setSabadoFrom={setSabadoFrom}
                                sabadoFrom={sabadoFrom}
                                setSabadoUntil={setSabadoUntil}
                                sabadoUntil={sabadoUntil}
                            />
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

                        {
                            type === 'food' &&
                            <>
                                <label>Telefone</label>
                                <input type="text" value={placeTelefone} onChange={(e) => setPlaceTelefone(e.target.value)} />
                            </>
                        }

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
                successAdd &&
                <SuccessAdd>
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
                            {
                                cityPhotoPreview.map((file: { preview: string | undefined; }) => (
                                    <Card
                                        title={cityName}
                                        image={file.preview}
                                        places="1"
                                    />
                                ))
                            }

                            {
                                placePhotoPreview.map((file: { preview: string | undefined; }) => (
                                    <Card
                                        title={placeName}
                                        image={file.preview}
                                        rating="-"
                                        category={type}
                                    />
                                ))
                            }
                        </CardsRow>
                    </div>
                </SuccessAdd>
            }
        </Container >
    )
}