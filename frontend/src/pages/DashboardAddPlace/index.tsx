import axios from "axios";
import { useEffect, useState } from "react";
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
    const [placeDescription, setPlaceDescription] = useState('')
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [number, setNumber] = useState('');;
    const [type, setType] = useState('food');
    const [currentCity, setCurrentCity] = useState({} as currentCityType)
    const { city } = useParams<RouteParams>();
    let history = useHistory();


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3333/cities/${city}`,
            );

            setCurrentCity(result.data);
        };
        fetchData();
    }, [city]);

    async function createNewPlace() {
        try {
            await axios.post('http://localhost:3333/places', {
                name: placeName,
                city: city,
                photo: placePhoto,
                category: type,
                cep,
                rua: street,
                bairro: district,
                numero: number,
                description: placeDescription
            })
            history.push(`/dashboard/city/${city}`)
        } catch (error) {
            console.log(error);
        }
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
                <CardFormHeader title="Adicionar um local na cidade" subtitle="Dados basicos" />

                <CardFormBody>
                    <label>Nome do local</label>
                    <input value={placeName} onChange={(e) => setPlaceName(e.target.value)} />

                    <label>Foto do local</label>
                    <input value={placePhoto} onChange={(e) => setPlacePhoto(e.target.value)} />
                    {/* <div className="form-foto">
                        <BsPlus />
                        <p>Adicionar uma foto</p>
                    </div> */}


                    <label>Descricao do local</label>
                    <textarea value={placeDescription} onChange={(e) => setPlaceDescription(e.target.value)}></textarea>

                    <CardCategoryPicker type={type} setType={setType} />

                    {/* {
                        type === 'food' && <CardFormDates />
                    } */}

                    {
                        type === 'event' && <NextEvent />
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
                        <Button onClick={createNewPlace}><p className="buttonFinish">Adicionar novo local</p></Button>
                    </CardFormFooter>
                </CardFormBody>
            </CardForm>


        </>
    )
}