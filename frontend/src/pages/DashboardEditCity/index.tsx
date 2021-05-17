import { AiOutlineArrowLeft, AiOutlineEdit } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { CardForm } from '../../components/CardForm';
import { CardFormBody } from '../../components/CardFormBody';
import { CardFormFooter } from '../../components/CardFormFooter';
import { CardFormHeader } from '../../components/CardFormHeader';
import { DashboardHeader } from '../../components/DashboardHeader';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { OverlayMessage } from '../../components/OverlayMessage';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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

export function DashboardEditCity() {
    const [editSuccess, setEditSuccess] = useState(false)
    const [currentCity, setCurrentCity] = useState({} as currentCityType);
    const [cityName, setCityName] = useState('');
    const [cityPhoto, setCityPhoto] = useState('');
    const [cityDescription, setCityDescription] = useState('');
    const [cityFact, setCityFact] = useState('');

    const { city } = useParams<RouteParams>();
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(
                `http://localhost:3333/cities/${city}`,
            );

            setCurrentCity(data);
            setCityName(data.name);
            setCityPhoto(data.photo);
            setCityDescription(data.description);
            setCityFact(data.fact);
        };

        fetchData();
    }, [city]);

    async function handleEditSuccess() {
        await axios.put(`http://localhost:3333/cities/${city}`, {
            name: cityName,
            description: cityDescription,
            fact: cityFact,
            photo: cityPhoto
        })

        setEditSuccess(true);

        setTimeout(() => {
            setEditSuccess(false);
            history.push('/dashboard')
        }, 1500);
    }

    return (
        <Container>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <h2 className="title">Editar</h2>
                <div className="right">
                    <p>{currentCity.name}</p>
                </div>
            </DashboardHeader>

            <CardForm>
                <CardFormHeader
                    title="Editar cidade"
                    subtitle="Dados da cidade"
                />

                <CardFormBody>
                    <label>Nome da cidade</label>
                    <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                    <label htmlFor="">Foto da cidade</label>
                    <input type="text" value={cityPhoto} onChange={(e) => setCityPhoto(e.target.value)} />
                    {/* <div className="form-foto-edit">
                        <div>
                            <AiOutlineEdit />
                        </div>
                        <img src="https://images.unsplash.com/photo-1590093804249-491680485e5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    </div> */}

                    <label>Descricao da cidade</label>
                    <textarea value={cityDescription} onChange={(e) => setCityDescription(e.target.value)}></textarea>
                    <label>Curiosidade da cidade</label>
                    <textarea value={cityFact} onChange={(e) => setCityFact(e.target.value)}></textarea>
                </CardFormBody>

                <CardFormFooter>
                    <div className="footer-left">
                        <FiAlertCircle />
                        <p>Preencha todos os dados com cuidado</p>
                    </div>
                    <Button onClick={() => handleEditSuccess()}><p className="buttonFinish">Salvar alteracao</p></Button>
                </CardFormFooter>
            </CardForm>


            {
                editSuccess && <OverlayMessage text="Alteracoes salvas!" />
            }

        </Container>
    )
}