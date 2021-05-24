import axios from "axios";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { AiOutlineArrowLeft, AiOutlineEdit } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { CardCategoryPicker } from "../../components/CardCategoryPicker";
import { CardForm } from "../../components/CardForm";
import { CardFormAddress } from "../../components/CardFormAddress";
import { CardFormBody } from "../../components/CardFormBody";
import { CardFormDates } from "../../components/CardFormDates";
import { CardFormFooter } from "../../components/CardFormFooter";
import { CardFormHeader } from "../../components/CardFormHeader";
import { DashboardHeader } from "../../components/DashboardHeader";
import { DashboardNavbar } from "../../components/DashboardNavbar";
import { NextEvent } from "../../components/NextEvent";

interface RouteParams {
    slug: string;
    city: string;
}

interface currentCityType {
    id: string;
    photo: string;
    name: string;
    fact: string;
    description: string;
}

export function DashBoardAddPlace() {
    const [placeName, setPlaceName] = useState('');
    const [placePhoto, setPlacePhoto] = useState('');
    const [photoPreview, setPhotoPreview] = useState<any>([]);
    const [placeDescription, setPlaceDescription] = useState('')
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');;
    const [type, setType] = useState('food');
    const [domingoOpen, setDomingoOpen] = useState(true);
    const [domingoFrom, setDomingoFrom] = useState('');
    const [domingoUntil, setDomingoUntil] = useState('');

    const [segundaOpen, setSegundaOpen] = useState(true);
    const [segundaFrom, setSegundaFrom] = useState('');
    const [segundaUntil, setSegundaUntil] = useState('');

    const [tercaOpen, setTercaOpen] = useState(true);
    const [tercaFrom, setTercaFrom] = useState('');
    const [tercaUntil, setTercaUntil] = useState('');

    const [quartaOpen, setQuartaOpen] = useState(true);
    const [quartaFrom, setQuartaFrom] = useState('');
    const [quartaUntil, setQuartaUntil] = useState('');

    const [quintaOpen, setQuintaOpen] = useState(true);
    const [quintaFrom, setQuintaFrom] = useState('');
    const [quintaUntil, setQuintaUntil] = useState('');

    const [sextaOpen, setSextaOpen] = useState(true);
    const [sextaFrom, setSextaFrom] = useState('');
    const [sextaUntil, setSextaUntil] = useState('');

    const [sabadoOpen, setSabadoOpen] = useState(true);
    const [sabadoFrom, setSabadoFrom] = useState('');
    const [sabadoUntil, setSabadoUntil] = useState('');
    const [currentCity, setCurrentCity] = useState({} as currentCityType)
    const { city } = useParams<RouteParams>();
    let history = useHistory();
    let newPlace: any;


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3333/cities/${city}`,
            );

            setCurrentCity(result.data);
        };
        fetchData();
    }, [city]);

    function handleFileUploadPlace(file: any) {
        setPlacePhoto(file);
    }

    async function createNewPlace() {
        let placeFormData = new FormData();

        if (type === "food") {
            placeFormData.append("name", placeName)
            placeFormData.append("city", city)
            placeFormData.append("description", placeDescription)
            placeFormData.append("telefone", telefone)
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
                url: `http://localhost:3333/places/`,
                data: placeFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })
        } else if (type === "event") {
            placeFormData.append("name", placeName)
            placeFormData.append("city", city)
            placeFormData.append("description", placeDescription)
            placeFormData.append("telefone", telefone)
            placeFormData.append("photo", placePhoto)
            placeFormData.append("category", type)
            placeFormData.append("cep", cep)
            placeFormData.append("rua", street)
            placeFormData.append("numero", number)
            placeFormData.append("bairro", district)

            newPlace = await axios({
                method: "post",
                url: `http://localhost:3333/places/`,
                data: placeFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })
        } else {
            placeFormData.append("name", placeName)
            placeFormData.append("city", city)
            placeFormData.append("description", placeDescription)
            placeFormData.append("telefone", telefone)
            placeFormData.append("photo", placePhoto)
            placeFormData.append("category", type)
            placeFormData.append("numero", number)
            placeFormData.append("cep", cep)
            placeFormData.append("rua", street)
            placeFormData.append("bairro", district)

            newPlace = await axios({
                method: "post",
                url: `http://localhost:3333/places/`,
                data: placeFormData,
                headers:
                    { "Content-Type": "multipart/form-data" },
            })
        }
        history.push(`/dashboard/city/${city}`)
    }

    return (
        <>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <h2 className="title">Adicionar um local</h2>
                <p>{currentCity.name}</p>

            </DashboardHeader>


            <CardForm>
                <CardFormHeader
                    title="Adicionar um local na cidade"
                    subtitle="Dados basicos"
                />

                <CardFormBody>
                    <label>Nome do local</label>
                    <input type="text" value={placeName} onChange={(e) => setPlaceName(e.target.value)} />

                    <label>Foto do local</label>
                    <Dropzone
                        onDrop={acceptedFiles => {
                            handleFileUploadPlace(acceptedFiles[0])
                            setPhotoPreview(acceptedFiles.map(file => Object.assign(file, {
                                preview: URL.createObjectURL(file)
                            })));
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {photoPreview.length > 0
                                        ? photoPreview.map((file: { preview: string | undefined; }) => (
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
                            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </>
                    }

                    <CardFormFooter>
                        <div className="footer-left">
                            <FiAlertCircle />
                            <p>Preencha todos os dados com cuidado</p>
                        </div>
                        <Button onClick={createNewPlace}>
                            <p className="buttonFinish">Salvar alteracao</p>
                        </Button>
                    </CardFormFooter>
                </CardFormBody>
            </CardForm>


        </>
    )
}