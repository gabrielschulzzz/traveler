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
    const [numero, setNumero] = useState('');
    const [photo, setPhoto] = useState('');
    const [rua, setRua] = useState('');
    const [description, setDescription] = useState('');
    const [deleteTriggered, setDeleteTriggered] = useState(false);

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
            setPhoto(data.photo);
            setRua(data.rua);
            setDescription(data.description);
        }

        fetchData()
    }, [place])

    function handleEditSuccess() {
        axios.patch(`http://localhost:3333/places/${place}`, {
            name,
            city,
            photo,
            category: type,
            cep,
            rua,
            bairro,
            numero
        })

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

                    <CardCategoryPicker setType={setType} />

                    {
                        type === 'food' && <CardFormDates />
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