import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, DeleteButton } from './styles';

import { AiOutlineArrowLeft, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Button } from '../../components/Button';
import { CardCategoryPicker } from '../../components/CardCategoryPicker';
import { CardForm } from '../../components/CardForm';
import { CardFormAddress } from '../../components/CardFormAddress';
import { CardFormBody } from '../../components/CardFormBody';
import { CardFormDates } from '../../components/CardFormDates';
import { CardFormFooter } from '../../components/CardFormFooter';
import { CardFormHeader } from '../../components/CardFormHeader';
import { DashboardHeader } from '../../components/DashboardHeader';
import { DashboardNavbar } from '../../components/DashboardNavbar';
import { NextEvent } from '../../components/NextEvent';
import { OverlayMessage } from '../../components/OverlayMessage';
import { OverlayDelete } from '../../components/OverlayDelete';

interface RouteParams {
    city: string;
    place: string;
}

export function DashboardEditPlace() {
    const [editSuccess, setEditSuccess] = useState(false)
    const [type, setType] = useState('food');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numero, setNumero] = useState('');
    const [photo, setPhoto] = useState('');
    const [rua, setRua] = useState('');
    const [description, setDescription] = useState('');
    const [deleteTriggered, setDeleteTriggered] = useState(false);
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

    let history = useHistory();

    const { city, place } = useParams<RouteParams>();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(`http://localhost:3333/places/${place}`)

            setType(data.category)
            setBairro(data.bairro)
            setCep(data.cep);
            setName(data.name);
            setNumero(data.numero);
            setTelefone(data.telefone);
            setPhoto(data.photo);
            setRua(data.rua);
            setDescription(data.description);

            setSegundaOpen(data.segundaOpen);
            setSegundaFrom(data.segundaFrom);
            setSegundaUntil(data.segundaUntil);

            setTercaOpen(data.tercaOpen);
            setTercaFrom(data.tercaFrom);
            setTercaUntil(data.tercaUntil);

            setQuartaOpen(data.quartaOpen);
            setQuartaFrom(data.quartaFrom);
            setQuartaUntil(data.quartaUntil);

            setQuintaOpen(data.quintaOpen);
            setQuintaFrom(data.quintaFrom);
            setQuintaUntil(data.quintaUntil);

            setSextaOpen(data.sextaOpen);
            setSextaFrom(data.sextaFrom);
            setSextaUntil(data.sextaUntil);

            setSabadoOpen(data.sabadoOpen);
            setSabadoFrom(data.sabadoFrom);
            setSabadoUntil(data.sabadoUntil);

            setDomingoOpen(data.domingoOpen);
            setDomingoFrom(data.domingoFrom);
            setDomingoUntil(data.domingoUntil);
        }

        fetchData()
    }, [place])

    function handleEditSuccess() {
        if (type === "food") {
            axios.patch(`http://localhost:3333/places/${place}`, {
                name,
                city,
                photo,
                category: type,
                cep,
                rua,
                telefone,
                bairro,
                numero,
                description,
                domingoOpen,
                domingoFrom,
                domingoUntil,
                segundaOpen,
                segundaFrom,
                segundaUntil,
                tercaOpen,
                tercaFrom,
                tercaUntil,
                quartaOpen,
                quartaFrom,
                quartaUntil,
                quintaOpen,
                quintaFrom,
                quintaUntil,
                sextaOpen,
                sextaFrom,
                sextaUntil,
                sabadoOpen,
                sabadoFrom,
                sabadoUntil,
            })
        }

        if (type === "turistic" || type === "event") {
            axios.patch(`http://localhost:3333/places/${place}`, {
                name,
                city,
                photo,
                category: type,
                cep,
                rua,
                bairro,
                numero,
                description,
                domingoOpen: null,
                domingoFrom: null,
                domingoUntil: null,
                segundaOpen: null,
                segundaFrom: null,
                segundaUntil: null,
                tercaOpen: null,
                tercaFrom: null,
                tercaUntil: null,
                quartaOpen: null,
                quartaFrom: null,
                quartaUntil: null,
                quintaOpen: null,
                quintaFrom: null,
                quintaUntil: null,
                sextaOpen: null,
                sextaFrom: null,
                sextaUntil: null,
                sabadoOpen: null,
                sabadoFrom: null,
                sabadoUntil: null,
            })
        }

        setEditSuccess(true);
        setTimeout(() => {
            setEditSuccess(false);
            history.push(`/dashboard/city/${city}`)
        }, 1500);
    }

    async function deletePlace() {
        await axios.delete(`http://localhost:3333/places/${place}`)

        history.push(`/dashboard/city/${city}`)
        setDeleteTriggered(false)
    }

    return (
        <Container>
            <DashboardNavbar />
            <DashboardHeader>
                <Link to="/dashboard">
                    <AiOutlineArrowLeft />
                </Link>
                <h2 className="title">Editar</h2>
                <DeleteButton>
                    <button onClick={() => setDeleteTriggered(true)} ><AiOutlineDelete />Deletar local</button>
                </DeleteButton>
            </DashboardHeader>

            <CardForm>
                <CardFormHeader title="Editar local da cidade" subtitle="Dados basicos" />

                <CardFormBody>
                    <label>Nome do local</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Foto do local</label>
                    <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                    {/* <div className="form-foto-edit">
                        <div>
                            <AiOutlineEdit />
                        </div>
                        <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=972&q=80" alt="" />
                    </div> */}

                    <label>Descricao do local</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <CardCategoryPicker type={type} setType={setType} />

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
                        type === 'event' && <NextEvent />
                    }


                    <CardFormAddress
                        map
                        cep={cep}
                        street={rua}
                        district={bairro}
                        number={numero}
                        setCep={setCep}
                        setDistrict={setBairro}
                        setNumber={setNumero}
                        setStreet={setRua}
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
                        <Button onClick={handleEditSuccess}><p className="buttonFinish">Salvar alteracao</p></Button>
                    </CardFormFooter>
                </CardFormBody>
            </CardForm>

            {
                editSuccess && <OverlayMessage text="Alteracoes salvas!" />
            }

            {
                deleteTriggered &&
                <OverlayDelete
                    title="Excluir local"
                    text={`Tem certeza que quer excluir o local ${name}?`}
                    setDeletTriggered={setDeleteTriggered}
                    handleDelete={deletePlace}
                />
            }
        </Container>
    )
}